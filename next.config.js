/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "/milli-website/",
  basePath: "/milli-website",
  images: {
    loader: "custom",
    loaderFile: "/my-loader.ts",
  },
};

module.exports = nextConfig;
