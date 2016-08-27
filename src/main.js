/**
 * @fileOverview main
 * @author: burning <www.cafeinit.com>
 * @date: 2016-08-26
 */

import Modal from './Modal.vue'
import CIList from './CIList/CIList.vue'
import CIListCell from './CIList/CIListCell.vue'

const components = {
  'modal': Modal,
  'ci-list': CIList,
  'ci-list-cell': CIListCell
}

export default function (Vue) {
  for (name in components) {
    Vue.component(name, components[name]);
  }
}
