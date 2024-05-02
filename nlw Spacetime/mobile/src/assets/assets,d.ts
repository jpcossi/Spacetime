//a linha abaixo faz o typesccript entender que todo arquivo png pode ser importado
declare module '*.png'

//a linha abaixo faz o typesccript entender que todo arquivo svg pode ser importado
declare module '*.svg' {
  import React from 'react'
  import { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>
  export default content
}