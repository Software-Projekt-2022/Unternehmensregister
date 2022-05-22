/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  async rewrites() {
        return [
          {
            source: '/js/:path*',
            destination: 'http://localhost:8085/:path*',
          },
        ]
      },
};
