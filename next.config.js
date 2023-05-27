/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  experimental: {
    serverActions: true,
  }
}

module.exports = nextConfig
