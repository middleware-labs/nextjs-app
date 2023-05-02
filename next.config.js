/** @type {import('next').NextConfig} */
// const nextConfig =

module.exports = {
  reactStrictMode: true,
  experimental: {
    trace: {
      serviceName: 'vercel-testing-service'
    },
  },
}
