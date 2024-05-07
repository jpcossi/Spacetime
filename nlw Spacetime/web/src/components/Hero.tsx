// image do next otimiza imagens  
import Image from "next/image"
import nlwlogo from '../assets/logo.svg'

export function Hero(){
  return(
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
  )
}