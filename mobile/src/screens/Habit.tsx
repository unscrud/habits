import { ScrollView, View, Text } from "react-native";
import { BackButton } from "../components/BackButton";
import { useRoute } from "@react-navigation/native";

interface Params {
  date: string
}

export function Habit() {
  const route = useRoute()
  const {date} = route.params as Params

  console.log(date)
  return (
    <View 
      className="flex-1 bg-background px-8 pt-16"
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}
      >
        <BackButton/>
      </ScrollView>
    </View>
  )
}