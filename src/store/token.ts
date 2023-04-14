import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
// import type { RemovableRef } from '@vueuse/core'
// import {} from '@/router/index'
import { TOKEN_CODE, TOKEN_CODE_TYPE } from '@/config/constant/tokenStore'
import type { UseTokenStoreTypes } from '@/config/typings/store/tokenStore'
export const useTokenStore = defineStore('token', (): UseTokenStoreTypes => {
  const token = useLocalStorage(TOKEN_CODE, '') // 接口请求令牌
  const type = useLocalStorage(TOKEN_CODE_TYPE, 'bearer') // 接口请求令牌类型
  function setToken (tk: string): void {
    token.value = tk
  }
  function setType (tp: string): void {
    type.value = tp
  }
  return { token, type, setToken, setType }
})
