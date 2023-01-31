import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import dayjs from "dayjs";
import uuid from "react-native-uuid";
import { getDisplayedTimeFromMinutes } from "./src/util/get-displayed-time-from-minutes";

export default function App() {
  const [timeArray, setTimeArray] = useState<string[]>([]);
  const [workedTimeInMinutes, setWorkedTimeInMinutes] = useState(0);

  function handleNewTime() {
    setTimeArray((prevState) => {
      return [...prevState, dayjs().toISOString()];
    });
  }

  useEffect(() => {
    if (timeArray.length % 2 === 0 && timeArray.length > 1) {
      const differenceInMilliseconds = dayjs(
        timeArray[timeArray.length - 1]
      ).diff(timeArray[timeArray.length - 2]);
      const workedTimeInDate = dayjs().add(
        differenceInMilliseconds,
        "milliseconds"
      );

      const workedTimeInMinutes = workedTimeInDate.diff(
        timeArray[timeArray.length - 1],
        "minutes"
      );

      setWorkedTimeInMinutes((prevState) => prevState + workedTimeInMinutes);
    }
  }, [timeArray]);

  return (
    <>
      <View className="flex-1 justify-center items-center">
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
      </View>
      <StatusBar style="dark" />
    </>
  );
}
