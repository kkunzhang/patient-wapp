<template>
  <view>
    <pay-card :list="info" @onClick="toDetail"></pay-card>
  </view>
</template>

<script>
import payCard from '@/components/pay-card/pay-card.vue'
export default {
  components: { payCard },
  data() {
    return {
      info: [{ id: 1 }, { id: 2 }],
    }
  },
  methods: {
    toDetail(val) {
      uni.navigateTo({
        url: '/pages/onlinepayment/detail',
      })
    },
  },
}
</script>
<style lang="scss">
</style>
