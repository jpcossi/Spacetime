import { NextRequest, NextResponse } from "next/server";

const SignInURL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

export function middleware (request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if(!token){
    return NextResponse.redirect(SignInURL, {
      headers: {
        'Set-Cookie': `redirectTo=${request.url}; Path=/; HttpOnly; max-age=20;`
      }
    })
  }

  // next faz o usuario seguir sem fazer nada com ele
  return NextResponse.next()
}

//verifica se o usuario entrar em qualquer rota de memories
export const config = {
  matcher: '/memories/:path*'
}