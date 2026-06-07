import type { Metadata } from 'next'
import './globals.css'
import { I18nProvider } from '@/lib/i18n'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import RevealObserver from '@/components/RevealObserver'

export const metadata: Metadata = {
  title: 'Yina Tiburcio · Realtor® · Rhode Island',
  description: 'Agente inmobiliaria bilingüe en Rhode Island. Compra, vende y renta con Yina Tiburcio. Hablamos español.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <I18nProvider>
          <Nav />
          <main style={{ paddingTop: 'var(--nav-h)' }}>
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <RevealObserver />
        </I18nProvider>
      </body>
    </html>
  )
}
