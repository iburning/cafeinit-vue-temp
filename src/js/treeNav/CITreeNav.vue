<template>
  <ul class="ci-tree-nav">
    <li class="ci-tree-nav-item" v-for="(index, item) in items"
      v-bind:class="[item.className, {'ci-active': currentIndex === index}]"
      v-on:click="clickItem(index, item)">
      <a v-link="item.link">
        <i v-if="item.icon" class="fa fa-{{item.icon}}"></i>
        {{item.text}}
      </a>
      <ci-tree-nav class="ci-tree-nav-sub"
        v-if="item.subItems && item.subItems.length"
        v-bind:items="item.subItems"></ci-tree-nav>
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
      default: -1
    }
  },

  ready() {
    // ...
  },

  methods: {
    clickItem(index, item) {
      // console.log(this.$el)
      // let activeItems = this.$el.getElementsByClassName('ci-active')
      // for (let i = 0; i < activeItems.length; i++) {
      //   let className = activeItems[i].getAttribute('class')
      //   className = className.replace('ci-active', '')
      //   activeItems[i].setAttribute('class', className)
      // }
      // console.log(activeItems)
      this.currentIndex = index
      this.$emit('click-item', index, item)
    }
  }
}
</script>
