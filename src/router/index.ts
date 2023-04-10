import { createRouter, createWebHistory, NavigationFailureType, isNavigationFailure } from 'vue-router'
import type { Router } from 'vue-router'
import { base } from '@/router/routes'
import {
  beforeEach,
  afterEach
} from '@/router/interceptor'
// import {
//   BASE_PAGE_LOGIN
// } from '@/router/routesName'
const initRouter = (): Router => createRouter({
  history: createWebHistory(),
  routes: base,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition !== null) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  // 区分路由大小写，以及带有或不带有尾部斜线的路由
  strict: true
})
const router = initRouter()
console.log('router', router)

router.beforeEach(beforeEach)
router.afterEach(afterEach)
// 重置路由列表
export function resetRouter (): void {

}
// 使用 push 等待导航结果
export async function goToRouteName (name: string): Promise<void> {
  const navigationResult = await router.push({ name })
  // 给用户显示一个小通知
  if (isNavigationFailure(navigationResult, NavigationFailureType.aborted)) {
    console.warn('导航被中断了!')
  } else if (isNavigationFailure(navigationResult, NavigationFailureType.cancelled)) {
    console.warn('导航被取消了!')
  } else if (isNavigationFailure(navigationResult, NavigationFailureType.duplicated)) {
    console.warn('导航被阻止了!')
  }
}
export default router
