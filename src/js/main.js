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

import CICheckbox from './CIForm/CICheckbox.vue'
import CIInput from './CIForm/CIInput.vue'
import CIRadio from './CIForm/CIRadio.vue'
import CISelect from './CIForm/CISelect.vue'

import CIList from './CIList/CIList.vue'
import CIListCell from './CIList/CIListCell.vue'
import CIListCheckbox from './CIList/CIListCheckbox.vue'
import CIListRadio from './CIList/CIListRadio.vue'

import CILoading from './CILoading/CILoading.vue'

import CIGrid from './CIGrid/CIGrid.vue'
import CIGridCell from './CIGrid/CIGridCell.vue'

import CIModal from './CIModal/CIModal.vue'
import CIActions from './CIModal/CIActions.vue'
import CIAlert from './CIModal/CIAlert.vue'
import CIConfirm from './CIModal/CIConfirm.vue'

import CITabBar from './CITabView/CITabBar.vue'


import CIScrollHelper from './utils/CIScrollHelper'


const CIomponents = {
  'ci-block': CIBlock,
  'ci-block-body': CIBlockBody,
  'ci-block-footer': CIBlockFooter,
  'ci-block-header': CIBlockHeader,

  'ci-button': CIButton,
  'ci-link-button': CILinkButton,

  'ci-checkbox': CICheckbox,
  'ci-input': CIInput,
  'ci-radio': CIRadio,
  'ci-select': CISelect,

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
}

const name = 'CafeinitVue'
const ver = '1.0.0'

const utils = {
  CIScrollHelper: CIScrollHelper
}

function components(Vue) {
  for (tagName in CIomponents) {
    Vue.component(tagName, CIomponents[tagName])
  }
}

export { name, ver, components, utils }
