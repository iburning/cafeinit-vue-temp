/**
 * @fileOverview main
 * @author: burning <www.cafeinit.com>
 * @date: 2016-08-25
 */

import Vue from 'vue';
import cafeinitVue from 'cafeinit-vue'
import cafeinitStyle from 'cafeinit.css'
import App from './app.vue'

Vue.use(cafeinitVue)

new Vue({
  el: 'body',

  data: {
    title: 'Hello CafeInit!',
    showModal: false
  },

  components: {
    app: App
  }
})
