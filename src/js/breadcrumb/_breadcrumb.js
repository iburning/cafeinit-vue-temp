export default {
  props: {
    ns: {
      type: String,
      default: 'ci-'
    },

    items: {
      type: Array,
      default: function () {
        return [];
      }
    }
  }
}
