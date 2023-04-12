import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { UseHTTPStoreTypes } from '@/config/typings/httpStore'
export const useHTTPStore = defineStore('http', (): UseHTTPStoreTypes => {
  const fingerprint = ref<string>('') // 设备指纹
  function setFingerprint (finger: string): void {
    fingerprint.value = finger
  }
  return { fingerprint, setFingerprint }
})
