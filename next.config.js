const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com", "source.unsplash.com"],
  },
};

nextConfig = withPWA({ ...nextConfig, pwa: { dest: "public" } });

module.exports = nextConfig;
