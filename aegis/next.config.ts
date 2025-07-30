import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure CSS modules are enabled
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  experimental: {
    optimizeCss: false
  }
};

export default nextConfig;
