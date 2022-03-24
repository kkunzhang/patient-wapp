<template>
  <view class="page">
    <!--最上方卡片-->
    <uni-card class="my-uni-card">
      <view @click="onClick()" class="center-item">
        <!-- 卡片文字 -->
        <view>
          <view class="card-item-add">
            <text>赵云</text>
            <view>12312312312</view>
          </view>
          <view class="fir-card-top">
            <text>男 </text>
            <text>32 </text>
            <text>1993年11月12日 </text>
          </view>
        </view>
        <!-- 卡片文字结束 -->
        <slot><view>></view></slot>
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
    onlineinfo() {
      console.log('跳转消息详情')
    },
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
      font-size: 38rpx;
      color: #333333;
      font-weight: 500;
      margin-right: 30rpx;
    }
    view {
      font-size: 34rpx;
    }
  }
  .fir-card-top {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20rpx;
    text {
      margin-right: 30rpx;
      font-size: 34rpx;
    }
  }
}
</style>
