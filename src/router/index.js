import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'IdaNodes',
    component: () => import(/* webpackChunkName: "idanodes" */ '../views/IdaNodes.vue')
  },
  {
    path: '/planum',
    name: 'Planum',
    component: () => import(/* webpackChunkName: "planum" */ '../views/Planum.vue')
  },
  {
    path: '/rewards',
    name: 'Rewards',
    component: () => import(/* webpackChunkName: "rewards" */ '../views/Rewards.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
