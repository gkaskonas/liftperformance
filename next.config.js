/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    minimumCacheTTL: 600,
    deviceSizes: [320, 640, 768, 1024, 1280, 1536, 1820, 2000],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com'
      }
    ]
  },
  async headers () {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=3571000; includeSubDomains; preload'
          }
        ]
      }
    ]
  },
  webpack (config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  }
}
