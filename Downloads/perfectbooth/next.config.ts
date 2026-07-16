import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ouneg.com',
      },
      {
        protocol: 'https',
        hostname: 'admin.perfectbooth-events.com',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
