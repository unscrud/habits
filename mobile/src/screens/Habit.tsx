import { useRoute } from "@react-navigation/native";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { BackButton } from "../components/BackButton";
import { Checkbox } from "../components/Checkbox";
import { Loading } from "../components/Loading";
import { ProgressBar } from "../components/ProgressBar";
import { api } from "../lib/axios";

interface Params {
  date: string
}

export function Habit() {
  const [loading, setLoading] = useState(true)
  const route = useRoute()
  const { date } = route.params as Params

  const parsedDate = dayjs(date)
  const dayOfWeek = parsedDate.format('dddd')
  const dayAndMonth = parsedDate.format('DD/MM')

  async function fetchHabits() {
    try {
      setLoading(true)

      const response = await api.get('day', { params: { date } })
      console.log(response.data)
    } catch (error) {
      console.log(error)
      Alert.alert('Ops', 'Não foi possivel carregar as informações dos hábitos')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchHabits()
  }, [])

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <View
      className="flex-1 bg-background px-8 pt-16"
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />

        <Text
          className="text-zinc-400 mt-6 font-semibold text-base lowercase"
        >
          {dayOfWeek}
        </Text>

        <Text
          className="text-white font-extrabold text-3xl"
        >
          {dayAndMonth}
        </Text>

        <ProgressBar progress={75} />

        <View className="mt-6">
          <Checkbox
            title="Exemplo Alfa"
          />
          <Checkbox
            title="Exemplo Bravo"
            checked={true}
          />
        </View>

      </ScrollView>
    </View>
  )
}