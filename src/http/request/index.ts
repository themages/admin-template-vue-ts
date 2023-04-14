// axios library is used to make HTTP requests
import axios from 'axios'
import { useTokenStore } from '@/store/token'
import { useHTTPStore } from '@/store/http'
const http = axios.create()

// Add a request interceptor
http.interceptors.request.use(
  function (config) {
    if (config.showLoading != null && config.showLoading) {
      console.log('Loading Starting')
    }
    const tokenStore = useTokenStore()
    const httpStore = useHTTPStore()
    // Do something before request is sent
    config.headers.Authorization = `${tokenStore.type} ${tokenStore.token}`
    config.headers.DeviceId = httpStore.fingerprint
    config.headers.TimeZone = httpStore.timezone
    return config
  },
  async function (error) {
    // Do something with request error
    return await Promise.reject(error)
  }
)
// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response
  },
  async function (error) {
    // Do something with response error
    return await Promise.reject(error)
  }
)

export default http
