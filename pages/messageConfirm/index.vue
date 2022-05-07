<template>
  <view>
    <!--顶部卡片 -->
    <card :isShow="false" :info="doctorInfo"></card>
    <!--添加就诊人 -->
    <view>
      <u-skeleton rows="2" :loading="loading" :animate="true" :title="false">
        <add-visiter v-if="!patientId"></add-visiter>
        <!-- 已有就诊人，非第一次添加 -->
        <card-item v-else @openPop="onOpen" :list="defaultPatientList">
        </card-item>
      </u-skeleton>
    </view>
    <reserve-card :info="doctorInfo"></reserve-card>
    <!-- 支付信息 -->
    <price-card :info="doctorInfo"></price-card>
    <!-- 支付方式 -->
    <cp-pay-type></cp-pay-type>
    <!-- 提交 -->
    <cp-button @onSubmit="onSubmit">确认挂号</cp-button>
    <!-- 弹窗 -->
    <card-pop
      :isShow="show"
      @closePop="onClose"
      @submitPatientId="submitPatientId"
      :items="patientList"
    ></card-pop>
  </view>
</template>
<script>
import card from '@/components/doctor/card.vue'
import cardPop from '@/components/card-pop/card-pop.vue'
import cardItem from '@/components/card-item/card-item.vue'
import addVisiter from '@/components/add-visiter/add-visiter.vue'
import priceCard from '@/components/pay-card/price-card.vue'
import reserveCard from './components/reserve-card.vue'
import { reservationLock } from '@/api/modules/registration'
import { debounce } from '@utils/utils'
import { getTenantPatientList } from '@/utils/mixin.js'
export default {
  components: {
    card,
    cardPop,
    cardItem,
    addVisiter,
    priceCard,
    reserveCard,
  },
  mixins: [getTenantPatientList],
  data() {
    return {
      show: false,
      lever: false,
      doctorInfo: '',
      orderList: {},
      //科室编码
      deptId: '',
    }
  },
  onLoad(options) {
    this.getDoctorInfo(options)
  },
  methods: {
    //获取医生预约等详细信息
    getDoctorInfo(options) {
      let data = JSON.parse(decodeURIComponent(options.data))
      this.deptId = options.deptId
      console.log(data)
      this.doctorInfo = data
    },
    onSubmit: debounce(function () {
      this.order()
    }),
    async order() {
      let params = {
        doctorScheduleId: this.doctorInfo.doctorScheduleId,
        patientId: this.defaultPatientList.hospitalPatientId,
        deptId: this.deptId,
        doctorId: this.doctorInfo.doctorId,
        registerData: this.doctorInfo.registerDate,
      }
      console.log(params)
      const data = await reservationLock(JSON.stringify(params))
      console.log(data)
      if (data.data.length > 0) {
        this.orderList = data.data
        uni.navigateTo({
          url: `/pages/registrationInfo/index?patientId=${this.defaultPatientList.hospitalPatientId}&registrationId=${this.orderList.registrationId}`,
        })
      }
    },
    onOpen() {
      this.show = true
    },
    onClose() {
      this.show = false
    },
    submitPatientId(val) {
      if (val) {
        this.defaultPatientList = val
      }
      console.log(val)
      this.show = false
      this.$tools.toast('操作成功', 'suc')
    },
  },
}
</script>
<style lang="scss">
</style>
