<template>
  <view>
    <payCard :list="info" @onClick="toDetail"></payCard>
  </view>
</template>

<script>
import payCard from '@/components/payCard/payCard.vue'
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
