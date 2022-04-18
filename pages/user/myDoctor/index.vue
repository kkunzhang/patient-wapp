<template>
  <view>
    <card-item @openPop="onOpen"> </card-item>
    <card :isShow="false"></card>
    <card-pop :isShow="show" :isShowAdd="false" @closePop="onClose"></card-pop>
  </view>
</template>
<script>
import card from '@/components/doctor/card.vue'
import cardPop from '@/components/card-pop/card-pop.vue'
import cardItem from '@/components/card-item/card-item.vue'
export default {
  components: { card, cardPop, cardItem },
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
    onClose(val) {
      this.show = false
    },
  },
}
</script>
<style lang="scss">
</style>
