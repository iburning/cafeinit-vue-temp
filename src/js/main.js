/**
 * @fileOverview main
 * @author: burning <www.cafeinit.com>
 * @date: 2016-08-26
 */

import CIBlock from './block/CIBlock.vue'
import CIBlockBody from './block/CIBlockBody.vue'
import CIBlockFooter from './block/CIBlockFooter.vue'
import CIBlockHeader from './block/CIBlockHeader.vue'

import CIButton from './button/CIButton.vue'
import CILinkButton from './button/CILinkButton.vue'

import CICheckbox from './form/CICheckbox.vue'
import CIInput from './form/CIInput.vue'
import CIRadio from './form/CIRadio.vue'
import CISelect from './form/CISelect.vue'

import CIList from './list/CIList.vue'
import CIListCell from './list/CIListCell.vue'
import CIListCheckbox from './list/CIListCheckbox.vue'
import CIListRadio from './list/CIListRadio.vue'

import CILoading from './loading/CILoading.vue'

import CIGallery from './gallery/CIGallery.vue'
import CIGalleryCell from './gallery/CIGalleryCell.vue'

import CIModal from './modal/CIModal.vue'
import CIActions from './modal/CIActions.vue'
import CIAlert from './modal/CIAlert.vue'
import CIConfirm from './modal/CIConfirm.vue'

import CITabBar from './tabView/CITabBar.vue'


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

  'ci-gallery': CIGallery,
  'ci-gallery-cell': CIGalleryCell,

  'ci-tab-bar': CITabBar,
}


// export default {
module.exports = {
  name: 'CafeinitVue',
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
