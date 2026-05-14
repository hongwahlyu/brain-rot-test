// 路径: app/layout.tsx
import './globals.css';
import { Analytics } from "@vercel/analytics/react"; // <-- 引入 Vercel 监控探头

export const metadata = {
  title: 'Brain Rot Terminal',
  description: 'Unleash your brain rot genius. Discover your digital DNA.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="hide-scrollbar">
      <body className="bg-[#1a1814] text-[#e5e5e5] antialiased">
        {children}
        {/* 将监控探头埋入全局的 body 中 */}
        <Analytics />
      </body>
    </html>
  )
}