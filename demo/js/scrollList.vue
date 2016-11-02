<template>
  <ci-loading v-show="isLoading"></ci-loading>
  <ci-list>
    <ci-list-cell accessory="link" v-for="item in items">
      {{item.title}}
    </ci-list-cell>
  </ci-list>

  <ci-loading v-show="isLoading"></ci-loading>
</template>


<script>
import CafeinitVue from 'cafeinit-vue'
var CIScrollHelper = CafeinitVue.utils.CIScrollHelper

export default {
  data() {
    return {
      items: [],
      page: 1,
      isLoading: false
    }
  },

  ready() {
    var that = this;

    var scroll = new CIScrollHelper({
      container: $(window),
      content: $('body'),
      willScrollToStartHandler: () => {
        that.getData(++that.page, function (items) {
          for (var i = 0; i < items.length; i++) {
            that.items.unshift(items[i])
            scroll.scrollTo(0, 100)
          }
        })
      },
      willScrollToEndHandler: () => {
        that.getData(++that.page, function (items) {
          that.items = that.items.concat(items)
        })
      }
    })

    this.getData(this.page, (items) => {
      that.items = items;
      setTimeout(function () {
        scroll.scrollTo(0, 100)
      }, 100)
    })
  },

  methods: {
    getData(page, callback) {
      var that = this
      this.isLoading = true

      var delay = setTimeout(() => {
        page = page - 1
        page = (page < 0) ? 0 : page
        var pageSize = 20
        var items = []
        for (var i = pageSize * page ; i < pageSize * (page + 1); i++) {
          items.push({ title: 'title ' + i })
        }

        that.isLoading = false
        callback(items)
        clearTimeout(delay)
      }, Math.random() * 1000)
    }
  }
}
</script>
