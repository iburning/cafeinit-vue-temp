<template>
  <div class="ci-btn-area">
    <a class="am-btn am-btn-primary am-btn-block" href="javascript:;" v-on:click="isShowModal = true">点击显示Modal</a>
    <a class="am-btn am-btn-primary am-btn-block" href="javascript:;" v-on:click="isShowAlert = true">点击显示Alert</a>
    <a class="am-btn am-btn-primary am-btn-block" href="javascript:;" v-on:click="isShowConfirm = true">点击显示Confirm</a>
    <a class="am-btn am-btn-primary am-btn-block" href="javascript:;" v-on:click="isShowActions = true">点击显示Actions</a>
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
    v-on:click-item="actionOnClickItem"></ci-actions>
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

    actionOnClickItem(index, item) {
      console.log('actionOnClickItem', index, item)
    }
  }
}
</script>
