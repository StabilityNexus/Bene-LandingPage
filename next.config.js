/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // The official GitHub Pages action will set this automatically
  // We don't need to manually configure it
  images: {
    unoptimized: true,
  },
  // Allow the GitHub Pages action to set the basePath
  // The custom domain check will be handled client-side
  trailingSlash: true,
  // This ensures paths work correctly on both custom domains and GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : undefined,
}

module.exports = nextConfig;