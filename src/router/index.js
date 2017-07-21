import Vue from 'vue'
import Router from 'vue-router'
import * as views from '@/views'
import * as components from '@/components'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: components.nav
      },
      children: [
        {
          path: 'Login',
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
