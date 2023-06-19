/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'ts'],
  experimental: {
    instrumentationHook: true,
  },
}

module.exports = nextConfig
