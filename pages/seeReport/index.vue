<template>
  <view class="container">
    <view class="title">报告查询</view>
    <add-visiter :isAdd="false" @isShowItemList="isShowItemList"
      >选择就诊人</add-visiter
    >
    <view class="button">
      <button type="primary" @click="onClcik()">查询</button>
    </view>
    <card-pop :isShow="show" @closePop="closePop"></card-pop>
  </view>
</template>

<script>
import addVisiter from '@/components/add-visiter/add-visiter.vue'
import cardPop from '@/components/card-pop/card-pop.vue'
export default {
  components: { addVisiter, cardPop },
  data() {
    return {
      info: [{ id: 1 }, { id: 2 }],
      show: false,
    }
  },
  methods: {
    isShowItemList(val) {
      if (val) {
        this.show = true
      }
    },
    closePop(val) {
      this.show = false
    },
    onClcik() {
      uni.navigateTo({
        url: '/pages/seeReport/list',
      })
    },
  },
}
</script>
<style lang="scss">
.container {
  .title {
    display: flex;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
    font-weight: 700;
    font-style: normal;
    padding: 200rpx 20rpx 60rpx;
    font-size: 70rpx;
  }
  .button {
    margin: 22rpx;
    padding-top: 40rpx;
  }
}
</style>
