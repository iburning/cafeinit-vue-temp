<template>
  <button class="btn" type="{{type}}"
    v-bind:class="[
      'btn-' + style,
      size ? ('btn-' + size) : '',
      radius ? 'radius' : '',
      round ? 'round' : '',
      (status === 'actived') ? 'active' :'',
      block ? 'btn-block' : ''
    ]"
    v-bind:disabled="status === 'disabled' || status === 'loading'">
    <span class="icon-circle-o-notch icon-spin" v-if="status === 'loading'"></span>
    <slot>This is a button</slot>
  </button>
</template>


<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button'
    },

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
    }
  },

  methods: {
    click: function () {
      this.$emit('click');
    }
  }
}
</script>
