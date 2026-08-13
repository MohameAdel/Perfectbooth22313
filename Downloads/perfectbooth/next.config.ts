import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
import withBundleAnalyzer from '@next/bundle-analyzer';

const withNextIntl = createNextIntlPlugin();
const analyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ouneg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'admin.perfectbooth-events.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'vqknbbjrosel3hr8.public.blob.vercel-storage.com',
        pathname: '/**',
      },
    ],
  },
};

export default analyzer(withNextIntl(nextConfig));
