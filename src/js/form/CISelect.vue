<template>
  <div class="{{ns}}form-group">
    <label class="{{ns}}label" v-if="title"
      v-bind:style="{width: titleWidth}">{{title}}</label>
    <select class="{{ns}}form-control" name="{{name}}" v-model="model">
      <option value="{{item.value}}" v-for="item in items">{{item.title}}</option>
    </select>
  </div>
</template>


<script>
export default {
  props: {
    ns: {
      type: String,
      default: 'ci-'
    },

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
