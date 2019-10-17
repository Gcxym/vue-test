import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  // base: process.env.BASE_URl,
  routes
})

export default router
