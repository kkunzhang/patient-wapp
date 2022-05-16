<template>
  <view>
    <!--顶部卡片 -->
    <card :isShow="false" :info="doctorInfo"></card>
    <!--添加就诊人 -->
    <!-- <u-skeleton :loading="loading" :animate="false" :title="false"> -->
    <add-visiter v-if="!patientId"></add-visiter>
    <!-- 已有就诊人，非第一次添加 -->
    <card-item v-else @openPop="onOpen" :list="defaultPatientList"> </card-item>
    <!-- </u-skeleton> -->
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
      :patientId="defaultPatientList.patientId"
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
import { toPayMpWeiXin } from '@/utils/pay.js'
export default {
  components: {
    card,
    cardPop,
    cardItem,
    addVisiter,
    priceCard,
    reserveCard,
  },
  mixins: [getTenantPatientList, toPayMpWeiXin],
  data() {
    return {
      show: false,
      lever: false,
      doctorInfo: '',
      registrationNo: '',
      //科室编码
      deptId: '',
      addFlag: false,
    }
  },
  onLoad(options) {
    this.getDoctorInfo(options)
  },
  onShow() {
    this.addFlag = true
  },
  onHide() {
    this.addFlag = false
  },
  watch: {
    addFlag: {
      handler(newVal, oldVal) {
        if (newVal) {
          console.log('过来了')
          this.getTenantPatientList()
        }
      },
      // immediate: true,
    },
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
      if (!this.patientId) {
        uni.showToast({
          title: '请先添加就诊人',
          duration: 3000,
        })
      } else {
        this.order()
      }
    }),
    //下单
    async order() {
      let params = {
        doctorScheduleId: this.doctorInfo.doctorScheduleId,
        patientId: this.defaultPatientList.hospitalPatientId,
        deptId: this.deptId,
        doctorId: this.doctorInfo.doctorId,
        registerData: this.doctorInfo.registerDate,
      }
      const data = await reservationLock(JSON.stringify(params))

      if (data.code === 100000) {
        this.registrationNo = data.data
        this.toPay()
      } else if (data.code === 307003) {
        this.registrationNo = data.data
        console.log(this.registrationNo)
        this.$tools
          .showModal('', '您已预约当天的科室，是否去支付?', '取消', '支付')
          .then((res) => {
            if (res) {
              uni.navigateTo({
                url: `/pages/registrationInfo/index?registrationNo=${this.registrationNo}`,
              })
            }
          })
      }
    },
    //支付
    async toPay() {
      const payResult = await this.getPayInfo(this.registrationNo)
      console.log(payResult)
      if (payResult) {
        uni.navigateTo({
          url: `/pages/registrationInfo/index?registrationNo=${this.registrationNo}`,
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
