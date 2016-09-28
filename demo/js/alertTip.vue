<template>
  <ci-alert-tip style="success" v-bind:is-show.sync="true">success</ci-alert-tip>
  <ci-alert-tip style="info" v-bind:is-show.sync="true">success</ci-alert-tip>
  <ci-alert-tip style="warning" v-bind:is-show.sync="true">warning</ci-alert-tip>
  <ci-alert-tip style="danger" v-bind:is-show.sync="true">danger</ci-alert-tip>

  <ci-alert-tip style="info" v-bind:is-show.sync="isShowTip" v-bind:duration="3000">
    This tip will be hiden after 3 seconds.
  </ci-alert-tip>

  <ci-link-button style="primary" block="block" v-on:click="isShowTip = true">Show alert tip</ci-link-button>
</template>


<script>
export default {
  data() {
    return {
      isShowTip: false
    }
  }
}
</script>
