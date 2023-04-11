import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { UserInfoTypes, UseUserStoreTypes } from '@/config/typings/userStore'
export const useUserStore = defineStore('user', (): UseUserStoreTypes => {
  const userinfo = ref<UserInfoTypes | null>(null) // 用户信息
  return { userinfo }
})
