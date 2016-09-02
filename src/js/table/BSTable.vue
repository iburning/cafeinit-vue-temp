<template>
  <table class="table"
    v-bind:class="[
      striped ? 'table-striped' : '',
      bordered ? 'table-bordered' : '',
      hover ? 'table-hover' : ''
    ]">
    <thead>
      <tr>
        <th v-for="item in headers" class="{{item.className}}">{{item.name}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="rows in data">
        <td v-bind:class="itemsClassName[index]" v-for="(index, value) in rows">{{value}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      default() {
        return [];
      }
    },

    data: {
      type: Array,
      default() {
        return [];
      }
    },

    itemsClassName: {
      type: Array,
      default() {
        return [];
      }
    },

    striped: {
      type: String,
      default: ''
    },

    bordered: {
      type: String,
      default: ''
    },

    hover: {
      type: String,
      default: ''
    }
  }
}
</script>
