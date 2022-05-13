<template>
  <view>
    <!-- 支付信息 -->
    <uni-card>
      <view style="font-size: large"> <slot>支付信息</slot></view>
      <view class="payment-item">
        <view>
          <text>订单总额</text>
          <text>￥{{ info.totalFee }}</text>
        </view>
      </view>
      <!-- <view class="payment-item">
        <view>
          <text>医保报销</text>
          <text v-if="lever == true">-￥5.00</text>
          <text v-if="lever === false">就诊人未绑定医保卡</text>
        </view>
      </view> -->
      <view class="payment-item">
        <view>
          <text>优惠券</text>
          <text v-if="!info.discountFee">未使用</text>
          <text v-if="!info.discountFee" class="coupon">无可用券</text>
          <text v-else>￥{{ info.discountFee }}</text>
        </view>
      </view>

      <view class="payment-footer">
        <view>
          <text>实付 :</text>
          <text class="price">￥{{ info.realFee }}</text>
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
.payment-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  margin-top: $uni-top;
  .coupon {
    margin-left: 10rpx;
    color: rgba(145, 149, 158, 0.79);
    border-radius: 16rpx;
    border: 1rpx solid rgba(145, 149, 158, 1);
    font-size: 22rpx;
    padding: 5rpx 10rpx;
    line-height: auto;
  }
  view > text {
    margin-right: 20rpx;
  }
}
.payment-footer {
  box-sizing: border-box;
  padding-top: 5rpx;
  text-align: right;
  border-top: 1px solid rgba(245, 246, 248, 1);
  margin-top: 30rpx;
  .price {
    color: rgba(255, 95, 86, 1);
    font-size: 35rpx;
  }
}
</style>
