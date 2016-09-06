<template>
  <ul class="pagination">
    <li class="pagination-first" v-if="isShowLast">
      <a href="javascript:;" v-on:click="itemOnClick(1)">
        <i class="fa fa-angle-double-left"></i>
      </a>
    </li>
    <li class="pagination-prev" v-if="isShowNext">
      <a href="javascript:;" v-on:click="itemOnClick(prevPage)">
        <i class="fa fa-angle-left"></i>
      </a>
    </li>
    <li class="pagination-item" v-for="page in pages"
      v-bind:class="{'active': page === currentPage}">
      <a href="javascript:;" v-on:click="itemOnClick(page)">{{page}}</a>
    </li>
    <li class="pagination-next" v-if="isShowNext">
      <a href="javascript:;" v-on:click="itemOnClick(nextPage)">
        <i class="fa fa-angle-right"></i>
      </a>
    </li>
    <li class="pagination-last" v-if="isShowLast">
      <a href="javascript:;" v-on:click="itemOnClick(totalPage)">
        <i class="fa fa-angle-double-right"></i>
      </a>
    </li>
  </ul>
</template>


<script>
export default {
  props: {
    url: {
      type: String,
      default: ''
    },

    params: {
      type: Object,
      default: function () {
        return {}
      }
    },

    currentPage: {
      type: Number,
      default: 1,
      twoWay: true
    },

    totalPage: {
      type: Number,
      default: 1
    },

    showCount: {     // 显示按钮个数
      type: Number,
      default: 9
    },

    isShowNext: {
      type: Boolean,
      default: false
    },

    isShowLast: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    pages: function () {
      var pages = [];
      var x = parseInt(this.showCount / 2)
      var start = this.currentPage - x
      start = (start <= 0) ? 1 : start
      var end = start + this.showCount - 1
      end = (end > this.totalPage) ? this.totalPage : end
      start = end - this.showCount;
      start = (start <= 0) ? 1 : start

      for (var i = start; i <= end; i++) {
        pages.push(i)
      }

      return pages
    },

    prevPage: function () {
      var page = this.currentPage - 1
      page = (page <= 0) ? 1 : page

      return page
    },

    nextPage: function () {
      var page = this.currentPage + 1
      page = (page > this.totalPage) ? this.totalPage : page

      return page
    }
  },

  methods: {
    itemOnClick: function (page) {
      this.currentPage = page
      window._test = this
      let params = [];
      for (name in this.params) {
        params.push(name + '=' + this.params[name])
      }
      params.push('page=' + page)
      console.log('itemOnClick', page, this, this.url, params.join('&'))
    }
  }
}
</script>
