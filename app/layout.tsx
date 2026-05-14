// 路径: app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'Brain Rot Terminal',
  description: 'Unleash your brain rot genius.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#1a1814] hide-scrollbar">
        {children}
      </body>
    </html>
  )
}