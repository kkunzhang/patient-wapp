<template>
  <view style="margin-bottom: 120rpx">
    <uni-card class="bottom-pay">
      <view>支付方式</view>
      <view class="weicat">
        <view class="weicat-item">
          <image src="/static/images/weixinzhifu.png"></image>
          <text>微信支付</text>
        </view>
      </view>
    </uni-card>
  </view>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>
<style lang="scss">
.bottom-pay {
  .weicat {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20rpx;
    & image {
      width: 50rpx;
      height: 50rpx;
      margin-right: 15rpx;
    }
    .weicat-item {
      display: flex;
      align-items: center;
    }
  }
}
</style>
