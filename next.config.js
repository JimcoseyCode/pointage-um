/** @type {import('next').NextConfig} */
const nextConfig = {
output: 'standalone',
experimental: {
    // Enable features needed for standalone mode
    outputFileTracingRoot: undefined,
    outputStandalone: true,
},
}

module.exports = nextConfig

