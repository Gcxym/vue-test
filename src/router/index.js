import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'

import store from '@/store'
import { getToken, canTurnTo } from '@/libs/util'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})

export default router
