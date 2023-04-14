import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { UseHTTPStoreTypes } from '@/config/typings/store/httpStore'
export const useHTTPStore = defineStore('http', (): UseHTTPStoreTypes => {
  const fingerprint = ref<string>('') // 设备指纹
  const timezone = ref<string>('') // 时区
  function setFingerprint (finger: string): void {
    fingerprint.value = finger
  }
  function setTimezone (zone: string): void {
    timezone.value = zone
  }
  return { fingerprint, timezone, setFingerprint, setTimezone }
})
