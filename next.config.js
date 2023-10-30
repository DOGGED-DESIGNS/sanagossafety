/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  disableManifest: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
