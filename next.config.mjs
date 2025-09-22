import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.graphassets.com",
      },
      {
        protocol: "https",
        hostname: "ap-northeast-1.cdn.hygraph.com",
      },
      {
        protocol: "https",
        hostname: "ap-northeast-1.graphassets.com",
      },
    ],
    minimumCacheTTL: 7776000,
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=3571000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const millionConfig = {
  auto: true,
  // if you're using RSC:
  auto: { rsc: true },
};

export default million.next(nextConfig, millionConfig);
