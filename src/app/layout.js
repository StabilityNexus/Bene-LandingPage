import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bene - Fundraising Platform',
  description: 'A decentralized fundraising platform for Ergo and EVM blockchains',
}

export default function RootLayout({ children }) {
  // The basePath will be injected by the GitHub Pages action
  // We'll make it available to client-side scripts
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  return (
    <html lang="en" data-basepath={basePath}>
      <head>
        {/* Initial script to set global variables */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.repoName = 'Bene-LandingPage';
              window.initialBasePath = '${basePath}';
            `,
          }}
        />
        {/* Domain check script runs before other scripts to set up proper paths */}
        <Script src="/domain-check.js" strategy="beforeInteractive" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}