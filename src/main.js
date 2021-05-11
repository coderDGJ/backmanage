// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// router
import router from './router'
// 引入 ElementUI
import ElementUI from 'element-ui'
// 全局引入css文件
import "element-ui/lib/theme-chalk/index.css"
// 
Vue.use(ElementUI)
Vue.config.productionTip = false
import axios from 'axios'
Vue.prototype.$axios = axios;
//引入封装的公用方法
import http from './common/js/http'
Vue.prototype.$http = http;
import apis from './common/js/api'
Vue.prototype.$apis = apis;
import store from './store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 注册router
  router,
  store,
  // components: { App },
  // template: '<App/>'
  render: h => h(App)
})
