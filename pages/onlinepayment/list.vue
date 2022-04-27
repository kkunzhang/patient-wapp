<template>
  <view>
    <pay-card
      :list="info"
      @onClick="toDetail"
      :isShowPayTime="false"
    ></pay-card>
  </view>
</template>

<script>
import payCard from '@/components/pay-card/pay-card.vue'
import { getPayList } from '@/api/modules/onlinePay'
export default {
  components: { payCard },
  data() {
    return {
      data: {
        userId: 0,
        patientId: '005155',
      },
      info: [],
    }
  },
  methods: {
    toDetail(val) {
      uni.navigateTo({
        url:
          '/pages/onlinepayment/detail?prescriptionId=' +
          val.prescriptionId +
          '&patientId=' +
          val.patientId,
      })
    },
    //获取在线缴费列表
    async getList(site) {
      this.reservationList = []
      const params = {
        userId: this.data.userId,
        patientId: this.data.patientId,
      }
      const data = await getPayList(params)
      if (data.data.length > 0) {
        this.info = data.data
      }
    },
  },
  onLoad(options) {
    this.getList()
  },
}
</script>
<style lang="scss">
</style>
