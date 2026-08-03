import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "edge.tapsleek.com",
      },
      {
        protocol: "https",
        hostname: "edge.moksedul.com",
      },
    ],
  },
};

export default nextConfig;
