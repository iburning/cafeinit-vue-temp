<template>
  <div class="ci-form-group">
    <label class="ci-label" v-if="title"
      v-bind:style="{width: titleWidth}">{{title}}</label>
    <select class="ci-form-control" name="{{name}}" v-model="model">
      <option value="{{item.value}}" v-for="item in items">{{item.title}}</option>
    </select>
  </div>
</template>


<script>
export default {
  props: {
    model: {
      type: String,
      twoWay: true,
      default: '',
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
