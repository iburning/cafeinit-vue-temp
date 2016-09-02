/**
 * @fileOverview main for bootstrap
 * @author: burning <www.cafeinit.com>
 * @date: 2016-08-30
 */


import BSButton from './CIButton/BSButton.vue'
import BSLinkButton from './CIButton/BSLinkButton.vue'

import BSCheckbox from './CIForm/BSCheckbox.vue'
import BSInput from './CIForm/BSInput.vue'
import BSRadio from './CIForm/BSRadio.vue'
import BSSelect from './CIForm/BSSelect.vue'
import BSTable from './CITable/CITableBootstrap.vue'


import CIBlock from './CIBlock/CIBlock.vue'
import CIBlockBody from './CIBlock/CIBlockBody.vue'
import CIBlockFooter from './CIBlock/CIBlockFooter.vue'
import CIBlockHeader from './CIBlock/CIBlockHeader.vue'

import CIList from './CIList/CIList.vue'
import CIListCell from './CIList/CIListCell.vue'
import CIListCheckbox from './CIList/CIListCheckbox.vue'
import CIListRadio from './CIList/CIListRadio.vue'

import CILoading from './CILoading/CILoading.vue'

import CIGrid from './CIGrid/CIGrid.vue'
import CIGridCell from './CIGrid/CIGridCell.vue'

import CIModal from './CIModal/CIModalBootstrap.vue'
import CIActions from './CIModal/CIActions.vue'
import CIAlert from './CIModal/CIAlertBootstrap.vue'
import CIConfirm from './CIModal/CIConfirmBootstrap.vue'

import CITabBar from './CITabView/CITabBar.vue'


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

  'ci-list': CIList,
  'ci-list-cell': CIListCell,
  'ci-list-checkbox': CIListCheckbox,
  'ci-list-radio': CIListRadio,

  'ci-loading': CILoading,

  'ci-modal': CIModal,
  'ci-actions': CIActions,
  'ci-alert': CIAlert,
  'ci-confirm': CIConfirm,

  'ci-loading': CILoading,

  'ci-grid': CIGrid,
  'ci-grid-cell': CIGridCell,

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
