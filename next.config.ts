import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
    resolveAlias: {
      tailwindcss: path.join(__dirname, "node_modules/tailwindcss/index.css"),
      "tailwindcss/preflight": path.join(__dirname, "node_modules/tailwindcss/preflight.css"),
      "tailwindcss/utilities": path.join(__dirname, "node_modules/tailwindcss/utilities.css"),
    },
  },
};

export default nextConfig;
