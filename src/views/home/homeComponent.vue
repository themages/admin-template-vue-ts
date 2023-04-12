<script setup lang="ts">
import { formatDuration } from '@/utils/times'
console.log(formatDuration({
  seconds: 13,
  minutes: 32,
  hours: 3
}))
</script>

<template>
  <div class="home">
    首页
  </div>
</template>

<style scoped>
.home {
  font-size: 16px;
}
</style>
