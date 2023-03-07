
import { Button, Text, View } from "react-native";
import { getDisplayedTimeFromMinutes } from "../../util/get-displayed-time-from-minutes";
import { StatusBar } from "expo-status-bar";
import uuid from 'uuid'
import { useHomeViewModel } from "./useHomeViewModel";
import { getDisplayedHour } from "../../util/get-displayed-hour";

export function Home() {
  const { previewExitTime, workedTimeInMinutes, exitTime, timeArray, handleNewTime } = useHomeViewModel()

  return (
    <View className="flex-1 py-10 flex-col px-5 bg-gray-200">
      <View className="w-full h-36 bg-orange-300 rounded-lg">
        <Text>Hora de saída: {exitTime || previewExitTime}</Text>
        <Text>Tempo trabalhado: {getDisplayedTimeFromMinutes(workedTimeInMinutes)}</Text>
      </View>
      <View className="flex-1 mt-5 bg-white rounded-lg">
        {timeArray.map(time => <Text key={time.toString()}>{getDisplayedHour(time)}</Text>)}
      </View>
      <Button title="Nova entrada" onPress={handleNewTime} />
    </View>
  );
}
