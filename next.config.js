/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  env: {
    NEXT_PUBLIC_MAILCHIMP_API_KEY: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
    NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID: process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID,
    NEXT_PUBLIC_MAILCHIMP_API_SERVER: process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER,
  },
  images: {
    unoptimized: true,
  }
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'X-Frame-Options',
  //           value: 'DENY',
  //         },
  //         {
  //           key: 'X-Content-Type-Options',
  //           value: 'nosniff',
  //         },
  //         {
  //           key: 'Strict-Transport-Security',
  //           value: 'max-age=3571000; includeSubDomains; preload',
  //         },
  //         {
  //           key: "Cache-Control",
  //           value: "s-maxage=3600"
  //         }
  //       ],
  //     },
  //   ]
  // }
}

module.exports = nextConfig
