<script setup lang="ts"></script>

<template>
  <div class="base">
    <header>
      <div>logo</div>
      <router-view name="user"></router-view>
      <router-view name="sidebar"></router-view>
    </header>
    <main>
      <p>基础布局页面</p>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.base {
  font-size: 16px;
}
</style>
