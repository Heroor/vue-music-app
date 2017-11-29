import 'babel-polyfill' // 引入babel补丁
import Vue from 'vue' // 导入vue
import App from './App' // 导入app根组件
import router from './router' // 导入路由配置
import Api from '@/api/api'
import fastclick from 'fastclick' // 点击补丁
fastclick.attach(document.body) // 启用fastclick

Vue.use(Api) // 挂载ajax模块
Vue.prototype.$http.get('https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg', {
  g_tk: 5381,
  uin: 0,
  format: 'json',
  inCharset: 'utf - 8',
  outCharset: 'utf - 8',
  notice: 0,
  platform: 'h5',
  needNewCode: 1,
  _: 1511966044290
})
  .then(res => {
    console.log(res)
  })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
