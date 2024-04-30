import './globals.css'
import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto'})
const baiJamjuree = BaiJamjuree({ 
  subsets: ['latin'], 
  weight: '700', 
  variable: '--font-baijam-juree'
})

export const metadata: Metadata = {
  title: 'NLW SpaceTime',
  description: 'Time capsule built with React, Next.js, TailwindCSS and TypeScript',
}

export default function RootLayout({ children }: { children: ReactNode}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans text-gray-100 bg-gray-900`}>{children}</body>
    </html>
  )
}
