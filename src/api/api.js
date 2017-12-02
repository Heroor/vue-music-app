import Axios from 'axios'

Axios.default.baseURL = 'https://m.y.qq.com/'
Axios.default.headers = {
	'Content-Type': 'text/plain;charset=utf-8'
}

export default {
  install (Vue, Option) {
    Object.defineProperty(Vue.prototype, '$http', {
      value: Axios
    })
  }
}
