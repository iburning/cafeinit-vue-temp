<template>
  <div class="{{sizeClass}}">
    <slot></slot>
  </div>
</template>


<script>
export default {
  props: {
    prefix: {
      type: String,
      default: 'col-'
    },

    size: {
      type: String,
      default: '',
      required: true
    }
  },

  computed: {
    sizeClass: function () {
      let input = this.size.split(' ')
      console.log(input)
      let output = []

      for (let i = 0; i < input.length; i++) {
        output.push(this.prefix + input[i])
      }
      console.log(output)
      return output.join(' ')
    }
  }
}
</script>
