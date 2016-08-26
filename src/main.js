/**
 * @fileOverview main
 * @author: burning <www.cafeinit.com>
 * @date: 2016-08-26
 */

import Modal from './Modal.vue'

const components = {
  'modal': Modal
}

export default function (Vue) {
  for (name in components) {
    Vue.component(name, components[name]);
  }
}
