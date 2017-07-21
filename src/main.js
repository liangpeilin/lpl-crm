// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from '@/router'
import Home from '@/views/home'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#lpl',
  router: router,
  template: '<Home/>',
  components: {
    'Home': Home
  }
})