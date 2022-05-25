<template>
  <view>
    <u-skeleton rows="10" :loading="loading" :animate="true" :title="false">
      <!-- 操作信息 -->
      <pay-card-prescription
        :item="payStatus"
        :isFull="true"
      ></pay-card-prescription>
      <!-- 个人信息 -->
      <card-item :isShowButton="false" :list="infoUser"> </card-item>
      <!-- 处方信息 -->
      <reserve-card :info="info"> </reserve-card>
      <!-- 处方明细 -->
      <recipe :info="drugDetailDto" :totalFee="info.totalFee"> </recipe>
      <!-- 支付信息 -->
      <price-card :info="info"></price-card>
      <!-- 支付方式 -->
      <cp-pay-type></cp-pay-type>
    </u-skeleton>
  </view>
</template>
<script>
import payCardPrescription from '@/components/pay-card/pay-card-prescription.vue'
import cardItem from '@/components/card-item/card-item.vue'
import priceCard from '@/components/pay-card/price-card.vue'
import reserveCard from './components/reserve-card.vue'
import recipe from './components/recipe.vue'
import { prescriptionDetail } from '@/api/modules/onlinePay'
export default {
  components: { payCardPrescription, cardItem, priceCard, reserveCard, recipe },
  data() {
    return {
      radio: '1',
      show: false,
      lever: true,
      payInfo: { status: '' },
      doctorInfo: {},
      reserveInfo: {},
      drugDetailDto: {},
      payStatus: {
        endTime: '',
        status: '',
      },
      prescriptionNo: '',
      infoUser: '',
      info: '',
      loading: true,
    }
  },
  methods: {
    //获取详细信息
    async prescriptionDetail() {
      const params = {
        prescriptionNo: this.prescriptionNo,
      }
      const data = await prescriptionDetail(params)
      if (data.code == 100000) {
        this.info = { ...data.data, ...params }
        this.payStatus.status = this.info.prescriptionStatus
        this.drugDetailDto = this.info.drugDetailDto
        this.infoUser = this.info.patientInfo
      }
      this.loading = false
    },
  },
  onLoad(options) {
    this.prescriptionNo = options.prescriptionNo
    this.prescriptionDetail()
    setTimeout(() => {
      this.loading = false
    }, 3000)
  },
}
</script>

