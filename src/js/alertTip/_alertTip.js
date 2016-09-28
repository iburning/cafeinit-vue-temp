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

    style: {
      type: String,
      default: 'info'   // success, info, warning, danger
    }
  }
}
