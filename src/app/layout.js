import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bene - Fundraising Platform',
  description: 'A decentralized fundraising platform for Ergo and EVM blockchains',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add this script to set a global basePath variable */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.basePath = '${process.env.NEXT_PUBLIC_BASE_PATH || ''}';
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}