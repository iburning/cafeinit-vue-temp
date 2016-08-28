<template>
  <a class="am-btn"
    href="{{href}}"
    v-bind:class="[
      'am-btn-' + style,
      size ? ('am-btn-' + size) : '',
      radius ? 'am-radius' : '',
      round ? 'am-round' : '',
      (status === 'actived') ? 'am-active' :'',
      block ? 'am-btn-block' : ''
    ]"
    v-bind:disabled="status === 'disabled' || status === 'loading'">
    <span class="am-icon-circle-o-notch am-icon-spin" v-if="status === 'loading'"></span>
    <slot>This is a button</slot>
  </a>
</template>


<script>
export default {
  props: {
    style: {
      type: String,
      default: 'default'
    },

    size: {
      type: String,
      default: ''
    },

    block: {
      type: String,
      default: ''
    },

    radius: {
      type: String,
      default: ''
    },

    round: {
      type: String,
      default: ''
    },

    status: {
      type: String,
      default: ''
    },

    href: {
      type: String,
      default: 'javascript:;'
    }
  },

  methods: {
    click: function () {
      this.$emit('click');
    }
  }
}
</script>
