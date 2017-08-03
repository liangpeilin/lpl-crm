import Vue from 'vue'
import Router from 'vue-router'
import * as views from '@/views'
import * as components from '@/components'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/home',
      components: {
        default: components.nav
      },
      children: [
        {
          name: 'login',
          path: 'login',
          components: {
            default: components.login
          }
        }
      ]
    },
    {
      path: '*',
      component: views.error
    }
  ],
  mode: 'history'
})
