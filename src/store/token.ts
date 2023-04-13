import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
// import type { RemovableRef } from '@vueuse/core'
// import {} from '@/router/index'
import { TOKEN_CODE } from '@/config/constant/tokenStore'
import type { UseTokenStoreTypes } from '@/config/typings/tokenStore'
export const useTokenStore = defineStore('token', (): UseTokenStoreTypes => {
  const token = useLocalStorage(TOKEN_CODE, '') // 接口请求令牌
  function setToken (tk: string): void {
    token.value = tk
  }

  return { token, setToken }
})
