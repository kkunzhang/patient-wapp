<template>
  <view>
    <payCard :list="info"></payCard>
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
    onClick(e) {
      this.setData({
        timeData: e.detail,
      })
    },
  },
}
</script>
<style lang="scss">
</style>
