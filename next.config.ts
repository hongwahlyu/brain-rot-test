/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // 警告：这会让 Vercel 在打包时忽略 ESLint 错误
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 警告：这会让 Vercel 在打包时忽略 TypeScript 错误
    ignoreBuildErrors: true,
  },
};

export default nextConfig;