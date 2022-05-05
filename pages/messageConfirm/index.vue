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
import { getPatientList } from '@/api/modules/user'
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
      patientId: '',
      loading: true,
      patientList: [
        {
          age: 12,
          isDefault: true,
          name: 'zhangfei',
          patientId: 1234,
          phone: 17610229358,
          sex: '男',
          birthday: '1993-12-01',
        },
        {
          age: 12,
          isDefault: false,
          name: 'wangpeng',
          patientId: 2,
          phone: 112312312312,
          sex: 1,
        },
      ],
      defaultPatientList: [],
      orderList: {
        registrationId: '212',
        registrationNo: '0000000001',
        userId: null,
        patientId: '2',
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
    this.getDoctorInfo(options)
    this.getTenantPatientList()
  },
  methods: {
    onSubmit: debounce(function () {
      this.order()
      uni.navigateTo({
        url: `/pages/registrationInfo/index?patientId=${this.orderList.patientId}&registrationId=${this.orderList.registrationId}`,
      })
    }),
    //获取医生预约等详细信息
    getDoctorInfo(options) {
      let data = JSON.parse(decodeURIComponent(options.data))
      console.log(data)
      this.doctorInfo = data
    },
    //获取就诊人列表
    async getTenantPatientList() {
      const params = {}
      const data = await getPatientList(params)
      if (data.data.records) {
        //todo 打开
        // this.patientList = data.data.records
        this.checkDefaultPatient(data.data.records)
      }
      console.log(data)
    },
    //判断默认就诊人
    checkDefaultPatient(data) {
      this.patientId = ''
      data.forEach((element) => {
        if (element.isDefault) {
          this.patientId = element.patientId
          this.defaultPatientList = element
          return
        }
      })
      if (!this.patientId) {
        this.patientId = data[0].patientId
        this.defaultPatientList = data[0]
      }
      this.loading = false
    },
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
      //todo 打开。返回订单信息
      // reservationLock(JSON.stringify(params)).then((data) => {
      //   if (data.data.length > 0) {
      //     this.orderList = data.data
      //   }
      // })
    },
    onOpen() {
      this.show = true
    },
    onClose() {
      this.show = false
    },
    submitPatientId(val) {
      console.log(val)
      if (val) {
        this.defaultPatientList = val
      }
      this.show = false
      this.$tools.toast('操作成功', 'suc')
    },
  },
}
</script>
<style lang="scss">
</style>
