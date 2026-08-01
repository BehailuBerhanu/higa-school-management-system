import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Higa Model Boarding School — Excellence, Discipline, Character',
    template: '%s · Higa Model Boarding School',
  },
  description:
    'Higa Model Boarding School is a premier boarding institution offering rigorous academics, holistic campus life, and secure student, teacher and admin portals for academic records.',
  generator: 'v0.app',
  keywords: [
    'Higa Model Boarding School',
    'boarding school',
    'admissions',
    'student portal',
    'report card',
  ],
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0B6B3A' },
    { media: '(prefers-color-scheme: dark)', color: '#08260F' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${playfair.variable} ${inter.variable}`}
    >
      <body className="font-sans antialiased">
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster position="top-right" />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
