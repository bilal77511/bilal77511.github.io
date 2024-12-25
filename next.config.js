/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ['avatars.githubusercontent.com'],
    unoptimized: true,
  },
  assetPrefix: '/portfolio',
  basePath: '/portfolio',
  distDir: 'out'
}

module.exports = nextConfig

