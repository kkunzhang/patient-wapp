<template>
  <view class="page">
    <uni-card class="my-uni-card">
      <view @click="onClick()" class="center-item">
        <view>
          <view class="card-item-add">
            <text>赵云</text>
            <view>12312312312</view>
          </view>
          <view class="fir-card-top">
            <text>男 </text>
            <text>32岁 </text>
            <text>1993年11月12日 </text>
          </view>
        </view>
        <slot><view v-if="isShowButton" class="gl"></view></slot>
      </view>
    </uni-card>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    onClick() {
      this.$emit('openPop', 1)
    },
  },
  props: {
    dataList: {
      type: Object,
      default() {
        return {}
      },
    },
    isShowButton: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
<style lang="scss">
.center-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .card-item-add {
    display: flex;
    text {
      font-size: $uni-font-size-h1;
      color: #333333;
      font-weight: 500;
      margin-right: 30rpx;
    }
    view {
      font-size: $uni-font-size-h3;
    }
  }
  .fir-card-top {
    display: flex;
    flex-wrap: wrap;
    margin-top: 12rpx;
    text {
      margin-right: 30rpx;
      font-size: $uni-font-size-h3;
    }
  }
}
</style>
