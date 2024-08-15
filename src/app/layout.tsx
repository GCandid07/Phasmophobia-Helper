import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Phasmophobia | Dicas',
  description: 'Desenvolvido para jogadores de Phasmophobia',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-shadow">{children}</body>
    </html>
  )
}
