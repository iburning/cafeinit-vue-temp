<template>
  <ci-list>
    <ci-list-cell accessory="link" v-link="{path: '/block'}">
      <strong class="title">Block</strong>
      <span class="sub-title">区块</span>
    </ci-list-cell>

    <ci-list-cell accessory="link" v-link="{path: '/grid'}">
      <strong class="title">Grid</strong>
      <span class="sub-title">阵列</span>
    </ci-list-cell>

    <ci-list-cell accessory="link" v-link="{path: '/list'}">
      <strong class="title">List</strong>
      <span class="sub-title">列表</span>
    </ci-list-cell>

    <ci-list-cell accessory="link" v-link="{path: '/scroll-list'}">
      <strong class="title">Scroll List</strong>
      <span class="sub-title">滚动列表</span>
    </ci-list-cell>
  </ci-list>

  <ci-list>
    <ci-list-cell accessory="link" v-link="{path: '/modals'}">
      <strong class="title">Modals</strong>
      <span class="sub-title">模态窗</span>
    </ci-list-cell>
  </ci-list>

  <ci-list>
    <ci-list-cell accessory="link" v-link="{path: '/buttons'}">
      <strong class="title">Buttons</strong>
      <span class="sub-title">按钮</span>
    </ci-list-cell>

    <ci-list-cell accessory="link" v-link="{path: '/tables'}">
      <strong class="title">Table</strong>
      <span class="sub-title">表格</span>
    </ci-list-cell>

    <ci-list-cell accessory="link" v-link="{path: '/form'}">
      <strong class="title">Form</strong>
      <span class="sub-title">表单</span>
    </ci-list-cell>
  </ci-list>

  <ci-list>
    <ci-list-cell accessory="link" v-link="{path: '/tab-bar'}">
      <strong class="title">TabBar</strong>
      <span class="sub-title">标签导航</span>
    </ci-list-cell>
  </ci-list>


  <ci-list>
    <ci-list-cell accessory="link" v-link="{path: '/items'}">
      <strong class="title">Items</strong>
      <span class="sub-title">商品列表</span>
    </ci-list-cell>

    <ci-list-cell accessory="link" v-link="{path: '/orders'}">
      <strong class="title">Orders</strong>
      <span class="sub-title">订单列表</span>
    </ci-list-cell>
  </ci-list>
</template>


<script>
export default {
  // ...
}
</script>
