import 'babel-polyfill' // 引入babel补丁
import Vue from 'vue' // 导入vue
import App from './App' // 导入app根组件
import router from './router' // 导入路由配置
import fastclick from 'fastclick' // 点击补丁
fastclick.attach(document.body) // 启用fastclick

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
