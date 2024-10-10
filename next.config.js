/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: "/milli-website",
  assetPrefix: "/milli-website/",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
