import axios from 'axios'
import user from '@/store/module/user.js'
// import { baseURL } from '@/config'

class HttpRequest {
  constructor(baseUrl = baseURL) { // 如果传入参数就用传入的，没有就用baseURL
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig() { // 统一添加请求参数
    const config = {
      baseURL: this.baseUrl, // axios.create 参数 baseUrl将被添加到`url`前面，除非`url`是绝对的。
      headers: {
        // 这里可以添加统一的header 如JWT登录
        // COP_Authorization: 'Bearer ' + getToken()
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest'
      },
      credentials: 'same-origin',
      withCredentials: true   //表示跨域请求时是否需要使用凭证
    }
    if (user.state.token) {
      config.headers.Authorization = user.state.token
    }
    return config
  }
  distroy(url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
      loadingInstance.close() // 加载停止
    }
  }
  interceptors(instance, url) { // 请求、响应拦截
    instance.interceptors.request.use(config => { // request请求拦截
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) { // Object.keys获取队列里的属性名 如果队列里面没有请求，就添加loading...
        // Spin.show()
        loadingInstance = Loading.service({ // 加载开始
          lock: true,
          text: '加载中...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0)'
        })
      }
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => { // response拦截器
      // 统一增加错误提示
      this.distroy(url)
      const { data, status } = res // ES6解构赋值
      return { data, status }
    }, error => {
      this.distroy(url)
      return Promise.reject(error)
    })
  }
  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options) // 合并多个对象
    this.interceptors(instance, options.url)
    return instance(options) // 执行调用
  }
}
export default HttpRequest