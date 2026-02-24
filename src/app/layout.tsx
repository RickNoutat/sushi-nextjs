import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sushi — Restaurant Japonais',
  description: 'Savourez les meilleurs sushis dans notre restaurant. Cuisine japonaise authentique.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="shortcut icon" href="/assets/img/favicon.png" type="image/x-icon" />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
