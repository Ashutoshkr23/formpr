/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

module.exports = ({
  images: {
    domains: ['lh3.googleusercontent.com', 'encrypted-tbn0.gstatic.com', 'hashifeedimages.s3.amazonaws.com'],
  },
});
