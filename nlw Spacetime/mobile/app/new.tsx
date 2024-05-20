import { useState } from "react";
import { styled } from "nativewind";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text, TextInput ,TouchableOpacity, Switch, ScrollView } from "react-native";

import Icon from "@expo/vector-icons/Feather"
import logo from '../src/assets/logo.svg'

const StyledLogo = styled(logo)

export default function Memories(){
  const { bottom, top} = useSafeAreaInsets()

  const [isPublic, setIsPublic] = useState(false)

  return (
    <ScrollView className="flex-1 px-8" contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}>
      <View className="mt-4 flex-row items-center justify-between">
        <StyledLogo/>
        <Link href="/memories" asChild>
          <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-purple-500">
            <Icon name="arrow-left" size={16} color="#fff"></Icon>
          </TouchableOpacity>
        </Link>
      </View>
      <View className="mt-6 space-y-6">
        <View className="flex-row items-center gap-2">
          <Switch 
            value={isPublic} 
            onValueChange={setIsPublic} 
            thumbColor={isPublic ? '#9b79ea' : '#9e9ea0'}
            trackColor={{ false: '#767577', true: '#372560'}}>
          </Switch>
          <Text className="font-body text-base text-gray-200">
            Tornar memória pública
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} className="h-32 items-center justify-center rounded-lg border border-dashed border-gray-500 bg-black/20">
          <View className="flex-row items-center gap-2">
            <Icon name="image" color='#fff'></Icon>
            <Text className="font-body text-sm text-gray-200">
              Adicionar foto ou vídeo de capa
            </Text>
          </View>
        </TouchableOpacity>
        <TextInput 
          multiline 
          className="p-0 font-body text-base text-gray-50"
          placeholderTextColor='#56565a'
          placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
        />
        <TouchableOpacity 
          className='bg-green-500 rounded-full px-5 py-2 items-center self-end mb-2' 
          activeOpacity={0.7}
        >
          <Text className='text-sm text-black uppercase font-alt'>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
