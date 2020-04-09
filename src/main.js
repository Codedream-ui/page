// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/css/common.css' /*引入公共样式*/
import '../static/css/style.css' /*引入公共样式*/
import '../static/css/style2020.css' /*引入公共样式*/

import $ from 'jquery'

// 导入公用组件Banner
import Banner from './component/Banner'
Vue.use(Banner)
Vue.component('Banner',Banner)//初始化组件

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App,Banner },
  template: '<App/>'
})
