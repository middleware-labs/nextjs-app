/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  experimental: {
    instrumentationHook: true,
    /*trace: {
      serviceName: 'vercel-testing-service'
    },*/
  },
}

module.exports = nextConfig
