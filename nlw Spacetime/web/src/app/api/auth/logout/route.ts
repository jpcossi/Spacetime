import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const redirectURL = new URL('/', request.url)

  // não tem como colocar delete-cookie entao colocamos max-age com valor 0 para retirar o cookie e poder deslogar com sucesso
  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-cookie': `token=; Path=/; max-age=0`
    }
  })
}