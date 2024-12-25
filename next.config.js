/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  output: 'export',
  images: {
    domains: ['cdnjs.cloudflare.com'],
    unoptimized: true,
  },
  basePath: '/sNickTrackER',
  reactStrictMode: true,
=======
  // Enable static exports for hosting flexibility
  output: 'standalone',
  
  // Configure image domains for Leaflet markers
  images: {
    domains: ['cdnjs.cloudflare.com'],
  },

  // Enable strict mode for better development
  reactStrictMode: true,
  
  // Configure webpack to handle node modules
>>>>>>> c30e78d (Add package-lock.json)
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};

module.exports = nextConfig;