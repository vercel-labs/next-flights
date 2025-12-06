import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.mapbox.com',
      },
    ],
  },
  experimental: {
    cacheComponents: true,
    serverComponentsHmrCache: false,
  },
};

export default nextConfig;
