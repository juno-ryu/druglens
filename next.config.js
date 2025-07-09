/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  compiler: {
    emotion: true,
  },
  experimental: {
    // staleTimes: {
    //   dynamic: 0,
    //   static: 0,
    // },
  },
  logging: {
    // fetches: {
    //   fullUrl: true,
    // },
  },
  reactStrictMode: false,
  images: {
    deviceSizes: [420, 620, 836, 1200, 1920, 2600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 360],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.acon3d.com',
        port: '',
        pathname: '/product/**',
      },
    ],
  },
  async rewrites() {
    return [];
  },
};

module.exports = nextConfig;
