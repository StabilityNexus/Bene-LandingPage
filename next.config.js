/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    // Remove any custom webpack config for sass
    sassOptions: {
      includePaths: ['./src'],
    },
    // Fix the asset prefix issue
    basePath: '',
    assetPrefix: ''
  }
  
  module.exports = nextConfig;
  