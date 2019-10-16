

export default [
  {
    path: '/login',
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ '@/views/layout/login/login.vue')
  }
]
