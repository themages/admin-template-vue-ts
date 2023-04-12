import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import duration from 'dayjs/plugin/duration'
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(duration)
// 用户当前时区
export function getGuess (): string {
  return dayjs.tz.guess()
}
// 获取 UTC 时间而非本地时间，转换当前时间为 UTC 秒数
export function getUTCSecond (): number {
  return dayjs.utc().second()
}
// 格式化时间: hours:13 minutes:2 seconds:1 => 13:02:01
export function formatDuration (duration: {
  seconds: number
  minutes: number
  hours: number
  days?: number
  months?: number
  years?: number
}, format: string = 'HH:mm:ss'): string {
  return dayjs.duration(duration).format(format)
}
