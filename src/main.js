import 'babel-polyfill' // 引入babel补丁 需要在开头引入
import Vue from 'vue' // 导入vue
import App from './App' // 导入app根组件
import router from './router' // 导入路由配置
import Api from '@/api/api'
import fastclick from 'fastclick' // 点击补丁
fastclick.attach(document.body) // 启用fastclick

Vue.use(Api) // 挂载ajax模块
// Vue.prototype.$http.get('http://ustbhuangyi.com/music/api/getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.1116916494605047')
//   .then(res => {
//     console.log(res)
//   })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
