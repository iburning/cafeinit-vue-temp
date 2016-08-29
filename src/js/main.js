/**
 * @fileOverview main
 * @author: burning <www.cafeinit.com>
 * @date: 2016-08-26
 */

import CIBlock from './CIBlock/CIBlock.vue'
import CIBlockBody from './CIBlock/CIBlockBody.vue'
import CIBlockFooter from './CIBlock/CIBlockFooter.vue'
import CIBlockHeader from './CIBlock/CIBlockHeader.vue'

import CIButton from './CIButton/CIButton.vue'
import CILinkButton from './CIButton/CILinkButton.vue'

import CIList from './CIList/CIList.vue'
import CIListCell from './CIList/CIListCell.vue'

import CILoading from './CILoading/CILoading.vue'

import CIGrid from './CIGrid/CIGrid.vue'
import CIGridCell from './CIGrid/CIGridCell.vue'

import CIScrollHelper from './utils/CIScrollHelper'


const components = {
  'ci-block': CIBlock,
  'ci-block-body': CIBlockBody,
  'ci-block-footer': CIBlockFooter,
  'ci-block-header': CIBlockHeader,

  'ci-button': CIButton,
  'ci-link-button': CILinkButton,

  'ci-list': CIList,
  'ci-list-cell': CIListCell,

  'ci-loading': CILoading,

  'ci-grid': CIGrid,
  'ci-grid-cell': CIGridCell
}

// export default function (Vue) {
//   for (name in components) {
//     Vue.component(name, components[name]);
//   }
// }


export default {
  components: (Vue) => {
    for (name in components) {
      Vue.component(name, components[name]);
    }
  },

  utils: {
    CIScrollHelper: CIScrollHelper
  }
}
