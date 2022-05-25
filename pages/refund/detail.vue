<template>
  <view class="page">
    <view>
      <u-skeleton rows="10" :loading="loading" :animate="true" :title="false">
        <refund-status :item="info" :isFull="true"></refund-status>
        <!-- 退款信息 -->
        <refund-card-detail :info="info"></refund-card-detail>
        <!-- 挂号信息 -->
        <registration-card
          v-if="info.orderType == 'registration'"
          :info="info.registration"
        ></registration-card>
        <!-- 处方信息 -->
        <reserve-card
          v-if="info.orderType == 'prescription'"
          :info="info.prescription"
        ></reserve-card>
        <!-- 订单信息 -->
        <order-card :info="info"></order-card>s
      </u-skeleton>
    </view>
  </view>
</template>

<script>
import refundStatus from './components/refund-status.vue'
import refundCardDetail from './components/refund-card-detail.vue'
import registrationCard from './components/registration-card.vue'
import reserveCard from './components/reserve-card.vue'
import orderCard from './components/order-card.vue'
import { refundsDetail } from '@/api/modules/refund'
export default {
  data() {
    return {
      info: {},
      payStatus: {
        endTime: '',
        status: '',
      },
      applyNo: '',
      redirectFlag: false,
      loading: true,
    }
  },
  methods: {
    async getRefundsDetail(applyNo) {
      this.isShow = false
      const data = await refundsDetail(applyNo)
      console.log(data.data)
      if (data.data) {
        this.info = data.data
      }
      this.loading = false
    },
  },
  onLoad(options) {
    console.log(options)
    this.applyNo = options.applyNo
    this.redirectFlag = options.redirectFlag
    this.getRefundsDetail(options.applyNo)
    setTimeout(() => {
      this.loading = false
    }, 3000)
  },
  onUnload() {
    //从挂号进来的详情跳到列表
    if (this.redirectFlag) {
      //#ifdef MP-WEIXIN
      wx.redirectTo({
        url: '/pages/refund/index',
      })
      //#endif
    }
  },
  components: {
    registrationCard,
    orderCard,
    refundStatus,
    reserveCard,
    refundCardDetail,
  },
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
