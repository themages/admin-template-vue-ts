import 'vue-router'
declare module 'vue-router' {
  interface RouteMeta {
    // 路由转场动画
    transition?: string
  }
}
