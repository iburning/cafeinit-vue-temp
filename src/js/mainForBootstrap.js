/**
 * @fileOverview main for bootstrap
 * @author: burning <www.cafeinit.com>
 * @date: 2016-08-30
 */


import BSButton from './button/BSButton.vue'
import BSLinkButton from './button/BSLinkButton.vue'

import BSGrid from './grid/BSGrid.vue'
import BSGridCell from './grid/BSGridCell.vue'

import BSModal from './modal/BSModal.vue'
import BSActions from './modal/BSActions.vue'
import BSAlert from './modal/BSAlert.vue'
import BSConfirm from './modal/BSConfirm.vue'

import BSCheckbox from './form/BSCheckbox.vue'
import BSInput from './form/BSInput.vue'
import BSRadio from './form/BSRadio.vue'
import BSSelect from './form/BSSelect.vue'
import BSTable from './table/BSTable.vue'


import CIBlock from './block/CIBlock.vue'
import CIBlockBody from './block/CIBlockBody.vue'
import CIBlockFooter from './block/CIBlockFooter.vue'
import CIBlockHeader from './block/CIBlockHeader.vue'

import CIGallery from './gallery/CIGallery.vue'
import CIGalleryCell from './gallery/CIGalleryCell.vue'

import CIList from './list/CIList.vue'
import CIListCell from './list/CIListCell.vue'
import CIListCheckbox from './list/CIListCheckbox.vue'
import CIListRadio from './list/CIListRadio.vue'

import CIPagination from './pagination/CIPagination.vue'

import CILoading from './loading/CILoading.vue'

import CITabBar from './tabView/CITabBar.vue'


import CIScrollHelper from './utils/CIScrollHelper'


const CIomponents = {
  'ci-block': CIBlock,
  'ci-block-body': CIBlockBody,
  'ci-block-footer': CIBlockFooter,
  'ci-block-header': CIBlockHeader,

  'ci-button': BSButton,
  'ci-link-button': BSLinkButton,

  'ci-checkbox': BSCheckbox,
  'ci-input': BSInput,
  'ci-radio': BSRadio,
  'ci-select': BSSelect,

  'ci-pagination': CIPagination,

  'ci-list': CIList,
  'ci-list-cell': CIListCell,
  'ci-list-checkbox': CIListCheckbox,
  'ci-list-radio': CIListRadio,

  'ci-loading': CILoading,

  'ci-modal': BSModal,
  'ci-actions': BSActions,
  'ci-alert': BSAlert,
  'ci-confirm': BSConfirm,

  'ci-gallery': CIGallery,
  'ci-gallery-cell': CIGalleryCell,

  'ci-grid': BSGrid,
  'ci-grid-cell': BSGridCell,

  'ci-tab-bar': CITabBar,
  'ci-table': BSTable
}


// export default {
module.exports = {
  name: 'CafeinitVue for Bootstrap',
  ver: '1.0.0',

  components: (Vue) => {
    for (let name in CIomponents) {
      Vue.component(name, CIomponents[name])
    }
  },

  utils: {
    CIScrollHelper: CIScrollHelper
  }
}
