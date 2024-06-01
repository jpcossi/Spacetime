import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { styled } from "nativewind";
import { StatusBar } from "expo-status-bar";
import { ImageBackground } from "react-native";
import * as SecureStore from 'expo-secure-store'

import blurBg from '../src/assets/luz.png'
import Stripes from '../src/assets/stripes.svg'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import {BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

// tailwind n funciona em arquivos svg entao tem usar a funcao abaixo do nativewind para poder utlizar tailwind 
const StyledStripes = styled(Stripes)

export default function Layout(){
  const [isUserAuthenticated, setIsUserAuthenticated] = useState<null | boolean>(null)

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold
  })

  useEffect(() => {
    SecureStore.getItemAsync('token').then(token => {
      setIsUserAuthenticated(!!token)
    })
  }, [])

  // faz com que o react apenas mostre a interface depois de carregar as fontes
  if(!hasLoadedFonts){
    return null
  }

  return (
    <ImageBackground  
      source={blurBg}
      className='bg-gray-900 flex-1 relative'
      imageStyle={{position: 'absolute', left: '-100%'}}
    >
      <StyledStripes className='absolute left-2' />
      <StatusBar style="light" translucent/>

      <Stack screenOptions={{ headerShown: false, contentStyle: {backgroundColor: 'transparent'}, animation: 'fade'}}>
        <Stack.Screen name="index" redirect={isUserAuthenticated}/>
        <Stack.Screen name="memories"/>
        <Stack.Screen name="new"/>
      </Stack>
    </ImageBackground>  
  )
}

// dp = medida de mobile em vez de pixel