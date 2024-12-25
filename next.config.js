/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for hosting flexibility
  output: 'export',
  images: {
    domains: ['cdnjs.cloudflare.com'],
    unoptimized: true,
  },
  basePath: '/sNickTrackER',
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};

module.exports = nextConfig;
