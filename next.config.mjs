/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- Add this line to force a static HTML export
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
