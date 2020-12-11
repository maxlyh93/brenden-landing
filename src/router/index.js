import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import AboutUs from '@/components/AboutUs'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: LandingPage
  },
  {
    path: '/aboutUs',
    name: 'aboutUs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => { return import('../components/AboutUs.vue') }
  },
  {
    path: '/merchants',
    name: 'merchants',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => { return import('../components/Merchant.vue') }
  },
  {
    path: '/beverage',
    name: 'beverage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => { return import('../components/Beverage.vue') }
  },
  {
    path: '/food',
    name: 'food',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => { return import('../components/Food.vue') }
  },
  {
    path: '/hospitality',
    name: 'hospitality',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => { return import('../components/Hospitality.vue') }
  },
  {
    path: '/sports',
    name: 'sports',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => { return import('../components/Sports.vue') }
  },
  {
    path: '/electronic',
    name: 'electronic',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => { return import('../components/Electronic.vue') }
  },
  ]
})
