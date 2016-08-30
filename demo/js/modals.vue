<template>
  <div class="ci-btn-area">
    <ci-link-button style="primary" block="block" v-on:click="isShowModal = true">点击显示Modal</ci-link-button>
    <ci-link-button style="primary" block="block" v-on:click="isShowAlert = true">点击显示Alert</ci-link-button>
    <ci-link-button style="primary" block="block" href="javascript:;" v-on:click="isShowConfirm = true">点击显示Confirm</ci-link-button>
    <ci-link-button style="primary" block="block" href="javascript:;" v-on:click="isShowActions = true">点击显示Actions</ci-link-button>
  </div>

  <ci-modal v-bind:is-show.sync="isShowModal">
    <div class="am-modal-hd" slot="header">CIModal</div>
    <div class="am-modal-bd" slot="body">CIModal Content</div>
  </ci-modal>

  <ci-alert v-bind:is-show.sync="isShowAlert" v-on:ok="alertOnOK">Alert Content</ci-alert>

  <ci-confirm v-bind:is-show.sync="isShowConfirm" v-on:ok="confirmOnOK" v-on:cancel="confirmOnCancel">
    Do you want quit?
  </ci-confirm>

  <ci-actions v-bind:is-show.sync="isShowActions"
    v-bind:items="[
      { className: 'btn-shares', text: 'Shares' },
      { className: 'btn-items', text: 'Items' },
      { className: 'btn-friends', text: 'Friends' }
    ]"
    cancel-text="Cancel"
    v-on:item-click="actionOnItemClick"></ci-actions>
</template>


<script>
export default {
  data() {
    return {
      isShowModal: false,
      isShowAlert: false,
      isShowConfirm: false,
      isShowActions: false,
      // actionsItems: [
      //   { className: 'btn-shares', text: 'Shares' },
      //   { className: 'btn-items', text: 'Items' },
      //   { className: 'btn-friends', text: 'Friends' }
      // ]
    }
  },

  ready() {
    // ...
  },

  methods: {
    alertOnOK() {
      console.log('alertOK')
    },

    confirmOnOK() {
      console.log('confirmOK')
    },

    confirmOnCancel() {
      console.log('confirmCancel')
    },

    actionOnItemClick(index, item) {
      console.log('actionOnItemClick', index, item)
    }
  }
}
</script>
