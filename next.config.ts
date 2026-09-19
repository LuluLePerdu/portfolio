import type { NextConfig } from "next";

// Static export: Cloudflare Pages serves out/, and functions/ handles the contact form.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
