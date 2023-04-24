/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    POKEMON_API: process.env.POKEMON_API
  }
}

module.exports = nextConfig
