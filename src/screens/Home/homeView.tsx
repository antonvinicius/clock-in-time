
import { Button, Text, View } from "react-native";
import { getDisplayedTimeFromMinutes } from "../../util/get-displayed-time-from-minutes";
import { StatusBar } from "expo-status-bar";
import uuid from 'uuid'
import { useHomeViewModel } from "./useHomeViewModel";

export function Home() {
  const { previewExitTime, workedTimeInMinutes, exitTime, timeArray, handleNewTime } = useHomeViewModel()

  return (
    <View className="flex-1 justify-center items-center">
      <View className="items-center px-10">
        {previewExitTime != "" && (
          <Text>Previsão de saída {`${previewExitTime}`}</Text>
        )}
      </View>
      <View className="items-center px-10">
        {workedTimeInMinutes != 0 && (
          <Text>Hora de saída {`${exitTime}`}</Text>
        )}
      </View>
      <View className="items-center px-10">
        {workedTimeInMinutes != 0 && (
          <Text>
            Horas Trabalhadas{" "}
            {`${getDisplayedTimeFromMinutes(workedTimeInMinutes)}`}
          </Text>
        )}
      </View>
      <View className="items-center p-10">
        {timeArray.map((time) => (
          <Text key={uuid.v4().toString()}>{time}</Text>
        ))}
      </View>
      <Button onPress={handleNewTime} title="Registrar ponto" />
      <StatusBar style="dark" />
    </View>
  );
}
