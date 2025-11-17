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
    // Ensure images work properly on Netlify
    // Next.js 16 with @netlify/plugin-nextjs handles image optimization automatically
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
