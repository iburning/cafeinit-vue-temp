/**
 * @fileOverview alert tip
 * @author: burning <www.cafeinit.com>
 * @date: 2016-09-18
 */

export default {
  props: {
    ns: {
      type: String,
      default: ''
    },

    isShow: {
      type: Boolean,
      default: false,
      twoWay: true
    },

    style: {
      type: String,
      default: 'info'   // success, info, warning, danger
    },

    duration: {
      type: Number,
      default: 2000
    }
  },

  data: function () {
    return {
      timer: null
    }
  },

  watch: {
    isShow: function (val) {
      var that = this;

      console.log('isShow', val, this.duration)
      if (val && this.duration > 0) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        else {
          this.timer = setTimeout(function () {
            that.close()
            clearTimeout(that.timer)
          }, this.duration)
        }
      }
    }
  },

  methods: {
    show() {
      this.isShow = true
    },

    close() {
      this.isShow = false
    }
  }
}
