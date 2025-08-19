import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/donate',
        destination: '/contact',
        permanent: true, // 301
      },
    ];
  },
};

export default nextConfig;
