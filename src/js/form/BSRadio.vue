<template>
  <div class="{{ns}}form-group">
    <label class="{{ns}}control-label" v-if="title"
      v-bind:style="{width: titleWidth}">{{title}}</label>
    <div v-if="inline">
      <label class="radio-inline" v-for="item in items">
        <input type="radio"
          v-bind:name="name"
          v-bind:value="item.value"
          v-model="model" /> {{item.title}}
      </label>
    </div>

    <div v-else>
      <div class="radio" v-for="item in items">
        <label>
          <input type="radio"
            v-bind:name="name"
            v-bind:value="item.value"
            v-model="model" /> {{item.title}}
        </label>
      </div>
    </div>
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

    name: {
      type: String,
      required: true
    },

    items: {
      type: Array,
      required: true
    },

    inline: {
      type: String,
      default: ''
    }
  }
}
</script>
