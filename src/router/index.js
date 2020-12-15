import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import AboutUs from '@/components/AboutUs'
import Merchant from '@/components/Merchant'
import Beverage from '@/components/Beverage'
import Food from '@/components/Food'
import Hospitality from '@/components/Hospitality'
import Sports from '@/components/Sports'
import Electronic from '@/components/Electronic'

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
    component: AboutUs
  },
  {
    path: '/merchants',
    name: 'merchants',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Merchant
  },
  {
    path: '/beverage',
    name: 'beverage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Beverage
  },
  {
    path: '/food',
    name: 'food',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Food
  },
  {
    path: '/hospitality',
    name: 'hospitality',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Hospitality
  },
  {
    path: '/sports',
    name: 'sports',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Sports
  },
  {
    path: '/electronic',
    name: 'electronic',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Electronic
  },
  ]
})
