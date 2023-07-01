/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      "images.unsplash.com"
    ]
  },
  env: {
    MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
    MAILCHIMP_AUDIENCE_ID: process.env.MAILCHIMP_AUDIENCE_ID,
    MAILCHIMP_API_SERVER: process.env.MAILCHIMP_API_SERVER,
  },
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: "Cache-Control",
            value: "s-maxage=86400, public, max-age=86400"
          }
        ],
      },
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: "Cache-Control",
            value: "s-maxage=86400, public, max-age=86400"
          }
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=3571000; includeSubDomains; preload',
          }],
      },
      {
        source: '/:path*/(.html)',
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=0, must-revalidate"
          }
        ],
      },
    ]
  }
}

module.exports = nextConfig
