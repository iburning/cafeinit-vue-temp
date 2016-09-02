/**
 * @fileOverview main for bootstrap
 * @author: burning <www.cafeinit.com>
 * @date: 2016-08-31
 */

import Vue from 'vue';
import VueRouter from 'vue-router'
import CafeinitVue from 'cafeinit-vue-bootstrap'
import CafeinitStyle from 'cafeinit.css'

Vue.use(VueRouter)
Vue.use(CafeinitVue.components)

var App = Vue.extend({})
var router = window.__router = new VueRouter()

router.map({
  '/': {
    component: require('./index.vue')
  },

  '/home': {
    component: require('./index.vue')
  },

  '/block': {
    component: require('./block.vue')
  },

  '/buttons': {
    component: require('./buttons.vue')
  },

  '/form': {
    component: require('./form.vue')
  },

  '/modals': {
    component: require('./modals.vue')
  },

  '/grid': {
    component: require('./grid.vue')
  },

  '/list': {
    component: require('./list.vue')
  },

  '/scroll-list': {
    component: require('./scrollList.vue')
  },

  '/tab-bar': {
    component: require('./tabBar.vue')
  },

  '/tables': {
    component: require('./tables.vue')
  }
})

router.beforeEach((transition) => {
  // console.log('transition', transition)
  if (transition.to.path.indexOf('//') === 0) {
    location.href = transition.to.path.replace('//', '/')
  }
  else if (transition.to.path.indexOf('/http') === 0) {
    location.href = transition.to.path.replace('/http', 'http')
  }
  else {
    transition.next()
  }
})

router.start(App, '#app')
