<template>
  <div class="ci-form-group">
    <label class="ci-label" v-if="title"
      v-bind:style="{width: titleWidth}">{{title}}</label>
    <input class="ci-form-control"
      v-model="model"
      v-bind:type="type"
      v-bind:name="name"
      v-bind:placeholder="placeholder"
      v-bind:disabled="disabled" />
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

    type: {
      type: String,
      default: 'text'
    },

    name: {
      type: String,
      required: true
    },

    placeholder: {
      type: String
    },

    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
