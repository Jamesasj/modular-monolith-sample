/** @type {import('next').NextConfig} */


const { ADMIN_URL, DASH_URL } = process.env


const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/:path*',
            destination: `/:path*`,
          },
          {
            source: '/admin',
            destination: `${ADMIN_URL}/`,
          },
          {
            source: '/admin/:path*',
            destination: `${ADMIN_URL}/:path*`,
          },
          {
            source: '/dash',
            destination: `${DASH_URL}/`,
          },
          {
            source: '/dash/:path*',
            destination: `${DASH_URL}/:path*`,
          },
        ]
      },
};

export default nextConfig;
