import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { Roboto } from 'next/font/google'
import { ThemeProvider } from '@mui/material/styles'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/lib/theme'
import './globals.css'
import Navigation from '@/components/Navigation'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Material Goals - Track Your Progress',
  description: 'A modern goal tracking application built with Material Design 3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <AppRouterCacheProvider>
          <CssVarsProvider theme={theme} defaultMode="system">
            <CssBaseline />
            <Navigation />
            {children}
          </CssVarsProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
} 