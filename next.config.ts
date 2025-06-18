import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["flagcdn.com", "res.cloudinary.com"],
  },
  async redirects() {
    return [
      {
        source: "/whatsapp",
        destination: "https://wa.me/19296509060",
        permanent: true,
      },
      {
        source: "/telegram",
        destination: "https://t.me/decods",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
