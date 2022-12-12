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
    domains: ['pbs.twimg.com', 'img.freepik.com', 'assets.poap.xyz', 's3.us-east-2.amazonaws.com', 'www.poap.xyz', '**.s3-us-west-2.amazonaws.com', 'images.mintkudos.xyz',
      'ipfs.infura.io',
      'statics-polygon-lens-staging.s3.eu-west-1.amazonaws.com',
      'lens.infura-ipfs.io',
      'source.unsplash.com',
      '',
    ],
    remotePatterns: [
      {
        protocol: 'ipfs',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: '**.amazonaws.com',
        // pathname: '**.s3-us-west-2.amazonaws.com',
      },
    ],
  },
};

module.exports = nextConfig;
