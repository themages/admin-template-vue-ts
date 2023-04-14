import type { AxiosRequestConfig, AxiosResponse, AxiosResponseData } from 'axios'
import http from '@/http/request'
import { getNow } from '@/utils/times'
import { httpSuccessCode } from '@/http/code/index'

export default async (config: AxiosRequestConfig): Promise<AxiosResponseData> => {
  // 请求成功回调
  function successCallback (res: AxiosResponse): AxiosResponseData {
    console.log('请求成功回调: %O', res)
    const { data } = res.data
    if (config.showMsg != null && config.showMsg) {
      console.log('消息提示: 登陆密码有误')
    }
    if (data.code === httpSuccessCode) {
      return {
        code: data.code,
        success: true,
        msg: data.msg,
        data: data.data,
        time: data.time
      }
    }
    return {
      code: data.code,
      success: false,
      msg: data.msg,
      data: data.data,
      time: data.time
    }
  }
  // 请求失败回调
  function errorCallback (error: any): AxiosResponseData {
    console.error('请求失败回调: %O', error)
    if (config.showError != null && config.showError) {
      console.log('错误提示：401 权限错误')
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
    if (config.showLoading != null && config.showLoading) {
      console.log('Loading')
    }
    console.log('finally')
  }
  return await http(config).then(successCallback).catch(errorCallback).finally(finallyCallback)
}
