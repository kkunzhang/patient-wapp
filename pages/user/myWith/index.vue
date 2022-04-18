<template>
  <view>
    <card :isShow="false"></card>
  </view>
</template>
<script>
import card from '@/components/doctor/card.vue'
export default {
  components: { card },
  data() {
    return {
      show: false,
    }
  },
  onLoad: function (options) {},
  methods: {
    onOpen(val) {
      this.show = true
    },
  },
}
</script>
<style lang="scss">
</style>
