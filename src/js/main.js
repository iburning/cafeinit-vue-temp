/**
 * @fileOverview main
 * @author: burning <www.cafeinit.com>
 * @date: 2016-08-26
 */

import CIBlock from './CIBlock/CIBlock.vue'
import CIBlockBody from './CIBlock/CIBlockBody.vue'
import CIBlockFooter from './CIBlock/CIBlockFooter.vue'
import CIBlockHeader from './CIBlock/CIBlockHeader.vue'


import CIList from './CIList/CIList.vue'
import CIListCell from './CIList/CIListCell.vue'

import CIGrid from './CIGrid/CIGrid.vue'
import CIGridCell from './CIGrid/CIGridCell.vue'


const components = {
  'ci-block': CIBlock,
  'ci-block-body': CIBlockBody,
  'ci-block-footer': CIBlockFooter,
  'ci-block-header': CIBlockHeader,

  'ci-list': CIList,
  'ci-list-cell': CIListCell,

  'ci-grid': CIGrid,
  'ci-grid-cell': CIGridCell
}

export default function (Vue) {
  for (name in components) {
    Vue.component(name, components[name]);
  }
}
