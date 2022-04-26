<template>
  <view class="page">
    <view>
      <pay-card :list="info" :isFull="true"></pay-card>
      <uni-card class="my-uni-card">
        <view class="card-item-add" @click="onClick()">
          <view><text> 挂号成功</text></view>
          <view>请按时就诊，号源当日有效，过期作废</view>
        </view>
      </uni-card>
      <!-- 挂号信息 -->
      <registration-card :info="info"></registration-card>
      <!-- 订单信息 -->
      <order-card :info="info"></order-card>
      <!-- 支付信息 -->
      <uni-card>
        <view style="font-size: large">结算信息</view>
        <view class="payment-item">
          <view>
            <text>订单金额</text>
            <text>￥33</text>
          </view>
        </view>
        <view class="payment-item">
          <view>
            <text>优惠券</text>
            <text>未使用</text>
            <text class="coupon">无可用券</text>
          </view>
        </view>

        <view class="payment-footer">
          <view>
            实付
            <text class="price">￥33</text>
          </view>
        </view>
      </uni-card>
    </view>
  </view>
</template>

<script>
import payCard from '@/components/pay-card/pay-card-status.vue'
import registrationCard from './components/registration-card.vue'
import orderCard from './components/order-card.vue'
export default {
  data() {
    return {
      info: {
        registerDate: '1111',
        doctorTag: '1111',
        location: '1111',
        registerFee: '1111',
      },
      info: [{ id: 1 }],
    }
  },
  components: { payCard, registrationCard, orderCard },
  methods: {},
}
</script>
<style lang="scss">
.card-item-add {
  text {
    font-size: 38rpx;
    font-weight: 500;
  }
}

</style>
