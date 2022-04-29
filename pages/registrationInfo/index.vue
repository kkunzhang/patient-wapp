<template>
  <view class="page">
    <view>
      <pay-card :item="payStatus" :isFull="true"></pay-card>
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
import priceCard from './components/price-card.vue'
import { reservationDetail } from '@/api/modules/registration'

export default {
  data() {
    return {
      info: {},
      payStatus: {
        endTime: '',
        id: '',
      },
      isShow: false,
    }
  },
  methods: {
    async reservationDetail(patientId, registrationId) {
      let params = {
        patientId: patientId,
        registrationId: registrationId,
      }
      const data = await reservationDetail(params)
      console.log(data.data)
      if (data.data) {
        this.info = data.data
        this.payStatus.endTime = this.info.waitPaidTime
        this.payStatus.id = this.info.registrationStatus
        console.log(this.payStatu)
      }
    },
  },
  onLoad(options) {
    this.isShow = false
    if (options.registrationStatus == 10) {
      this.isShow = true
    }
    this.reservationDetail(options.patientId, options.registrationId)
  },
  components: { payCard, registrationCard, orderCard, priceCard },
}
</script>
<style lang="scss">
</style>
