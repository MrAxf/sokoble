const nextPWAConfig = require('next-pwa')
const { i18n } = require('./next-i18next.config')

const withPWA = nextPWAConfig({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
})
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: false,
  i18n
}

module.exports = withPWA(nextConfig)
