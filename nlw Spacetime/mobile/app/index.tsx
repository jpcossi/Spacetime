import { useEffect } from 'react';
import { styled } from 'nativewind';
import { useRouter } from 'expo-router';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Text, TouchableOpacity, View} from 'react-native';
import * as SecureStore from 'expo-secure-store'

import { api } from '../src/lib/api';
import logo from '../src/assets/logo.svg'

const StyledLogo = styled(logo)

const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint:
    'https://github.com/settings/connections/applications/Ov23lisXNkGgoNzshqCp',
}

export default function App() {
  const router = useRouter()

  const [, response, signInWithGithub] = useAuthRequest(
    {
      clientId: 'Ov23lisXNkGgoNzshqCp',
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'spacetime',
      }),
    },
    discovery,
  )

  async function handleGithubOAuthCode(code: string){
    const response = await api.post('/register', {
      code, 
    })
    const { token } = response.data
    await SecureStore.setItemAsync('token', token)
    router.push('/memories')
  }

  useEffect(() => {
   /*console.log(
    'response',
      makeRedirectUri({
        scheme: 'spacetime',
      }),
    ) */   
    if (response?.type === 'success') {
      const { code } = response.params
      handleGithubOAuthCode(code)
    }
  }, [response])

  return (
    <View className='flex-1 items-center py-10'    >
      <View className='flex-1 flex-col justify-center items-center gap-6 w-[326px] h-[116px]'> 
        <StyledLogo/>
        <View className='space-y-2'>
          <Text className='font-title text-gray-50 text-2xl leading-tight text-center'>Sua cápsula do tempo </Text>
          <Text className='font-body text-gray-100 text-base leading-relaxed text-center'>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) 
            com o mundo!
          </Text>
        </View>
        <TouchableOpacity 
          className='bg-green-500 rounded-full px-5 py-2 ' 
          activeOpacity={0.7} 
          onPress={() => signInWithGithub()}
        >
          <Text className='text-sm text-black uppercase font-alt'>
           Cadastrar lembrança
          </Text>
        </TouchableOpacity>
      </View>
      <Text className='font-body text-gray-200 text-sm leading-relaxed text-center'>Feito com 💜 no NLW da Rocketseat</Text>     
    </View>
  );
}
