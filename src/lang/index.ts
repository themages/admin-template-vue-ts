import { createI18n } from 'vue-i18n'
import En from '@/lang/locales/en'
import Zh from '@/lang/locales/zh'

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: En,
    zh: Zh
  },
  fallbackLocale: ['en', 'zh'], // 回退
  legacy: false,
  globalInjection: true // 全局注入 $t 函数
})

export default i18n
