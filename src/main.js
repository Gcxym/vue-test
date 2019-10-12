import Vue from 'vue'
import App from './App.vue'
import "@babel/polyfill"; //兼容低版本内核游览器打不开情况
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI, {
    size: 'small',
    zIndex: 3000
});

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')