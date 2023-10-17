import MenuBar from '@/components/MenuBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NextAuthProvider from '@/providers/NextAuthProvider'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vaccine Book App',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
})
{

  const nextAuthSession = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider session={nextAuthSession}>
        <MenuBar/>
        {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
