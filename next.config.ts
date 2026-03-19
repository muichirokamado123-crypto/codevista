import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/codevista",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
