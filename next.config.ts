import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    // Ada package-lock.json di home directory; tanpa ini Next.js
    // meng-watch seluruh /Users/rutherford dan halaman lain stuck di compiling.
    root: path.join(__dirname),
  },
  allowedDevOrigins: ["192.168.1.*"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "www.istockphoto.com",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
    ],
  },
};

export default nextConfig;
