import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
   experimental: {
    turbo: false,
  },
};

export default nextConfig;
