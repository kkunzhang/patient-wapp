<template>
  <view>
    <card-item :list="info.patientInfo" :isShowButton="false"> </card-item>
    <!-- 处方信息 -->
    <reserve-card :info="info"> </reserve-card>
    <!-- 处方明细 -->
    <recipe :info="drugDetailDto" :totalFee="info.totalFee"> </recipe>
    <!-- 支付信息 -->
    <price-card :info="info"></price-card>
    <!-- 支付方式 -->
    <cp-pay-type></cp-pay-type>
    <cp-button @onSubmit="onSubmit">确认缴费</cp-button>
  </view>
</template>
<script>
import cardItem from '@/components/card-item/card-item.vue'
import priceCard from '@/components/pay-card/price-card.vue'
import reserveCard from './components/reserve-card.vue'
import recipe from './components/recipe.vue'
import { getPayDetail, savePrescription } from '@/api/modules/onlinePay'
import { debounce } from '@utils/utils'
import { toPayMpWeiXin } from '@/utils/pay.js'
export default {
  components: { cardItem, priceCard, reserveCard, recipe },
  mixins: [toPayMpWeiXin],
  data() {
    return {
      radio: '1',
      show: false,
      lever: true,
      info: {},
      drugDetailDto: [],
      prescriptionId: '',
      patientId: '',
      hospitalPatientId: '',
      orderNum: '',
    }
  },
  methods: {
    onSubmit: debounce(function () {
      console.log('跳转去支付')
      //生成订单
      this.savePrescription()
    }),
    //保存信息,获取订单
    /**
     *此patientId，就是hisId，韩颖处理过了
     */
    async savePrescription() {
      const params = {
        patientId: this.patientId,
        prescriptionId: this.prescriptionId,
      }
      const data = await savePrescription(params)
      if (data.code == 100000) {
        this.orderNum = data.data
        this.toPay()
      } else {
        uni.showToast({
          title: '生成缴费单失败',
          duration: 3000,
        })
      }
    },
    //支付
    async toPay() {
      const payResult = await this.getPayInfo(this.orderNum)
      if (payResult) {
        this.toSubMessage()
      }
    },
    toSubMessage() {
      uni.navigateTo({
        url: `/pages/onlinepayment/subMessage?prescriptionNo=${this.orderNum}`,
      })
    },
    //获取在线缴费列表
    async getPayDetail(prescriptionId, patientId) {
      const params = {
        prescriptionId: prescriptionId,
        patientId: patientId,
      }
      const data = await getPayDetail(params)
      if (data.code == 100000) {
        this.info = { ...data.data, ...params }
        this.drugDetailDto = this.info.drugDetailDto
        console.log(this.info)
      }
    },
  },
  onLoad(options) {
    this.prescriptionId = options.prescriptionId
    this.patientId = options.patientId
    console.log(options)
    this.getPayDetail(options.prescriptionId, options.patientId)
  },
}
</script>

