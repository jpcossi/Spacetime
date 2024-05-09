import { getUser } from "@/lib/auth"
import Image from "next/image"

export function Profile(){
  //href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`} 
  const { name, avatarUrl } = getUser()

  return(
    <div className="flex items-center gap-3 text-left">
      <Image 
        src={avatarUrl} 
        alt="" 
        width={40} 
        height={40} 
        className="w-10 h-10 rounded-full"
      />
      <p className="max-w-[148px] text-sm leading-snug">
        {name}
        <a href="" className="block text-red-400 hover:text-red-300">Quero Sair</a>
      </p>  
    </div>
  )
}