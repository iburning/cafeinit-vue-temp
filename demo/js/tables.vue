<template>
  <ci-table class="users" v-ref:my-table></ci-table>
  <ci-table class="users" striped="striped" v-ref:my-table-a></ci-table>
  <ci-table class="users" bordered="bordered" v-ref:my-table-b></ci-table>
</template>


<script>
export default {
  ready() {
    let headers = [
      { name: '#', className: 'no'},
      { name: 'First Name', className: 'first-name'},
      { name: 'Last Name' },
      { name: 'Username' }
    ]

    let data = [
      [ 1, 'Mark', 'Otto', '@mdo' ],
      [ 2, 'Jacob', 'Thornton', '@fat' ],
      [ 3, 'Larry', 'the Bird', '@twitter' ]
    ]

    this.$refs.myTable.headers = headers
    this.$refs.myTable.data = data
    this.$refs.myTable.itemsClassName = [ 'no', 'first-name', '', 'username']

    this.$refs.myTableA.headers = headers
    this.$refs.myTableA.data = data

    this.$refs.myTableB.headers = headers
    this.$refs.myTableB.data = data
  }
}
</script>
