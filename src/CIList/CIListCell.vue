<template>
  <li class="ci-list-cell">
    <div class="ci-list-cell-body">
      <slot></slot>
    </div>
    <div class="ci-list-cell-accessory" v-if="accessory">
      <i class="fa fa-{{accessoryIcon}}"></i>
    </div>
  </li>
</template>


<script>
export default {
  props: {
    accessory: {
      type: String,
      default: ''
    }
  },

  computed: {
    accessoryIcon() {
      var icon = ''

      switch (this.accessory) {
        case 'link':
          icon = 'chevron-right'
          break

        case 'detail':
          icon = 'info-circle'
          break

        case 'check':
          icon = 'check'
          break

        default:
          icon = ''
      }

      return icon
    }
  },

  ready() {
    //
  }
}
</script>
