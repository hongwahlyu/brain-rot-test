import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"

// 引入高级无衬线字体，恢复赛博现代感
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brain Rot Test - Your ultimate brain rot is your unawakened genius',
  description: 'Decode your digital DNA. What is your hidden genius?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="hide-scrollbar">
      {/* 注入 Inter 字体，恢复网页的顶级排版质感 */}
      <body className={`${inter.className} bg-[#1a1814] text-[#e5e5e5] antialiased selection:bg-[#ccff00] selection:text-black min-h-screen flex flex-col`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}