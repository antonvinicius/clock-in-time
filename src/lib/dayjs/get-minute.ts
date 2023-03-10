import dayjs from 'dayjs'

export function getMinute() {
  return dayjs()
    .set('seconds', 0)
    .set('millisecond', 0)
    .unix()
}