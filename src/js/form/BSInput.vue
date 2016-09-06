<template>
  <div class="{{ns}}form-group">
    <label class="{{ns}}control-label" v-bind:class="ns ? ns + 'label' : ''" v-if="title"
      v-bind:style="{width: titleWidth}">{{title}}</label>
    <input class="{{ns}}form-control"
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
    ns: {
      type: String,
      default: ''
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
