'use client'
import './globals.css'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { useEffect, useState } from 'react'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <html lang="pt">
      <head>
        <title>Phasmophobia | Dicas - Não oficial</title>
        <meta
          name="description"
          content="Desenvolvido para jogadores de Phasmophobia"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-surface font-shadow">
        <main className="h-full w-full">
          <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
          <section
            id="bg"
            className={`min-h-screen flex-1 bg-surface p-4 text-white transition-all duration-200 ease-in-out ${
              isOpen ? 'md:ml-64' : 'ml-0'
            }`}
          >
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}
