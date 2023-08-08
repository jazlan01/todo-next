import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })
//
export const metadata: Metadata = {
  title: 'To Do App',
  description: 'An app for maintaining a list of tasks to do. All done locally on your system.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={` ${inter.className} container mx-auto p-4 pt-8 pb-24 dark:text-white light:text-black h-screen overflow-scroll`} >
            {children}
          </body>
      </html>
  )
}
