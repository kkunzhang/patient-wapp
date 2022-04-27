<template>
  <view>
    <!--顶部卡片 -->
    <card :isShow="false" :info="doctorInfo"></card>
    <!--添加就诊人 -->
    <view>
      <add-visiter></add-visiter>
      <!-- 已有就诊人，非第一次添加 -->
      <card-item @openPop="onOpen"> </card-item>
    </view>
    <reserve-card :info="doctorInfo"></reserve-card>
    <!-- 支付信息 -->
    <price-card :info="doctorInfo"></price-card>
    <!-- 支付方式 -->
    <cp-pay-type></cp-pay-type>
    <!-- 提交 -->
    <cp-button @onSubmit="onSubmit">确认挂号</cp-button>
    <!-- 弹窗 -->
    <card-pop :isShow="show" @closePop="onClose"></card-pop>
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
export default {
  components: {
    card,
    cardPop,
    cardItem,
    addVisiter,
    priceCard,
    reserveCard,
  },
  data() {
    return {
      show: false,
      lever: false,
      doctorInfo: '',
      orderList: {
        registrationId: 1,
        registrationNo: '0000000001',
        userId: null,
        patientId: '005155',
        registrationStatus: null,
        registerData: 1651161600000,
        deptCode: 194,
        deptName: '专家门诊三',
        deptAddress: '专家门诊三',
        registerType: '免挂号费',
        doctorId: '100306',
        doctorScheduleId: '20220421055900',
        doctorTitle: null,
        doctorName: '杨有川',
        hisRegisterId: '20220421312604',
        examinationFee: 0,
        registerFee: 0,
        totalFee: null,
        discountFee: null,
        paidFee: null,
        paidTime: null,
        paymentMethod: null,
        createTime: 1644221332548,
        updateTime: 1644221332548,
      },
    }
  },
  onLoad(options) {
    let data = JSON.parse(decodeURIComponent(options.data))
    this.doctorInfo = data
  },
  methods: {
    onSubmit: debounce(function () {
      this.order()
      uni.navigateTo({
        url: '/pages/registrationInfo/index',
      })
    }),
    async order() {
      let params = {
        //todo 更换
        doctorScheduleId: '20220421055900',
        // doctorScheduleId: this.doctorInfo.doctorScheduleId,
        //todo 更换
        patientId: '005155',
        //todo 更换
        deptId: '0000000194',
        // deptId: this.doctorInfo.deptId,
        doctorId: this.doctorInfo.doctorId,
        registerData: this.doctorInfo.registerDate,
      }
      //todo dakai  锁号。返回锁号信息
      // reservationLock(JSON.stringify(params)).then((data) => {
      //   if (data.data.length > 0) {
      //     this.orderList = data.data
      //   }
      // })
    },
    onOpen(val) {
      this.show = true
    },
    onClose(val) {
      this.show = false
    },
  },
}
</script>
<style lang="scss">
</style>
