import type { NavigationGuardWithThis, NavigationHookAfter } from 'vue-router'
export const beforeEach: NavigationGuardWithThis<void> = async (to, from, next) => {
  console.log('%c beforeEach to: %O, from: %O', 'color: #f00', to, from)
  next()
}
export const afterEach: NavigationHookAfter = (to, from, failure): void => {
  console.log('%c afterEach to: %O, from: %O, failure: %O', 'color: #f00', to, from, failure)
}
