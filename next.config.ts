import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/index.aspx', destination: '/', permanent: true },
      { source: '/about.aspx', destination: '/about', permanent: true },
      { source: '/courses.aspx', destination: '/programs', permanent: true },
      { source: '/neet.aspx', destination: '/programs/neet', permanent: true },
      { source: '/jeeadvance.aspx', destination: '/results/jee', permanent: true },
      { source: '/Scholarship.aspx', destination: '/scholarship', permanent: true },
      { source: '/gallery.aspx', destination: '/gallery', permanent: true },
      { source: '/contact.aspx', destination: '/contact', permanent: true },
    ]
  },
};

export default nextConfig;
