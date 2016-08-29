<template>
  <div class="ci-form-group">
    <label class="ci-label" v-if="title"
      v-bind:style="{width: titleWidth}">{{title}}</label>
    <div class="ci-form-control">
      <label v-for="item in items">
        <input type="checkbox"
          v-bind:name="name"
          v-bind:value="item.value"
          v-model="model" /> {{item.title}}
      </label>
    </div>
  </div>
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

    titleWidth: {
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
