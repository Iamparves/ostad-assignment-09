/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'etzq49yfnmd.exactdn.com',
        port: '',
        pathname: '/wp-content/uploads/2022/03/**',
      },
    ],
  },
}

module.exports = nextConfig
