/**
 * @fileoverview alert
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-05
 */

export default {
  props: {
    ns: {
      type: String,
      default: ''
    },

    isShow: {
      type: Boolean,
      default: false
    },

    isCloseViaDimmer: {     // 是否通过点击遮罩层关闭模态框，默认为true
      type: Boolean,
      default: false
    },

    size: {
      type: String,
      default: ''       // lg
    },

    title: {
      type: String,
      default: ''
    },

    content: {
      type: String,
      default: ''
    },

    okText: {
      type: String,
      default: '确认'
    }
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
      this.$emit('ok')
    }
  }
}
