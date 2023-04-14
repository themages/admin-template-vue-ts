import 'vue-router'
import 'axios'
declare module 'vue-router' {
  interface RouteMeta {
    // 路由转场动画
    transition?: string
    // 账号状态
    status: number
  }
}

declare module 'axios' {
  interface AxiosRequestConfig {
    // 是否显示loading
    showLoading?: boolean
    // 是否显示错误提示
    showError?: boolean
    // 是否显示消息提示
    showMsg?: boolean
  }
  interface AxiosResponseData<T = any> {
    // 是否成功
    success: boolean
    // 状态码
    code: string
    // 提示信息
    msg: string
    // 数据
    data: T
    // 时间戳
    time?: string
  }
}
