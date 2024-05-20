import { api } from "@/lib/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  const redirectTo = request.cookies.get('redirectTo')?.value 

  const registerResponse = await api.post('/register', {
    code,
  })
  
  // token contendo info do user do github
  const { token } = registerResponse.data

  // redireciona o usuario para a tela inicial depois de fazer a requisição post e adquirir o token contendo as informaçoes do github
  const redirectURL = redirectTo ?? new URL('/', request.url)

  const cookieExpiresInSeconds = 60 * 60 * 24 * 30

  // cria um cookie contendo o token e o path redireciona deixa disponivel para todas as rotas da aplicação, se colocasse path=/auth apenas rotas que começam comauth teriam o cookie
  //max-age é pra setar o dia que expira o token/cookie
  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-cookie': `token=${token}; Path=/; max-age=${cookieExpiresInSeconds}`
    }
  })
}