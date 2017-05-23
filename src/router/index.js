import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods', component: require('../components/goods/goods.vue')
    },
    {
      path: '/ratings', component: require('../components/ratings/ratings.vue')
    },
    {
      path: '/sellers', component: require('../components/sellers/sellers.vue')
    },
    {
      path: '*', component: require('../components/goods/goods.vue')
    }

  ]
})
