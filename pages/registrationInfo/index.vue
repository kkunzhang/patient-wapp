<template>
  <view class="page">
    <view>
      <pay-card :item="payStatus" :isFull="true" @isTimeOut="isTimeOut"></pay-card>
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
import { reservationDetail } from '@/api/modules/registration'
import { toPayMpWeiXin } from '@/utils/pay.js'
import { debounce } from '@utils/utils'
export default {
  data() {
    return {
      info: {},
      payStatus: {
        endTime: '',
        status: '',
      },
      isShow: false,
      registrationNo: ''
    }
  },
  mixins: [toPayMpWeiXin],
  methods: {
    onSubmit: debounce(function () {
      this.toPay()
    }),
    //支付
    async toPay() {
      if (this.registrationNo) {
        const payResult = await this.getPayInfo(this.registrationNo)
        console.log(payResult);
        uni.navigateTo({
          url: `/pages/registrationInfo/index?registrationNo=${this.registrationNo}`,
        })
      } else {
        uni.showToast({
          title: '支付异常,请退出页面重试',
          duration: 3000,
        });
      }
    },
    async reservationDetail(registrationNo) {
      this.isShow = false
      let params = {
        registrationNo: registrationNo,
      }
      const data = await reservationDetail(params)
      console.log(data.data)
      if (data.data) {
        this.info = data.data
        this.payStatus.endTime = this.info.timeout
        this.payStatus.systemTime = this.info.systemTime
        this.payStatus.status = this.info.registrationStatus
        this.payStatus.realFee = this.info.realFee
        if (this.info.registrationStatus == 10) {
          this.isShow = true
        }
        console.log(this.payStatus)
      }
    },
    isTimeOut(val) {
      if (val) {
        this.reservationDetail(this.registrationNo)
        console.log('重新刷新列表');

      }

    }
  },
  onLoad(options) {
    console.log(options);
    this.registrationNo = options.registrationNo
    this.reservationDetail(options.registrationNo)
  },
  components: { payCard, registrationCard, orderCard, priceCard },
}
</script>
<style lang="scss">
</style>
