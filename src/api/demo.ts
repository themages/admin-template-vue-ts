import { Get } from '@/api/index'
import type { AxiosRequestConfig, AxiosResponseData } from 'axios'

export async function testRequest (config: AxiosRequestConfig): Promise<AxiosResponseData> {
  return await Get('http://localhost:5173/200', null, config)
}
