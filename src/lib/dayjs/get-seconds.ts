import dayjs from 'dayjs'

export function getSeconds() {
  return dayjs()
    .set('seconds', 0)
    .set('millisecond', 0)
    .unix()
}