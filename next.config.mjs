import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: ".",
    images: {
    unoptimized: true,
  },
};

export default nextConfig;