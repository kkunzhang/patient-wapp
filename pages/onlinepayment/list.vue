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
      // info: [],
      info: [
        {
          patientId: '005155',
          prescriptionTime: '2022/04/27 14:24:07',
          prescriptionId: '2022F013E3',
          deptName: '药库',
          materialDeptName: '西药房',
          type: '一般处方',
          totalFee: '4.90',
        },
        {
          patientId: '005155',
          prescriptionTime: '2022/04/27 14:24:34',
          prescriptionId: '2022F013E4',
          deptName: '药库',
          materialDeptName: '中药房',
          type: '草药处方',
          totalFee: '24.60',
        },
        {
          patientId: '005155',
          prescriptionTime: '2022/04/27 14:25:54',
          prescriptionId: '2022F013E5',
          deptName: '药库',
          materialDeptName: '西药房',
          type: '一般处方',
          totalFee: '48.30',
        },
        {
          patientId: '005155',
          prescriptionTime: '2022/04/27 14:27:07',
          prescriptionId: '2022F013E6',
          deptName: '药库',
          materialDeptName: '西药房',
          type: '一般处方',
          totalFee: '1.70',
        },
        {
          patientId: '005155',
          prescriptionTime: '2022/04/27 14:27:29',
          prescriptionId: '2022F013E7',
          deptName: '药库',
          materialDeptName: '西药房',
          type: '一般处方',
          totalFee: '7.40',
        },
      ],
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
    const _this = this
    let list = JSON.parse(decodeURIComponent(options.data))
    _this.data.patientId = list.patientId
    this.getList()
  },
}
</script>
<style lang="scss">
</style>
