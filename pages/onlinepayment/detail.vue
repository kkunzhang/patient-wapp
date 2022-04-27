<template>
  <view>
    <!-- <pay-card :list="info" :isFull="true"></pay-card> -->
    <card-item :isShowButton="false"> </card-item>
    <!-- 处方信息 -->
    <reserve-card :info="info"> </reserve-card>
    <!-- 处方明细 -->
    <recipe :info="drugDetailDto"> </recipe>
    <!-- 支付信息 -->
    <price-card :info="info"></price-card>
    <!-- 支付方式 -->
    <cp-pay-type></cp-pay-type>
    <cp-button @onSubmit="onSubmit">确认缴费</cp-button>
  </view>
</template>
<script>
import payCard from '@/components/pay-card/pay-card-status.vue'
import cardItem from '@/components/card-item/card-item.vue'
import priceCard from '@/components/pay-card/price-card.vue'
import reserveCard from './components/reserve-card.vue'
import recipe from './components/recipe.vue'
import { getPayDetail } from '@/api/modules/onlinePay'
export default {
  components: { payCard, cardItem, priceCard, reserveCard, recipe },
  data() {
    return {
      radio: '1',
      show: false,
      lever: true,
      info: {},
      data: {
        prescriptionId: '',
        patientId: '',
      },
      drugDetailDto: {},
    }
  },
  methods: {
    onSubmit() {
      console.log('跳转去支付')
      uni.navigateTo({
        url:
          `/pages/onlinepayment/subMessage?data=` +
          encodeURIComponent(JSON.stringify(this.info)),
      })
    },
    //获取在线缴费列表
    async getPayDetail(prescriptionId, patientId) {
      const params = {
        prescriptionId: prescriptionId,
        patientId: patientId,
      }
      const data = await getPayDetail(params)
      if (data.code == 10000) {
        this.info = { ...data.data, ...params }
        this.drugDetailDto = this.info.drugDetailDto[0]
      }
    },
    onLoad(options) {
      this.getPayDetail(options.prescriptionId, options.patientId)
    },
  },
}
</script>

