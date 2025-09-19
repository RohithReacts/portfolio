/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // disable Image Optimization API
  },
  devIndicators: false,
  // Fix paths for GitHub Pages
  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "/portfolio/" : "",
};


export default nextConfig;
