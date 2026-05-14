// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google"; // 导入等宽字体
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({ 
  weight: ["400", "700"], 
  subsets: ["latin"],
  variable: "--font-space-mono" 
});

export const metadata: Metadata = {
  title: "Brain Rot Test | Decode Your Mind",
  description: "Your ultimate brain rot is your unawakened genius.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 锁定底色，引入字体变量
    <html lang="en">
      <body className={`${inter.variable} ${spaceMono.variable} bg-[#1a1814] text-[#e5e5e5] font-sans antialiased overflow-hidden selection:bg-[#ccff00] selection:text-black`}>
        {children}
      </body>
    </html>
  );
}