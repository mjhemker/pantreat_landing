import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Browsers request /favicon.ico before HTML; point at the app icon asset.
  async rewrites() {
    return [
      { source: "/favicon.ico", destination: "/assets/app_cover.png" },
    ];
  },
};

export default nextConfig;
