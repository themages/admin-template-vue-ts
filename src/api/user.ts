import { Post } from '@/api/index'
import type { AxiosResponseData } from 'axios'
import type { UserLoginParams } from '@/config/typings/api/user'
const baseURL = import.meta.env.VITE_BASE_API

export async function userLoginRequest (data: UserLoginParams, config: any): Promise<AxiosResponseData> {
  return await Post(`${baseURL}/login`, data, config)
}
