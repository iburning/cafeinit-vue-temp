<template>
  <div class="ci-list-hd" v-if="title">{{title}}</div>
  <ul class="ci-list ci-list-radio">
    <ci-list-cell v-for="item in items">
      <div class="ci-form-group">
        <label class="ci-form-control">
          {{item.title}}
          <input class="ci-radio" type="radio"
            v-bind:name="name"
            v-bind:value="item.value"
            v-model="model" />
        </label>
      </div>
    </ci-list-cell>
  </ul>
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
