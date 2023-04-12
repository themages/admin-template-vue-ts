import type { RouteRecordName, NavigationGuardWithThis, NavigationHookAfter, RouteLocationNormalized } from 'vue-router'
import router from '@/router/index'
import { useTokenStore } from '@/store/token'
import { useUserStore } from '@/store/user'
import { useRouteStore } from '@/store/route'
import {
  BASE_PAGE_NO_FOUND,
  BASE_PAGE_ACCOUNT_DISABLED,
  BASE_PAGE_UN_AUTH_ACCESS,
  BASE_PAGE_LOGIN,
  // BASE_PAGE_LOGOUT,
  BASE_PAGE_REGISTER,
  BASE_PAGE_HELP,
  // BASE_PAGE_PATH_MATCH,
  DEFAULT_VIEW_HOME
} from '@/router/routesName'
import { UserAccountStatusEnum } from '@/enums/route/roles'
// 无需权限，路由白名单
const whitelist: RouteRecordName[] = [BASE_PAGE_NO_FOUND, BASE_PAGE_ACCOUNT_DISABLED, BASE_PAGE_UN_AUTH_ACCESS, BASE_PAGE_LOGIN, BASE_PAGE_REGISTER, BASE_PAGE_HELP]
export const beforeEach: NavigationGuardWithThis<void> = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next): Promise<void> => {
  console.log('%c==> beforeEach to: %O, from: %O', 'color: #f00', to, from)
  const tokenStore = useTokenStore()
  const userStore = useUserStore()
  const routeStore = useRouteStore()
  // 是否存在 token
  if (tokenStore.token !== '') {
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
      if (userStore.userinfo === null) {
        // await 请求接口
      }
      // 动态添加权限路由
      if (routeStore.routes.length === 0) {
        routeStore.setRoutes()
        next(to)
      } else {
        // 进入页面，需要验证账号状态
        if (userStore.accountStatus >= to.meta.status) {
          next()
        } else {
          // 进入对应账号提示页面
          next(userStore.accountStatus === UserAccountStatusEnum.forbidden ? BASE_PAGE_ACCOUNT_DISABLED : BASE_PAGE_UN_AUTH_ACCESS)
        }
      }
      console.log('路由列表：%O', router.getRoutes())
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
  console.log('%c==> afterEach to: %O, from: %O, failure: %O', 'color: #002dff', to, from, failure)
}
