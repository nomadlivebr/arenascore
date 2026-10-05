import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Habilita o modo estrito do React
  reactStrictMode: true,

  // Configura o transpile dos pacotes internos do monorepo
  transpilePackages: ["@arenascore/shared"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // Headers de segurança básicos
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
