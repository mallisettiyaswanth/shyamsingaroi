/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.cmrshoppingmall.in"],
    remotePatterns: [
      {
        hostname: "trzdpdbggkhsashrxewd.supabase.co",
      },
    ],
  },
};

export default nextConfig;
