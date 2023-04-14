import type { AxiosRequestConfig, AxiosResponse, AxiosResponseData } from 'axios'
import http from '@/http/request'
import { getNow } from '@/utils/times'

export default async (config: AxiosRequestConfig): Promise<AxiosResponseData> => {
  // 请求成功回调
  function successCallback (res: AxiosResponse): AxiosResponseData {
    console.log(res)
    const { data } = res.data
    if (config.showSuccess != null && config.showSuccess) {
      console.log('成功提示')
    }
    if (config.showMsg != null && config.showMsg) {
      console.log('操作提示')
    }
    if (config.showLoading != null && config.showLoading) {
      console.log('Loading')
    }
    return {
      code: data.code,
      success: true,
      msg: data.msg,
      data: data.data,
      time: data.time
    }
  }
  // 请求失败回调
  function errorCallback (error: any): AxiosResponseData {
    console.log(error)
    if (config.showError != null && config.showError) {
      console.log('错误提示')
    }
    return {
      code: error.code,
      success: false,
      msg: error.message,
      data: '',
      time: getNow()
    }
  }
  // 请求完成回调
  function finallyCallback (): void {
    console.log('finally', config.showLoading)
  }
  return await http(config).then(successCallback).catch(errorCallback).finally(finallyCallback)
}
