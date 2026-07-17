import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // Let `src/middleware.ts` run before any trailing-slash redirect so the
  // `/r/*` and `/p/*` share links can return 200 directly (Apple Universal
  // Links don't follow 3xx). With Next's built-in redirect disabled, the
  // middleware re-issues the trailing-slash redirect for normal pages, so the
  // rest of the site keeps its existing `trailingSlash: true` behavior.
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true
  },
};

export default nextConfig;
