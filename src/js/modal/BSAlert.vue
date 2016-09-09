<template>
  <ci-modal v-bind:is-show.sync="isShow" v-bind:is-close-via-dimmer="isCloseViaDimmer">
    <div class="modal-header" slot="header" v-if="title">
      <h4 class="modal-title">{{title}}</h4>
    </div>
    <div class="modal-body" slot="body"><slot>default alert</slot></div>
    <div class="modal-footer" slot="footer">
      <span class="btn btn-default" v-on:click="ok">{{okText}}</span>
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

    isCloseViaDimmer: {
      type: Boolean,
      default: false
    },

    title: {
      type: String,
      default: ''
    },

    okText: {
      type: String,
      default: '确认'
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
    }
  }
}
</script>
