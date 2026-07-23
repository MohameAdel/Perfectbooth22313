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
      {
        protocol: 'https',
        hostname: 'vqknbbjrosel3hr8.public.blob.vercel-storage.com',
        pathname: '/photos/image-work-home-badge/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
