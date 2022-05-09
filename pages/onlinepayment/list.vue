<template>
  <view>
    <pay-card :list="info" @onClick="toDetail" :isShowPayTime="false"></pay-card>
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
        patientId: '',
        hospitalPatientId: '',
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
          this.data.hospitalPatientId,
      })
    },
    //获取在线缴费列表
    async getList(site) {
      this.reservationList = []
      const params = {
        patientId: this.data.hospitalPatientId,
      }
      const data = await getPayList(params)
      if (data.data.length > 0) {
        this.info = data.data
      }
    },
  },
  onLoad(options) {
    const _this = this
    let list = JSON.parse(decodeURIComponent(options.data))
    _this.data.patientId = list.patientId
    _this.data.hospitalPatientId = list.hospitalPatientId
    this.getList()
  },
}
</script>
<style lang="scss">
</style>
