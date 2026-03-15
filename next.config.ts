import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/codevista",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
