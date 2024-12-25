/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Changed from 'standalone' to 'export' for static deployment
  images: {
    domains: ['cdnjs.cloudflare.com'],
    unoptimized: true, // Required for static export
  },
  basePath: '/sNickTrackER', // Add basePath for GitHub Pages
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};

module.exports = nextConfig;