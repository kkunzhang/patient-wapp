<template>
  <view class="page">
    <view>
      <pay-card :list="info1" :isFull="true"></pay-card>
      <!-- 挂号信息 -->
      <registration-card :info="info"></registration-card>
      <!-- 订单信息 -->
      <order-card :info="info"></order-card>
      <!-- 结算信息 -->
      <price-card :info="info">结算信息</price-card>
    </view>
    <cp-button @onSubmit="onSubmit" v-if="isShow">去支付</cp-button>
  </view>
</template>

<script>
import payCard from '@/components/pay-card/pay-card-status.vue'
import registrationCard from './components/registration-card.vue'
import orderCard from './components/order-card.vue'
import priceCard from '@/components/pay-card/price-card.vue'
export default {
  data() {
    return {
      info: {
        registerDate: '1111',
        doctorTag: '1111',
        location: '1111',
        registerFee: '1111',
      },
      info1: [{ id: 1 }],
      isShow: true,
    }
  },
  components: { payCard, registrationCard, orderCard, priceCard },
  methods: {},
}
</script>
<style lang="scss">
</style>
