/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'page.ts'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['pbs.twimg.com', 'img.freepik.com'],
    remotePatterns: [
      {
        protocol: 'ipfs',
        hostname: '**',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
