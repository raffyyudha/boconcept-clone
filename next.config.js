/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["*.preview.same-app.com"],
  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
      "mqqbtxdvmsuzfhzxgojb.supabase.co",
      "cdn.media.amplience.net",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mqqbtxdvmsuzfhzxgojb.supabase.co",
        pathname: "/storage/**",
      },
      {
        protocol: "https",
        hostname: "cdn.media.amplience.net",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
