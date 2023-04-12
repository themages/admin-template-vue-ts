<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="no-found">
    {{route.redirectedFrom?.fullPath}}页面未找到
  </div>
</template>

<style scoped>
.no-found {
  font-size: 24px;
}
</style>
