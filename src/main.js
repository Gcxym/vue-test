import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

// 实际打包时应该不引入mock
if (process.env.NODE_ENV !== 'production') require('@/mock')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
