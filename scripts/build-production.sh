#!/bin/bash
# Production build script for Cloudflare Pages
# 1. Upload images to Cloudflare Images
# 2. Build Next.js
# 3. Remove images from public folder to reduce bundle size

echo "🚀 Starting production build..."

# Step 1: Upload images
echo "📤 Uploading images to Cloudflare..."
npm run upload:images

# Step 2: Build Next.js
echo "🔨 Building Next.js..."
npm run build

# Step 3: Remove images from build output (optional - reduces bundle size)
echo "🗑️  Removing images from public folder..."
rm -rf public/images

echo "✅ Production build complete!"
echo "📦 Images are served from Cloudflare Images CDN"
