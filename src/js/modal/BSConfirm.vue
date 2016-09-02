<template>
  <ci-modal v-bind:is-show.sync="isShow" v-bind:is-close-via-dimmer="false">
    <div class="modal-header" slot="header" v-if="title">
      <h4 class="modal-title">{{title}}</h4>
    </div>
    <div class="modal-body" slot="body"><slot>Are you sure ?</slot></div>
    <div class="modal-footer" slot="footer">
      <span class="btn btn-default" v-on:click="cancel">{{concelText}}</span>
      <span class="btn btn-primary" v-on:click="ok">{{okText}}</span>
    </div>
  </ci-modal>
</template>


<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false,
      twoWay: true
    },

    title: {
      type: String,
      default: ''
    },

    okText: {
      type: String,
      default: '确认'
    },

    concelText: {
      type: String,
      default: '取消'
    }
  },

  ready() {
    // ...
  },


  methods: {
    show() {
      this.isShow = true
    },

    hide() {
      this.isShow = false
    },

    ok() {
      this.hide()
      this.$dispatch('ok')
    },

    cancel() {
      this.hide()
      this.$dispatch('cancel')
    }
  }
}
</script>
