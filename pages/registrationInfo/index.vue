<template>
  <view class="page">
    <view>
      <pay-card
        :item="payStatus"
        :isFull="true"
        @isTimeOut="isTimeOut"
      ></pay-card>
      <!-- 挂号信息 -->
      <registration-card :info="info"></registration-card>
      <!-- 订单信息 -->
      <order-card :info="info"></order-card>
      <!-- 结算信息 -->
      <price-card :info="info">结算信息</price-card>
    </view>
    <!-- <cp-button @onSubmit="onSubmit" v-if="isShow">去支付</cp-button> -->
    <view class="bt-box" v-if="isShow">
      <button class="bt1" plain="true" type="primary" @click="onCancel">
        <slot name="one"> 取消 </slot>
      </button>
      <button class="bt2" type="primary" @click="onSubmit">
        <slot name="two"> 去支付 </slot>
      </button>
    </view>
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
import { cancelReservation } from '@/api/modules/onlinePay'
export default {
  data() {
    return {
      info: {},
      payStatus: {
        endTime: '',
        status: '',
      },
      isShow: false,
      registrationNo: '',
    }
  },
  mixins: [toPayMpWeiXin],
  methods: {
    onSubmit: debounce(function () {
      this.toPay()
    }),
    onCancel() {
      this.$tools.showModal('', '确定取消挂号?').then((res) => {
        if (res) {
          console.log(res)
          this.cancelReservation()
        }
      })
    },
    // 取消挂号
    async cancelReservation() {
      const data = await cancelReservation(this.info.registrationId)
      if (data.code === 100000) {
        uni.showToast({
          title: '取消成功',
          icon: 'none',
          duration: 1500,
          complete: function () {
            setTimeout(function () {
              uni.hideToast()
              uni.redirectTo({
                url: `/pages/registration/index`,
              })
            }, 1500)
          },
        })
      } else {
        uni.showToast({
          title: '操作失败',
          duration: 3000,
        })
      }
    },
    //支付
    async toPay() {
      if (this.registrationNo) {
        const payResult = await this.getPayInfo(this.registrationNo)
        console.log(payResult)
        if (payResult) {
          this.reservationDetail(this.registrationNo)
        }
      } else {
        uni.showToast({
          title: '支付异常,请退出页面重试',
          duration: 3000,
        })
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
        this.payStatus.createTime = this.info.createTime
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
        console.log('重新刷新列表')
      }
    },
  },
  onLoad(options) {
    console.log(options)
    this.registrationNo = options.registrationNo
    this.reservationDetail(options.registrationNo)
  },
  components: { payCard, registrationCard, orderCard, priceCard },
}
</script>
<style lang="scss">
.bt-box {
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 5rpx;
  .bt1 {
    width: 30%;
  }
  .bt2 {
    width: 70%;
  }
}
</style>
