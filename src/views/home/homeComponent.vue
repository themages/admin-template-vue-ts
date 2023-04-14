<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { formatDuration, getNow } from '@/utils/times'
import { testRequest } from '@/api/demo'
const { locale } = useI18n()
console.log(formatDuration({
  seconds: 13,
  minutes: 32,
  hours: 3
}))
testRequest({
  showMsg: true,
  showError: true
})
// 切换语言
function setLocale () {
  locale.value = locale.value === 'en' ? 'zh' : 'en'
}
</script>

<template>
  <div class="home">
    <p>首页, {{ $t('hello.world') }}</p>
    <div>当前时间：{{ getNow() }}</div>
    <div><button @click.stop="setLocale">切换语言</button></div>
    <div>页面有没有更新</div>
  </div>
</template>

<style scoped>
.home {
  font-size: 16px;
}
</style>
