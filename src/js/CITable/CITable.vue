<template>
  <table class="{{ns}}table">
    <thead>
      <tr>
        <th v-for="item in headers">{{item.name}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="rows in datas">
        <td v-for="value in rows">{{value}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    ns: {
      type: String,
      default: 'ci-'
    },

    headers: {
      type: Array,
      default() {
        return [];
      }
    },

    datas: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
