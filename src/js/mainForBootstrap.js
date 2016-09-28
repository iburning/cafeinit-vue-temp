/**
 * @fileOverview main for bootstrap
 * @author: burning <www.cafeinit.com>
 * @date: 2016-09-28
 */

import CIAlertTip from './alertTip/BSAlertTip.vue'

import CIBlock from './block/CIBlock.vue'
import CIBlockBody from './block/CIBlockBody.vue'
import CIBlockFooter from './block/CIBlockFooter.vue'
import CIBlockHeader from './block/CIBlockHeader.vue'

import CIBreadcrumb from './breadcrumb/BSBreadcrumb.vue'

import CIGallery from './gallery/CIGallery.vue'
import CIGalleryCell from './gallery/CIGalleryCell.vue'

import CIGrid from './grid/BSGrid.vue'
import CIGridCell from './grid/BSGridCell.vue'

import CIList from './list/CIList.vue'
import CIListCell from './list/CIListCell.vue'
import CIListCheckbox from './list/BSListCheckbox.vue'
import CIListRadio from './list/BSListRadio.vue'

import CILoading from './loading/CILoading.vue'

import CIPagination from './pagination/BSPagination.vue'

import CITabBar from './tabView/CITabBar.vue'
import CITreeNav from './treeNav/CITreeNav.vue'

import CITable from './table/BSTable.vue'


/* for form */
import CICheckbox from './form/BSCheckbox.vue'
// import CIDatetimePicker from './form/BSDatetimePicker.vue'
import CIInput from './form/BSInput.vue'
import CIRadio from './form/BSRadio.vue'
import CISelect from './form/BSSelect.vue'

import CIButton from './button/BSButton.vue'
import CILinkButton from './button/BSLinkButton.vue'


/* for modal */
import CIModal from './modal/BSModal.vue'
import CIActions from './modal/BSActions.vue'
import CIAlert from './modal/BSAlert.vue'
import CIConfirm from './modal/BSConfirm.vue'


import CIScrollHelper from './utils/CIScrollHelper'


const CIomponents = {
  'ci-alert-tip': CIAlertTip,

  'ci-block': CIBlock,
  'ci-block-body': CIBlockBody,
  'ci-block-footer': CIBlockFooter,
  'ci-block-header': CIBlockHeader,

  'ci-breadcrumb': CIBreadcrumb,

  'ci-gallery': CIGallery,
  'ci-gallery-cell': CIGalleryCell,

  'ci-grid': CIGrid,
  'ci-grid-cell': CIGridCell,

  'ci-list': CIList,
  'ci-list-cell': CIListCell,
  'ci-list-checkbox': CIListCheckbox,
  'ci-list-radio': CIListRadio,

  'ci-loading': CILoading,

  'ci-pagination': CIPagination,

  'ci-tab-bar': CITabBar,
  'ci-table': CITable,
  'ci-tree-nav': CITreeNav,

  /* for form */
  'ci-button': CIButton,
  'ci-link-button': CILinkButton,

  'ci-checkbox': CICheckbox,
  // 'ci-datetime-picker': CIDatetimePicker,
  'ci-input': CIInput,
  'ci-radio': CIRadio,
  'ci-select': CISelect,

  /* form modal */
  'ci-modal': CIModal,
  'ci-actions': CIActions,
  'ci-alert': CIAlert,
  'ci-confirm': CIConfirm
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
