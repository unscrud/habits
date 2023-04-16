import { ScrollView, View, Text } from "react-native";
import { BackButton } from "../components/BackButton";


export function Habit() {
  return (
    <View 
      className="flex-1 bg-background px-8 pt-16"
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}
      >
        
      </ScrollView>
    </View>
  )
}