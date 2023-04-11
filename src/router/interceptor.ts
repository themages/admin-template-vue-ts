import type { RouteRecordName, NavigationGuardWithThis, NavigationHookAfter, RouteLocationNormalized } from 'vue-router'
import router from '@/router/index'
import { pathMatch } from '@/router/routes'
import { useTokenStore } from '@/store/token'
import { useUserStore } from '@/store/user'
import {
  BASE_PAGE_NO_FOUND,
  BASE_PAGE_ACCOUNT_DISABLED,
  BASE_PAGE_UN_AUTH_ACCESS,
  BASE_PAGE_LOGIN,
  // BASE_PAGE_LOGOUT,
  BASE_PAGE_REGISTER,
  BASE_PAGE_HELP,
  DEFAULT_VIEW_HOME,
  BASE_PAGE_PATH_MATCH
} from '@/router/routesName'
// 无需权限，路由白名单
const whitelist: RouteRecordName[] = [BASE_PAGE_NO_FOUND, BASE_PAGE_ACCOUNT_DISABLED, BASE_PAGE_UN_AUTH_ACCESS, BASE_PAGE_LOGIN, BASE_PAGE_REGISTER, BASE_PAGE_HELP]
export const beforeEach: NavigationGuardWithThis<void> = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next): Promise<void> => {
  console.log('%c beforeEach to: %O, from: %O', 'color: #f00', to, from)
  const useToken = useTokenStore()
  const useUser = useUserStore()
  console.log('路由列表：%O', router.getRoutes())
  // 是否存在 token
  if (useToken.token !== '') {
    // 如果已登陆，访问登陆页面，则重定向到首页
    if (to.name === BASE_PAGE_LOGIN) {
      // 如果有重定向记录，则跳到重定向路由
      if (to.query.redirect != null) {
        next({
          path: (to.query.redirect as string)
        })
      } else {
        next(DEFAULT_VIEW_HOME)
      }
    } else {
      // 是否存在个人信息，角色权限等必要的数据
      if (useUser.userinfo === null) {
        // await 请求接口
        // 动态添加权限路由
        // 动态添加 404 路由 , replace: true
        if (!router.hasRoute(BASE_PAGE_PATH_MATCH)) {
          router.addRoute(pathMatch)
        }
        next()
      } else {
        next()
      }
    }
  } else {
    // 如果没有 token
    if (to.name != null && whitelist.includes(to.name)) {
      // 如果在白名单
      next()
    } else {
      // 默认跳登录页面
      next({
        name: BASE_PAGE_LOGIN,
        query: {
          redirect: to.fullPath
        }
      })
    }
  }
}
export const afterEach: NavigationHookAfter = (to: RouteLocationNormalized, from: RouteLocationNormalized, failure): void => {
  console.log('%c afterEach to: %O, from: %O, failure: %O', 'color: #f00', to, from, failure)
}
