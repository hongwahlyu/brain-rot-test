import './globals.css'

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
      </body>
    </html>
  )
}