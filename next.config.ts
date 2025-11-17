import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Disable optimization to ensure images work on Netlify
    // Images will load directly without Next.js optimization
    unoptimized: true,
  },
};

export default nextConfig;
