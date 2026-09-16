import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The dev-only indicator badge sits bottom-left and collides with this
  // demo's own presentation-controls button in the same corner.
  devIndicators: false,
};

export default nextConfig;
