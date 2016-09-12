/**
 * @fileOverview grid cell
 * @author: burning <www.cafeinit.com>
 * @date: 2016-09-11
 */


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
      let output = []

      for (let i = 0; i < input.length; i++) {
        output.push(this.prefix + input[i])
      }

      return output.join(' ')
    }
  }
}
