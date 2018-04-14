import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import 'common/stylus/index.styl'

Vue.config.productionTip = false

// 所有div点击没有300毫秒延迟
fastclick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('common/images/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
