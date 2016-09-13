<template>
  <ul class="ci-tree-nav">
    <li class="ci-tree-nav-item" v-for="(index, item) in items"
      v-bind:class="[item.className, {'ci-active': currentIndex == index}]"
      v-on:click="clickItem(index, item)">
      <a v-link="item.path">{{item.text}}</a>

      <ci-tree-nav v-bind:items="item.subItems"></ci-tree-nav>
    </li>
  </ul>
</template>


<script>
export default {
  props: {
    items: {
      type: Array,
      default: function () {
        return [];
      }
    },

    currentIndex: {
      type: Number,
      default: 0
    }
  },

  ready() {
    // ...
  },

  methods: {
    clickItem(index, item) {
      this.currentIndex = index
      this.$dispatch('click-item', index, item)
    }
  }
}
</script>
