<template>
  <div v-show="isShow">
    <div class="modal fade" tabindex="-1" role="dialog"
      v-bind:class="{'in': isShow, 'modal-lg': lg}"
      v-on:click="closeViaDimmer">
      <div class="modal-dialog" role="document"
        v-bind:style="{'margin-top': marginTop + 'px'}">
        <div class="modal-content">
          <slot name="header"></slot>
          <slot name="body"></slot>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>

    <div class="modal-backdrop fade"
      v-bind:class="{'in': isShow}"
      transition="modal-fade"></div>
  </div>
</template>


<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false,
      twoWay: true
    },

    isCloseViaDimmer: {   // 是否通过点击遮罩层关闭模态框，默认为true
      type: Boolean,
      default: true
    },

    lg: {
      type: Boolean,
      default: false
    },

    marginTop: {
      type: Number,
      default: 0
    }
  },

  transitions: {
    'modal-fade': {
      beforeEnter(el) {
        // ...
      },

      enter(el) {
        // ...
      },

      afterEnter(el) {
        // ...
      },

      enterCancelled(el) {
        // ...
      },

      beforeLeave(el) {
        // ...
      },

      leave(el) {
        // ...
      },

      afterLeave(el) {
        // ...
      },

      leaveCancelled(el) {
        // ...
      }
    }
  },

  ready() {
    // ...
  },

  watch: {
    isShow(val, oldVal) {
      // console.log('modal', this.$el, this)
      if (val) {
        var dialog = this.$el.querySelector('.modal-dialog')
        // this.marginTop = - parseInt(dialog.offsetHeight / 2)
        this.marginTop = 200;
      }
    }
  },

  methods: {
    show() {
      this.isShow = true
    },

    close() {
      this.isShow = false
    },

    closeViaDimmer() {
      if (this.isCloseViaDimmer) {
        this.isShow = false
      }
    }
  }
}
</script>


<style>
.modal {
  display: block;
}
</style>
