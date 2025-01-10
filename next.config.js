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
  // webpack: (config, { isServer }) => {
  //   config.resolve.alias["@"] = path.resolve(__dirname, "src");
  //   if (!isServer) {
  //     config.externals = { canvas: "canvas" };
  //   }
  //   return config;
  // },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (isServer) {
      config.resolve.alias.canvas = false;
    }

    return config
  }
};

module.exports = nextConfig;
