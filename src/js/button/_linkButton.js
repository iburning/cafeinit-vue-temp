/**
 * @fileOverview link button
 * @author: burning <www.cafeinit.com>
 * @date: 2016-09-11
 */

export default {
  props: {
    style: {
      type: String,
      default: ''
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

    link: {
      type: Object,
      default() {
        return null
      }
    }
  },

  methods: {
    click() {
      this.$dispatch('click')
    }
  }
}
