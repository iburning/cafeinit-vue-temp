<template>
  <strong>{{page}}</strong>
  <ci-pagination
    v-bind:current-page.sync="page"
    v-bind:total-page="totalPage"
    v-bind:show-count="10"
    v-bind:is-show-next="true"
    url="path/page",
    v-bind:params="{
      a: 'A',
      b: 'B'
    }">
  </ci-pagination>
</template>


<script>
export default {
  data() {
    return {
      page: 1,
      totalPage: 21
    }
  }
}
</script>
