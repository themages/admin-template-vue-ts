<script setup lang="ts"></script>

<template>
  <div class="default">
    <header>头部内容</header>
    <div>
      <nav>左侧菜单</nav>
      <main>
        <p>默认布局页面</p>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<style scoped>
.default {
  font-size: 16px;
}
</style>
