// import { Button } from '@/components/Button'
import { User } from "lucide-react" 
// image do next otimiza imagens  
import Image from "next/image"
import nlwlogo from '../assets/logo.svg'

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* Left */}
      <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"></div>
        
        {/* Stripes */}
        <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes"></div>

        {/* Sign In */}
        <a href="" className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500"></User>
          </div>
           <p className="max-w-[148px] text-sm leading-snug">
            <span className="underline">Crie sua conta</span> e salve suas 
            memórias!
          </p>  
        </a>

        {/* Hero */}
        <div className="space-y-5">
          <Image src={nlwlogo} alt="NLW Spacetime"/>
          <div className="space-y-1 max-w-[420px]">
            <h1 className="font-bold text-gray-50 leading-tight text-5xl">Sua cápsula do tempo</h1>
            <p className="leading-relaxed text-lg">Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>
          </div>         
          <a href="" className="font-alt font-bold text-sm bg-green-500 text-black rounded-full px-5 py-3 uppercase leading-none inline-block hover:bg-green-600">
            CADASTRAR LEMBRANÇA
          </a>
        </div>
        {/* Copyright */}
        <div className="text-sm leading-relaxed text-gray-200">
          Feito com 💜 no NLW da 
          <a href="https://rocketseat.com.br" className="hover:text-gray-100 underline" target="_blank" rel="noreferrer">
            Rocketseat
          </a>
        </div>
      </div>
      {/* Right */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">Você ainda não registrou nenhuma lembrança, comece a{' '} 
            <a href="" className="underline hover:text-gray-50">
              criar agora!
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
