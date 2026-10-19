import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/wedding-invitation-colleages",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
