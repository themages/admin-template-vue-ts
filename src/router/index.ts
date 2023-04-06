import { createRouter, createWebHistory } from 'vue-router'
import { base } from '@/router/routes'
import {
  beforeEach,
  afterEach
} from '@/router/interceptor'
const router = createRouter({
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

router.beforeEach(beforeEach)
router.afterEach(afterEach)

export default router
