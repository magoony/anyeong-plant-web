/**
 * Upload images to Cloudflare Images
 * Run: npm run upload:images
 */

import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';
import FormData from 'form-data';

// Load environment variables from .env.local
const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim();
      process.env[key] = value;
    }
  });
}

// Configuration
const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID || '';
const CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN || '';
const CLOUDFLARE_API_KEY = process.env.CLOUDFLARE_API_KEY || '';
const CLOUDFLARE_EMAIL = process.env.CLOUDFLARE_EMAIL || '';
const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');

// Check authentication (Token or API Key)
const hasToken = CLOUDFLARE_ACCOUNT_ID && CLOUDFLARE_API_TOKEN;
const hasApiKey = CLOUDFLARE_ACCOUNT_ID && CLOUDFLARE_API_KEY && CLOUDFLARE_EMAIL;

if (!hasToken && !hasApiKey) {
  console.error('❌ Missing environment variables:');
  console.error('   Option 1: CLOUDFLARE_ACCOUNT_ID + CLOUDFLARE_API_TOKEN');
  console.error('   Option 2: CLOUDFLARE_ACCOUNT_ID + CLOUDFLARE_API_KEY + CLOUDFLARE_EMAIL');
  process.exit(1);
}

// Helper to get auth headers
function getAuthHeaders(): Record<string, string> {
  if (CLOUDFLARE_API_TOKEN) {
    return {
      Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`,
    };
  } else {
    return {
      'X-Auth-Email': CLOUDFLARE_EMAIL,
      'X-Auth-Key': CLOUDFLARE_API_KEY,
    };
  }
}

interface UploadResult {
  success: boolean;
  localPath: string;
  imageId: string;
  url?: string;
  error?: string;
}

/**
 * Get all image files recursively
 */
function getImageFiles(dir: string, baseDir: string = dir): string[] {
  const files: string[] = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...getImageFiles(fullPath, baseDir));
    } else if (/\.(jpg|jpeg|png|webp|gif)$/i.test(item)) {
      // Get relative path from images directory
      const relativePath = path.relative(baseDir, fullPath);
      files.push(relativePath);
    }
  }

  return files;
}

/**
 * Generate image ID from file path
 * Example: "space/front-desk.png" -> "space-front-desk"
 */
function generateImageId(filePath: string): string {
  return filePath
    .replace(/\.(jpg|jpeg|png|webp|gif)$/i, '')
    .replace(/\\/g, '/')
    .replace(/\//g, '-')
    .toLowerCase();
}

// Project identifier for all images
const PROJECT_TAG = 'annyeong-plant-dental';

/**
 * Generate metadata for image
 * All images will be tagged with the project name
 */
function generateMetadata(filePath: string): Record<string, string> {
  return {
    project: PROJECT_TAG,
    originalPath: filePath,
    uploadedAt: new Date().toISOString(),
  };
}

/**
 * Get all existing images from Cloudflare (one API call)
 */
async function getExistingImages(): Promise<Set<string>> {
  try {
    const response = await axios.get(
      `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/images/v2?per_page=1000`,
      {
        headers: getAuthHeaders(),
      }
    );

    if (response.data.success) {
      return new Set(response.data.result.images.map((img: { id: string }) => img.id));
    }

    return new Set();
  } catch {
    return new Set();
  }
}

/**
 * Upload image to Cloudflare
 */
async function uploadImage(
  filePath: string,
  existingImages: Set<string>
): Promise<UploadResult> {
  const fullPath = path.join(IMAGES_DIR, filePath);
  const imageId = generateImageId(filePath);

  try {
    // Check if image already exists (fast - just Set lookup)
    if (existingImages.has(imageId)) {
      return {
        success: true,
        localPath: filePath,
        imageId: imageId,
        error: 'Already exists (skipped)',
      };
    }

    const form = new FormData();
    form.append('file', fs.createReadStream(fullPath));
    form.append('id', imageId);

    // Add metadata to identify this project's images
    const metadata = generateMetadata(filePath);
    form.append('metadata', JSON.stringify(metadata));

    const response = await axios.post(
      `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/images/v1`,
      form,
      {
        headers: {
          ...getAuthHeaders(),
          ...form.getHeaders(),
        },
      }
    );

    if (response.data.success) {
      return {
        success: true,
        localPath: filePath,
        imageId: imageId,
        url: response.data.result.variants[0],
      };
    } else {
      return {
        success: false,
        localPath: filePath,
        imageId: imageId,
        error: response.data.errors?.[0]?.message || 'Upload failed',
      };
    }
  } catch (error) {
    return {
      success: false,
      localPath: filePath,
      imageId: imageId,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Generate updated image mapping config
 */
function generateImageMapping(results: UploadResult[]): string {
  const successful = results.filter((r) => r.success);

  const mappingEntries = successful
    .map((r) => `  '${r.localPath}': '${r.imageId}',`)
    .join('\n');

  return `// Auto-generated by upload-to-cloudflare.ts
// Last updated: ${new Date().toISOString()}

const IMAGE_IDS: Record<string, string> = {
${mappingEntries}
};

export default IMAGE_IDS;
`;
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Starting Cloudflare Images upload...\n');

  // Get existing images from Cloudflare (one API call)
  console.log('🔍 Checking existing images...');
  const existingImages = await getExistingImages();
  console.log(`📦 Found ${existingImages.size} existing images in Cloudflare\n`);

  // Get all local image files
  const imageFiles = getImageFiles(IMAGES_DIR);
  console.log(`📁 Found ${imageFiles.length} local images\n`);

  // Upload images
  const results: UploadResult[] = [];

  for (const [index, file] of imageFiles.entries()) {
    process.stdout.write(
      `[${index + 1}/${imageFiles.length}] Uploading ${file}...`
    );

    const result = await uploadImage(file, existingImages);
    results.push(result);

    if (result.success && !result.error) {
      console.log(` ✅ ${result.imageId}`);
    } else if (result.error?.includes('Already exists')) {
      console.log(` ⏭️  ${result.error}`);
    } else {
      console.log(` ❌ ${result.error}`);
    }
  }

  // Summary
  const successful = results.filter((r) => r.success && !r.error).length;
  const skipped = results.filter((r) => r.success && r.error?.includes('Already exists')).length;
  const failed = results.filter((r) => !r.success).length;

  console.log('\n' + '='.repeat(50));
  console.log(`✅ Uploaded: ${successful}`);
  console.log(`⏭️  Skipped (already exists): ${skipped}`);
  console.log(`❌ Failed: ${failed}`);
  console.log('='.repeat(50) + '\n');

  // Generate mapping file
  if (successful > 0) {
    const mappingContent = generateImageMapping(results);
    const mappingPath = path.join(
      process.cwd(),
      'src',
      'config',
      'image-ids.ts'
    );

    fs.writeFileSync(mappingPath, mappingContent, 'utf-8');
    console.log(`📝 Generated image mapping: ${mappingPath}\n`);
  }

  // Show failed uploads
  if (failed > 0) {
    console.log('❌ Failed uploads:');
    results
      .filter((r) => !r.success)
      .forEach((r) => {
        console.log(`   - ${r.localPath}: ${r.error}`);
      });
  }

  console.log('\n✨ Upload complete!');
}

main().catch(console.error);
