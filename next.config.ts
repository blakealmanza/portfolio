import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Morphs a project's band into the top of its case-study page.
    viewTransition: true,
  },
  images: {
    qualities: [70, 75, 90, 100],
  },
};

export default nextConfig;
