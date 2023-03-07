import dayjs from "dayjs";

export function getDisplayedHour(time: string) {
  console.log(dayjs(time))
  if (!time) return "--"
  return dayjs(time).format('HH:mm')
}