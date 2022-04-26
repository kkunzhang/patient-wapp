<template>
  <view>
    <uni-card>
      <view style="font-size: large">订单信息</view>
      <view class="item">
        <view>
          <text>订单编号</text>
          <text>333</text>
        </view>
        <view>
          <text>订单类型</text>
          <text>222</text>
        </view>
        <view>
          <text>下单时间</text>
          <text>111</text>
        </view>
        <view>
          <text>支付方式</text>
          <text>微信支付</text>
        </view>
        <view>
          <text>支付时间</text>
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
  props: {
    info: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
<style lang="scss">
.item view {
  margin-top: 30rpx;
  color: rgba(96, 102, 114, 1);
  text {
    margin-right: 20rpx;
  }
}
</style>
