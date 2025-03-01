const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
  },
  basePath: '',
  assetPrefix: ''
}

module.exports = nextConfig;
