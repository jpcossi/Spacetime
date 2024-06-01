import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { styled } from "nativewind"
import { api } from "../src/lib/api"
import { useEffect, useState } from "react"
import { Link, useRouter } from "expo-router"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { ScrollView, TouchableOpacity, View, Text, Image } from "react-native"
import * as SecureStore from 'expo-secure-store'

import logo from '../src/assets/logo.svg'
import Icon from "@expo/vector-icons/Feather"

const StyledLogo = styled(logo)

dayjs.locale(ptBr)

interface Memory{
  coverUrl : string,
  excerpt: string,
  createAt: string,
  id: string
}

export default function Memories(){
  const { bottom, top} = useSafeAreaInsets()  
  const router = useRouter()

  const [memories, setMemories] = useState<Memory[]>([])

  async function signOut(){
    await SecureStore.deleteItemAsync('token')
    router.push('/')
  }

  async function loadingMemories() {
    const token = await SecureStore.getItemAsync('token')

    const response = await api.get('/memories', {
      headers: {
        Authorization: `Bearer ${token}`
      } 
    })

    setMemories(response.data)
  }

  useEffect(() => {
    loadingMemories()
  }, [])

  return (
    <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}>
      <View className="mt-4 pl-5 pr-5 flex-row items-center justify-between">
        <StyledLogo/>
        <View className="flex-row gap-1">
          <TouchableOpacity onPress={signOut} className="h-10 w-10 items-center justify-center rounded-full bg-red-500">
            <Icon name="log-out" size={16} color="#000"></Icon>
          </TouchableOpacity>
          <Link href="/new" asChild>
            <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-green-500">
              <Icon name="plus" size={16} color="#000"></Icon>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
      <View className="mt-6 space-y-10">
        {memories.map((memory) => {
          return (
            <View key={memory.id} className="space-y-4">
              <View className="flex-row items-center gap-2">
                <View className="h-px w-5 bg-gray-50" />
                <Text className="font-body text-xs text-gray-100">
                  {dayjs(memory.createAt).format("D[ de ]MMMM[, ]YYYY")}
                </Text>
              </View>
              <View className="space-y-4 px-8">
                <Image 
                  source={{ uri : memory.coverUrl}}
                  className="aspect-video w-full rounded-lg"
                  alt=""
                />
                <Text className="font-body tex-base leading-relaxed text-gray-100">
                  {memory.excerpt}
                </Text>
                <Link href="/memories/id" asChild>
                  <TouchableOpacity className="flex-row items-center gap-2">
                    <Text className="font-body text-sm text-gray-200">
                      Ler mais
                    </Text>
                    <Icon name="arrow-right" size={16} color='#9e9ea0' />
                  </TouchableOpacity>
                </Link>
              </View>
            </View> 
          )
        })}     
      </View>    
    </ScrollView>
  )
}
