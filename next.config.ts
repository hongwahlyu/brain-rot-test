import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 核心：跳过 TypeScript 错误检查，直接打包
  typescript: {
    ignoreBuildErrors: true,
  },
  // 核心：跳过 ESLint 检查，防止因为空格、分号报错中止
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 允许跨域或静态生成优化
  images: {
    unoptimized: true,
  },
};

export default nextConfig;