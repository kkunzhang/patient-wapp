<template>
  <view>
    <!-- <pay-card :list="info" :isFull="true"></pay-card> -->
    <card-item :list="defaultPatientList" :isShowButton="false"> </card-item>
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
import { getPayDetail } from '@/api/modules/onlinePay'
import { getTenantPatientList } from '@/utils/mixin.js'
import { debounce } from '@utils/utils'
export default {
  components: { cardItem, priceCard, reserveCard, recipe },
  mixins: [getTenantPatientList],
  data() {
    return {
      radio: '1',
      show: false,
      lever: true,
      info: {},
      drugDetailDto: [],
    }
  },
  methods: {
    onSubmit: debounce(function () {
      console.log('跳转去支付')
      uni.navigateTo({
        url:
          `/pages/onlinepayment/subMessage?data=` +
          encodeURIComponent(JSON.stringify(this.info)),
      })
    }),
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
        console.log(this.info);

      }
    },
  },
  onLoad(options) {
    this.getPayDetail(options.prescriptionId, options.patientId)
  },
}
</script>

