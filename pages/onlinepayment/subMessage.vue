<template>
  <view>
    <!-- 操作信息 -->
    <pay-card :list="payInfo" :isFull="true"></pay-card>
    <!-- 个人信息 -->
    <card-item :isShowButton="false"> </card-item>
    <!-- 处方信息 -->
    <reserve-card :info="reserveInfo"> </reserve-card>
    <!-- 处方明细 -->
    <recipe :info="drugDetailDto"> </recipe>
    <!-- 支付信息 -->
    <price-card :info="doctorInfo"></price-card>
    <!-- 支付方式 -->
    <cp-pay-type></cp-pay-type>
    <!-- <cp-button @onSubmit="onSubmit">确认缴费</cp-button> -->
  </view>
</template>
<script>
import payCard from '@/components/pay-card/pay-card-status.vue'
import cardItem from '@/components/card-item/card-item.vue'
import priceCard from '@/components/pay-card/price-card.vue'
import reserveCard from './components/reserve-card.vue'
import recipe from './components/recipe.vue'
export default {
  components: { payCard, cardItem, priceCard, reserveCard, recipe },
  data() {
    return {
      radio: '1',
      show: false,
      lever: true,
      payInfo: { status: 3 },
      doctorInfo: {},
      reserveInfo: {},
      drugDetailDto: {},
    }
  },
  methods: {
    onSubmit() {
      console.log('跳转去支付')
    },
  },
  onLoad(options) {
    this.reserveInfo = JSON.parse(decodeURIComponent(options.data))
    console.log(this.reserveInfo)
    this.drugDetailDto = this.reserveInfo.drugDetailDto
    console.log(this.drugDetailDto)
  },
}
</script>

