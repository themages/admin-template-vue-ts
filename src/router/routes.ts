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
const MenuBar = async (): Promise<Component> => await import('@/components/user/MenuBar.vue')
const PersonalCenter = async (): Promise<Component> => await import('@/components/user/PersonalCenter.vue')
const BasicLayout = async (): Promise<Component> => await import('@/layout/BasicLayout.vue')
const DefaultLayout = async (): Promise<Component> => await import('@/layout/DefaultLayout.vue')
const NoFound = async (): Promise<Component> => await import('@/page/NoFound.vue')
const AccountDisabled = async (): Promise<Component> => await import('@/page/AccountDisabled.vue')
const UnauthorizedAccess = async (): Promise<Component> => await import('@/page/UnauthorizedAccess.vue')
const LoginComponent = async (): Promise<Component> => await import('@/views/login/loginComponent.vue')
const RegisterComponent = async (): Promise<Component> => await import('@/views/login/registerComponent.vue')
const HomeComponent = async (): Promise<Component> => await import('@/views/home/homeComponent.vue')

// 基础路由，无需权限，公开访问
export const base: RouteRecordRaw[] = [
  {
    path: `/${BASE_PAGE_NO_FOUND}`,
    meta: {},
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
    meta: {},
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
    meta: {},
    component: BasicLayout,
    children: [
      {
        path: '',
        name: BASE_PAGE_UN_AUTH_ACCESS,
        components: {
          default: UnauthorizedAccess,
          user: MenuBar
        }
      }
    ]
  },
  {
    path: `/${BASE_PAGE_LOGIN}`,
    meta: {},
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
    meta: {},
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
    meta: {},
    component: BasicLayout,
    children: [
      {
        path: '',
        name: BASE_PAGE_HELP,
        component: PersonalCenter
      }
    ]
  }
]
// 通用匹配，404 页面
export const pathMatch = { path: '/:pathMatch(.*)*', name: BASE_PAGE_PATH_MATCH, redirect: { name: BASE_PAGE_NO_FOUND } }
// 业务路由，需要授权访问
export const permissions: RouteRecordRaw[] = [
  {
    path: `/${DEFAULT_VIEW_HOME}`,
    meta: {},
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: DEFAULT_VIEW_HOME,
        component: HomeComponent
      }
    ]
  }
]
