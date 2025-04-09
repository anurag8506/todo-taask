import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['assets.codepen.io'], // Add external domain for images
  },
};

export default nextConfig;
