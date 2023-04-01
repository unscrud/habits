import { View, Text } from "react-native";
import { HabitDay, DAY_SIZE } from "../components/HabitDay";
import { Header } from "../components/Header";
import { generateDateFromYearBeginning } from "../utils/generate-dates-from-year-beginning";

const weekDays = ['D','S','T','Q','Q','S','S']
const datesFromYearStart = generateDateFromYearBeginning()


export function Home(){
  return (
    <View className='flex-1 bg-background px-8 pt-16'>
      <Header />

      <View
        className="flex-row mt-6 mb-2"
      >
        {
          weekDays.map((weekDay, i) => (
            <Text 
              key={`${weekDay}-${i}`}
              className="text-zinc-400 text-xl font-bold text-center mx-1"
              style= {{width: DAY_SIZE}}
            >
              {weekDay}
            </Text>
          ))
        }
      </View>

      <View className="flex-row flex-wrap">
        {
          datesFromYearStart.map(date => (
            <HabitDay
              key={date.toISOString()}
            />
          ))
        }
      </View>
      <HabitDay />
    </View>
  )
}