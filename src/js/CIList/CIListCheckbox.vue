<template>
  <div class="ci-list-hd" v-if="title">{{title}}</div>
  <ul class="ci-list ci-list-checkbox">
    <ci-list-cell v-for="item in items">
      <div class="ci-form-group">
        <label class="ci-form-control">
          <input class="ci-checkbox" type="checkbox"
            v-bind:name="name"
            v-bind:value="item.value"
            v-model="model" /> {{item.title}}
        </label>
      </div>
    </ci-list-cell>
  </ul>
</template>


<script>
export default {
  props: {
    model: {
      type: Array,
      twoWay: true,
      default: [],
      required: false
    },

    title: {
      type: String,
      default: ''
    },

    name: {
      type: String,
      required: true
    },

    items: {
      type: Array,
      required: true
    }
  }
}
</script>
