import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import type { UseRoutesStoreTypes } from '@/config/typings/routeStore'
import router from '@/router/index'
import { pathMatch } from '@/router/routes'
// function filterAsyncRoutes (): void {}
export const useRouteStore = defineStore('route', (): UseRoutesStoreTypes => {
  const routes = ref<RouteRecordRaw[]>([]) // 权限路由
  function setRoutes (): void {
    router.addRoute(pathMatch)
  }
  return { routes, setRoutes }
})
