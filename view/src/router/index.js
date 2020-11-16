import Vue from 'vue'
import VueRouter from 'vue-router'
import Transaction from '../components/Transaction'
import Users from '../components/Users'

Vue.use(VueRouter)


const routes = [
  {
    path: '/transaction',
    name: 'Transaction',
    component: Transaction
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  }
]

const router = new VueRouter({
  routes
})

// 防止路由重复报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default router
