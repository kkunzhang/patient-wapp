<template>
  <view>
    <!-- <pay-card :list="info" :isFull="true"></pay-card> -->

    <card-item :isShowButton="false"> </card-item>

    <card :isShow="false"></card>
    <!-- 处方信息 -->
    <reserve-card> </reserve-card>
    <!-- 支付信息 -->
    <price-card :info="doctorInfo"></price-card>
    <!-- 支付方式 -->
    <cp-pay-type></cp-pay-type>
    <view class="submit-box">
      <button type="primary" @click="onSubmit()">确定</button>
    </view>
  </view>
</template>
<script>
import payCard from '@/components/pay-card/pay-card-status.vue'
import cardItem from '@/components/card-item/card-item.vue'
import card from '@/components/doctor/card.vue'
import priceCard from '@/components/pay-card/price-card.vue'
import reserveCard from './components/reserve-card.vue'
export default {
  components: { card, payCard, cardItem, priceCard, reserveCard },
  data() {
    return {
      radio: '1',
      show: false,
      lever: true,
      info: [{ id: 1 }],
      doctorInfo: '',
    }
  },
  methods: {
    onSubmit() {
      console.log('跳转去支付')
      uni.navigateTo({
        url: '/pages/registrationInfo/index',
      })
    },
    onClick() {
      console.log('2222')
      uni.navigateTo({
        url: '/pages/addVisit/index',
      })
    },
  },
}
</script>
<style lang="scss">
.submit-box {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>
