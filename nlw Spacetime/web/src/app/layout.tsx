import './globals.css'
import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree} from 'next/font/google'

import { Hero } from '@/components/Hero'
import { SignIn } from '@/components/SignIn'
import { Profile } from '@/components/Profile'
import { Copyright } from '@/components/Copyright'

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
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans text-gray-100 bg-gray-900`}>        
        <main className="grid grid-cols-2 min-h-screen">
          {/* Left */}
          <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
            {/* Blur */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"></div>
            {/* Stripes */}
            <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes"></div>
            {isAuthenticated ? <Profile/> : <SignIn/>}
            <Hero/>        
            <Copyright/>        
          </div>
          {/* Right */}
          <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover overflow-y-scroll max-h-screen">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
