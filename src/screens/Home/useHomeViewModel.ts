import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { HomeViewModel } from './homeViewModel'

export function useHomeViewModel(): HomeViewModel {
  const [timeArray, setTimeArray] = useState<string[]>([]);
  const [workedTimeInMinutes, setWorkedTimeInMinutes] = useState(0);
  const [exitTime, setExitTime] = useState("");
  const [previewExitTime, setPreviewExitTime] = useState("");

  const hasPairWorkingHours =
    timeArray.length % 2 === 0 && timeArray.length > 1;

  const isWorkPostInterval = workedTimeInMinutes > 0 && timeArray.length > 2;

  function handleNewTime() {
    setTimeArray((prevState) => {
      return [...prevState, dayjs().toISOString()];
    });
  }

  useEffect(() => {
    if (hasPairWorkingHours) {
      const differenceInMinutes = Math.ceil(
        dayjs(timeArray[timeArray.length - 1]).diff(
          timeArray[timeArray.length - 2],
          "seconds"
        ) / 60
      );
      const workedTimeInDate = dayjs().add(differenceInMinutes, "minutes");

      const workedTimeInMinutes = workedTimeInDate.diff(
        timeArray[timeArray.length - 1],
        "minutes"
      );

      setWorkedTimeInMinutes((prevState) => prevState + workedTimeInMinutes);
    }

    console.log(timeArray.length);
    if (timeArray.length > 0 && timeArray.length < 3) {
      setPreviewExitTime(
        dayjs()
          .add(8 * 60 + 13 - workedTimeInMinutes, "minutes")
          .add(1, "hour")
          .toISOString()
      );
    }
  }, [timeArray]);

  useEffect(() => {
    if (isWorkPostInterval) {
      setExitTime(
        dayjs()
          .add(8 * 60 + 13 - workedTimeInMinutes, "minutes")
          .toISOString()
      );
    }
  }, [workedTimeInMinutes]);

  return {
    previewExitTime,
    workedTimeInMinutes,
    exitTime,
    timeArray,
    handleNewTime,
  }
}