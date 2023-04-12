import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import type { UseRoutesStoreTypes } from '@/config/typings/routeStore'
import router from '@/router/index'
import { pathMatch, permissionsRoutes } from '@/router/routes'
function filterAsyncRoutes (): RouteRecordRaw[] {
  const accessRoutes: RouteRecordRaw[] = []
  permissionsRoutes.forEach((route) => {
    router.addRoute(route)
  })
  accessRoutes.push(pathMatch)
  router.addRoute(pathMatch)
  return accessRoutes
}
export const useRouteStore = defineStore('route', (): UseRoutesStoreTypes => {
  const routes = ref<RouteRecordRaw[]>([]) // 权限路由
  function setRoutes (): void {
    routes.value = filterAsyncRoutes()
  }
  return { routes, setRoutes }
})
