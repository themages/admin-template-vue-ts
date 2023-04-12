import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { UserInfoTypes, UseUserStoreTypes } from '@/config/typings/userStore'
export const useUserStore = defineStore('user', (): UseUserStoreTypes => {
  const userinfo = ref<UserInfoTypes | null>(null) // 用户信息、账号状态
  const codes = ref<string[]>([]) // 页面角色权限code
  return { userinfo, codes }
})
