/**
 * Cloudflare Images helper
 * Automatically converts local image paths to Cloudflare CDN URLs
 */

const ACCOUNT_HASH = process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH;

export type ImageVariant = 'public' | 'thumbnail' | 'hero' | 'card';

/**
 * Convert local image path to Cloudflare CDN URL
 * @param path - Local path like '/images/banner01.png' or 'banner01.png'
 * @param variant - Image variant (default: 'public')
 * @returns Optimized image URL (Cloudflare or local)
 *
 * @example
 * img('/images/banner01.png') // Cloudflare or local
 * img('banner01.png', 'hero') // With variant
 */
export function img(path: string, variant: ImageVariant = 'public'): string {
  // If Cloudflare not configured, return local path
  if (!ACCOUNT_HASH || ACCOUNT_HASH === 'your-account-hash-here') {
    return path.startsWith('/') ? path : `/images/${path}`;
  }

  // Convert path to image ID: '/images/space/front-desk.png' -> 'space-front-desk'
  const imageId = path
    .replace(/^\/images\//, '')
    .replace(/\.(jpg|jpeg|png|webp|gif)$/i, '')
    .replace(/\//g, '-')
    .toLowerCase();

  return `https://imagedelivery.net/${ACCOUNT_HASH}/${imageId}/${variant}`;
}

/**
 * Check if Cloudflare Images is enabled
 */
export function isCloudflareEnabled(): boolean {
  return !!ACCOUNT_HASH && ACCOUNT_HASH !== 'your-account-hash-here';
}
