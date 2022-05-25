<template>
  <view class="page">
    <u-skeleton rows="10" :loading="loading" :animate="true" :title="false">
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
    </u-skeleton>

    <view class="bt-box" v-if="isShow">
      <button class="bt1" plain="true" type="primary" @click="onCancel">
        <slot name="one"> 取消 </slot>
      </button>
      <button class="bt2" type="primary" @click="onSubmit">
        <slot name="two"> 去支付 </slot>
      </button>
    </view>
    <cp-button @onSubmit="onRefund" v-if="isShowRefund">申请退款</cp-button>
  </view>
</template>

<script>
import payCard from '@/components/pay-card/pay-card-status.vue'
import registrationCard from './components/registration-card.vue'
import orderCard from './components/order-card.vue'
import priceCard from '@/components/pay-card/price-card.vue'
import { reservationDetail } from '@/api/modules/registration'
import { toRefundApply } from '@/api/modules/refund'
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
      isShowRefund: false,
      registrationNo: '',
      loading: true,
    }
  },
  mixins: [toPayMpWeiXin],
  methods: {
    onSubmit: debounce(function () {
      this.toPay()
    }),
    /***
     *点击退款
     */
    onRefund: debounce(function () {
      let msg = '提交退款申请后，您挂的号将不在被锁定，是否确认退款'
      this.$tools.showModal('', msg).then((res) => {
        if (res) {
          this.toRefundApply()
        }
      })
    }),
    //点击取消挂号
    onCancel() {
      this.$tools.showModal('', '确定取消挂号?').then((res) => {
        if (res) {
          console.log(res)
          this.cancelReservation()
        }
      })
    },
    /**
     * 发起退款
     * 307006：已用号无法申请退款
       307007：逾期未看诊，请前往医院窗口咨询
     */
    async toRefundApply() {
      const data = await toRefundApply(this.registrationNo)
      console.log(data)
      if (data.code === 100000) {
        setTimeout(function () {
          uni.navigateTo({
            url: `/pages/refund/detail?applyNo=${data.data}&redirectFlag=true`,
          })
        }, 500)
      } else if (data.code === 307006) {
        uni.showToast({
          title: '已用号无法申请退款',
          duration: 3000,
        })
      } else if (data.code === 307007) {
        uni.showToast({
          title: '逾期未看诊，请前往医院窗口咨询',
          duration: 3000,
        })
      }
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
      this.isShowRefund = false
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
        if (this.info.registrationStatus == 50) {
          this.isShowRefund = true
        }
        console.log(this.payStatus)
      }
      this.loading = false
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
    setTimeout(() => {
      this.loading = false
    }, 3000)
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
