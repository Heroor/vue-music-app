import Axios from 'axios'

const server = Axios.create({
  baseURL: 'https://m.y.qq.com/',
  timeout: 10000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Authorization,Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET,POST'
  },
  withCredentials: true
})

export default {
  install (Vue, Option) {
    Object.defineProperty(Vue.prototype, '$http', {
      value: server
    })
  }
}
