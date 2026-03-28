import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  output: "standalone",
  // Legacy init script attaches listeners once; avoid double effect in dev.
  reactStrictMode: false,
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
