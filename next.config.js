// @ts-check
/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "imgur.com",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
    ],
  },
  experimental: {
     turbo: {
       resolveAlias: {
         canvas: './empty-module.ts',
       },
     },
   },
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
};

module.exports = nextConfig;
