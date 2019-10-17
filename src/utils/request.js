import axios from 'axios'

class HttpRequest {
  constructor(baseUrl = baseURL) { //不懂
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest'
      },
      credentials: 'same-origin',
      withCredentials: true   //表示跨域请求时是否需要使用凭证
    }
  }
}
