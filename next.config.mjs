/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: ''
      }
    ]
  },
  webpack: (config, { dev, isServer }) => {
    // Optimize webpack cache serialization
    config.cache = {
      ...config.cache,
      type: 'filesystem',
      buildDependencies: {
        config: [__filename]
      },
      cacheDirectory: '.next/cache',
      maxAge: 172800000, // 2 days
      compression: 'gzip',
      store: 'pack',
      version: '1.0.0'
    };

    return config;
  }
};

export default nextConfig;
