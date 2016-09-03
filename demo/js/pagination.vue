<template>
  <ci-pagination
    v-bind:current-page="2"
    v-bind:total-page="15"
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
  // ...
}
</script>
