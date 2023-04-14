import request from '@/http/index'
import type { AxiosRequestConfig, AxiosResponseData } from 'axios'

export const Get = async (url: string, params?: any, config: AxiosRequestConfig = {}): Promise<AxiosResponseData> => {
  return await request({
    url,
    method: 'get',
    params,
    ...config
  })
}

export const Post = async (url: string, data?: any, config: AxiosRequestConfig = {}): Promise<AxiosResponseData> => {
  return await request({
    url,
    method: 'post',
    data,
    ...config
  })
}

export const Put = async (url: string, data?: any, config: AxiosRequestConfig = {}): Promise<AxiosResponseData> => {
  return await request({
    url,
    method: 'put',
    data,
    ...config
  })
}

export const Delete = async (url: string, data?: any, config: AxiosRequestConfig = {}): Promise<AxiosResponseData> => {
  return await request({
    url,
    method: 'delete',
    data,
    ...config
  })
}
