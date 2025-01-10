// @ts-check
/** @type {import('next').NextConfig} */

const path = require("node:path");

const nextConfig = {
  images: {
    remotePatterns: [
      //   'res.cloudinary.com',
      //   'avatars.githubusercontent.com',
      //   'imgur.com',
      // ],
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
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};

module.exports = nextConfig;
