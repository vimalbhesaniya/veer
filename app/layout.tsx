import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='Layout'>
          <div className='space--'>
          <div className="menubar">
            <Link href="home">
              <div className='menu_1'><i className=" fa  fa-house"></i></div>
            </Link>
            <Link href="aboutus">
              <div className='menu_2'><i className='fa fa-address-card'></i></div>
            </Link>
            <Link href="contactus">
              <div className='menu_3'><i className='fa fa-location-dot'></i></div>
            </Link>
          </div>
          </div>
            {children}
        </div>
      </body>
    </html>
  )
}
