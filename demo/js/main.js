/**
 * @fileOverview main
 * @author: burning <www.cafeinit.com>
 * @date: 2016-08-25
 */

import Vue from 'vue';
import VueRouter from 'vue-router'
import cafeinitVue from 'cafeinit-vue'
import cafeinitStyle from 'cafeinit.css'

Vue.use(VueRouter)
Vue.use(cafeinitVue)

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
  //
  // '/buttons': {
  //   component: require('./pages/buttons')
  // },
  //
  // '/form': {
  //   component: require('./pages/form')
  // },
  //
  // '/modals': {
  //   component: require('./pages/modals')
  // },
  //
  // '/grid': {
  //   component: require('./pages/grid')
  // },
  //
  // '/list': {
  //   component: require('./pages/list')
  // },
  //
  // '/scroll-list': {
  //   component: require('./pages/scrollList')
  // },
  //
  // '/tab-bar': {
  //   component: require('./pages/tabBar')
  // },
  //
  //
  // '/items': {
  //   component: require('./pages/items')
  // },
  //
  // '/orders': {
  //   component: require('./pages/orders')
  // }
});

router.beforeEach(function (transition) {
  // console.log('transition', transition);
  if (transition.to.path.indexOf('//') === 0) {
    location.href = transition.to.path.replace('//', '/');
  }
  else if (transition.to.path.indexOf('/http') === 0) {
    location.href = transition.to.path.replace('/http', 'http');
  }
  else {
    transition.next();
  }
});

router.start(App, '#app');
