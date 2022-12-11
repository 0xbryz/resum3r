/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      'pbs.twimg.com',
      'img.freepik.com',
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
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
