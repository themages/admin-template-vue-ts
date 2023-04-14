<script setup lang="ts">
import { formatDuration, getNow } from '@/utils/times'
console.log(formatDuration({
  seconds: 13,
  minutes: 32,
  hours: 3
}))
</script>

<template>
  <div class="home">
    <p>首页</p>
    <div>当前时间：{{ getNow() }}</div>
  </div>
</template>

<style scoped>
.home {
  font-size: 16px;
}
</style>
