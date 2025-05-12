/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Since we're migrating from Vite, we'll keep using the same build directory
  distDir: 'dist',
  // Configure path aliases
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': __dirname + '/src',
    }
    return config
  }
}

module.exports = nextConfig
