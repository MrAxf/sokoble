import nextPWAConfig from 'next-pwa'

const withPWA = nextPWAConfig({
  dest: 'public',
  register: true,
  skipWaiting: true,
  // disable: process.env.NODE_ENV === 'development'
  disable: false
})
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withPWA({
  reactStrictMode: false
})

export default nextConfig
