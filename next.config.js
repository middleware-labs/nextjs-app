/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    trace: {
      serviceName: 'vercel-testing-service'
    },
  },
}

module.exports = nextConfig
