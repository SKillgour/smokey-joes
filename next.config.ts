import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  experimental: {
    // Disable Turbopack's filesystem cache to prevent OneDrive sync storms
    // (this project lives in a OneDrive folder; the cache writes thousands of
    // files that OneDrive tries to sync, crashing Windows file watchers)
    turbopackFileSystemCacheForDev: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;
