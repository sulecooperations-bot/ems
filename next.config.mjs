/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sulecoltd.com',
      },
    ],
  },
};

export default nextConfig;

