import type { RouteRecordName, NavigationGuardWithThis, NavigationHookAfter, RouteLocationNormalized } from 'vue-router'
import router from '@/router/index'
import { pathMatch } from '@/router/routes'
import {
  BASE_PAGE_NO_FOUND,
  BASE_PAGE_ACCOUNT_DISABLED,
  BASE_PAGE_UN_AUTH_ACCESS,
  BASE_PAGE_LOGIN,
  // BASE_PAGE_LOGOUT,
  BASE_PAGE_REGISTER,
  BASE_PAGE_HELP,
  BASE_PAGE_PATH_MATCH
} from '@/router/routesName'
// 无需权限，路由白名单
const whitelist: RouteRecordName[] = [BASE_PAGE_NO_FOUND, BASE_PAGE_ACCOUNT_DISABLED, BASE_PAGE_UN_AUTH_ACCESS, BASE_PAGE_LOGIN, BASE_PAGE_REGISTER, BASE_PAGE_HELP]
export const beforeEach: NavigationGuardWithThis<void> = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next): Promise<void> => {
  console.log('%c beforeEach to: %O, from: %O', 'color: #f00', to, from)
  if (to.name != null && whitelist.includes(to.name)) {
    next()
    return
  }
  if (!router.hasRoute(BASE_PAGE_PATH_MATCH)) {
    router.addRoute(pathMatch)
    console.log(router.getRoutes())
    next({
      path: to.path,
      params: to.params,
      query: to.query
    })
  }
}
export const afterEach: NavigationHookAfter = (to: RouteLocationNormalized, from: RouteLocationNormalized, failure): void => {
  console.log('%c afterEach to: %O, from: %O, failure: %O', 'color: #f00', to, from, failure)
}
