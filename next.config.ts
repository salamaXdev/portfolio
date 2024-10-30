import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio', // Should match your repository name
  assetPrefix: '/portfolio/', // Should match your repository name
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
