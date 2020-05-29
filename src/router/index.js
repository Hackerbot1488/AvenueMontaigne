import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'StartPage',
    component: () => import('../views/StartPage.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login-Register/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Login-Register/Register.vue')
  },
  {
    path: '/products/:category-:type-:brand-:gender-:isNew-:isOnSale',
    name: 'Products',
    props: true,
    component: () => import('../views/Product-container.vue')
  },
  {
    path: '/product/:id-:gender',
    name: 'ProductInfo',
    props: true,
    component: () => import('@/components/app/product-container/ProductInfo.vue')
  },
  {
    path: '/bag',
    name: 'Bag',
    component: () => import('../views/Bag.vue')
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: () => import('../views/Favorite.vue')
  },
  {
    path: '/develop',
    name: 'Develop',
    component: () => import('../views/Develop.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
