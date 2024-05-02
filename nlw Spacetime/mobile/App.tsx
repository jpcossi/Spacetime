import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, TouchableOpacity, View} from 'react-native';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import {BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import { styled } from 'nativewind';
import blurBg from './src/assets/luz.png'
import Stripes from './src/assets/stripes.svg'
import logo from './src/assets/logo.svg'

// tailwind n funciona em arquivos svg entao tem usar a funcao abaixo do nativewind para poder utlizar tailwind 
const StyledStripes = styled(Stripes)
const StyledLogo = styled(logo)

// dp = medida de mobile em vez de pixel

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold
  })

  // faz com que o react apenas mostre a interface depois de carregar as fontes
  if(!hasLoadedFonts){
    return null
  }

  return (
    <ImageBackground  
      source={blurBg}
      className='bg-gray-900 flex-1 items-center relative py-10'
      imageStyle={{position: 'absolute', left: '-100%'}}
    >
      <StyledStripes className='absolute left-2' />
      <View className='flex-1 flex-col justify-center items-center gap-6 w-[326px] h-[116px]'> 
        <StyledLogo/>
        <View className='space-y-2'>
          <Text className='font-title text-gray-50 text-2xl leading-tight text-center'>Sua cápsula do tempo </Text>
          <Text className='font-body text-gray-100 text-base leading-relaxed text-center'>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) 
            com o mundo!
          </Text>
        </View>
        <TouchableOpacity className='bg-green-500 rounded-full px-5 py-2 ' activeOpacity={0.7}>
          <Text className='text-sm text-black uppercase font-alt'>
           Cadastrar lembrança
          </Text>
        </TouchableOpacity>
      </View>
      <Text className='font-body text-gray-200 text-sm leading-relaxed text-center'>Feito com 💜 no NLW da Rocketseat</Text>
      <StatusBar style="light" translucent/>
    </ImageBackground>
  );
}
