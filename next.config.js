// @ts-check
/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {
        canvas: "./empty-module.ts",
      },
    },
  },

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

  webpack: (config, { isServer }) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};

module.exports = nextConfig;
