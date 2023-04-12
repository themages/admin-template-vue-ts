import type { Component } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
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
const UserMenuBar = async (): Promise<Component> => await import('@/components/user/UserMenuBar.vue')
const BasicLayout = async (): Promise<Component> => await import('@/layout/BasicLayout.vue')
const DefaultLayout = async (): Promise<Component> => await import('@/layout/DefaultLayout.vue')
const NoFound = async (): Promise<Component> => await import('@/page/NoFound.vue')
const AccountDisabled = async (): Promise<Component> => await import('@/page/AccountDisabled.vue')
const UnauthorizedAccess = async (): Promise<Component> => await import('@/page/UnauthorizedAccess.vue')
const LoginComponent = async (): Promise<Component> => await import('@/views/login/loginComponent.vue')
const RegisterComponent = async (): Promise<Component> => await import('@/views/login/registerComponent.vue')
const HomeComponent = async (): Promise<Component> => await import('@/views/home/homeComponent.vue')
const HelpComponent = async (): Promise<Component> => await import('@/views/helper/helpComponent.vue')

// 基础路由，无需权限，公开访问
export const base: RouteRecordRaw[] = [
  {
    path: `/${BASE_PAGE_NO_FOUND}`,
    meta: { status: 0 },
    component: BasicLayout,
    children: [
      {
        path: '',
        name: BASE_PAGE_NO_FOUND,
        component: NoFound
      }
    ]
  },
  {
    path: `/${BASE_PAGE_ACCOUNT_DISABLED}`,
    meta: { status: 0 },
    component: BasicLayout,
    children: [
      {
        path: '',
        name: BASE_PAGE_ACCOUNT_DISABLED,
        component: AccountDisabled
      }
    ]
  },
  {
    path: `/${BASE_PAGE_UN_AUTH_ACCESS}`,
    meta: { status: 0 },
    component: BasicLayout,
    children: [
      {
        path: '',
        name: BASE_PAGE_UN_AUTH_ACCESS,
        components: {
          default: UnauthorizedAccess,
          user: UserMenuBar
        }
      }
    ]
  },
  {
    path: `/${BASE_PAGE_LOGIN}`,
    meta: { status: 0 },
    component: BasicLayout,
    children: [
      {
        path: '',
        name: BASE_PAGE_LOGIN,
        component: LoginComponent
      }
    ]
  },
  {
    path: `/${BASE_PAGE_REGISTER}`,
    meta: { status: 0 },
    component: BasicLayout,
    children: [
      {
        path: '',
        name: BASE_PAGE_REGISTER,
        component: RegisterComponent
      }
    ]
  },
  {
    path: `/${BASE_PAGE_HELP}`,
    meta: { status: 0 },
    component: BasicLayout,
    children: [
      {
        path: '',
        name: BASE_PAGE_HELP,
        component: HelpComponent
      }
    ]
  }
]
// 通用匹配，404 页面
export const pathMatch = {
  path: '/:pathMatch(.*)*',
  meta: { status: 0 },
  name: BASE_PAGE_PATH_MATCH,
  redirect: { name: BASE_PAGE_NO_FOUND }
}
// 业务路由，需要授权访问
export const permissionsRoutes: RouteRecordRaw[] = [
  {
    path: `/${DEFAULT_VIEW_HOME}`,
    meta: { code: '', status: 5 },
    component: DefaultLayout,
    children: [
      {
        path: '',
        meta: { code: '', status: 5 },
        name: DEFAULT_VIEW_HOME,
        component: HomeComponent
      }
    ]
  }
]
