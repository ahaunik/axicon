import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/axicon',
  images: { unoptimized: true },
};

export default nextConfig;