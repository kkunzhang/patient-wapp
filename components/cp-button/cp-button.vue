<template>
  <view>
    <view class="submit-box">
      <button type="primary" @click="onSubmit()">
        <slot>确定</slot>
      </button>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', 1)
    },
  },
}
</script>
<style lang="scss">
.submit-box {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>
