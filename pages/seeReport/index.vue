<template>
  <view class="page">
    <card-item @openPop="openPop"> </card-item>
    <!--选项卡-->
    <uni-card class="my-uni-card">
      <uni-segmented-control
        :current="current"
        :values="items"
        @clickItem="onClickItem"
        styleType="button"
      ></uni-segmented-control>

      <view v-show="current === 0">
        <view v-for="(item, index) in info1" :key="index" class="box-content">
          <view>
            <button class="mini-btn" type="primary" size="mini">已生成</button>
          </view>
          <view class="box-content-title">
            <view> 颅脑CT扫描 </view>
            <view>2022-01-02 11:44 </view>
          </view>
        </view>
      </view>
      <view v-show="current === 1">
        <view v-for="(item, index) in info1" :key="index" class="box-content">
          <view>
            <button class="mini-btn" type="primary" size="mini">已生成</button>
          </view>
          <view class="box-content-title">
            <view> 颅脑CT扫描2 </view>
            <view>2021-01-02 11:44 </view>
          </view>
        </view>
      </view>
    </uni-card>
    <card-pop :isShow="show" @closePop="closePop"></card-pop>
  </view>
</template>

<script>
import cardItem from './cardItem.vue'
import cardPop from './cardPop.vue'
export default {
  data() {
    return {
      items: ['检查报告', '检验报告'],
      current: 0,
      info1: [{ id: 1 }, { id: 2 }],
      show: false,
    }
  },
  components: { cardPop, cardItem },
  methods: {
    onClickItem(e) {
      if (this.current != e.currentIndex) {
        this.current = e.currentIndex
      }
    },
    onlineinfo() {
      // wx.navigateTo({
      //   url: '/pages/onlinepayment/index',
      //   })
      console.log('跳转消息详情')
    },
    openPop(val) {
      this.show = true
    },
    closePop(val) {
      this.show = false
    },
  },
}
</script>
<style lang="scss">
.box-content {
  display: flex;
  padding: 40rpx;
  box-sizing: border-box;
  border-radius: 20rpx;
  background-color: #fff;
  margin: 20rpx 0;
  flex-direction: row;
  background-color: rgba(242, 242, 242, 1);
  align-items: center;
  .box-content-title {
    margin-left: 20rpx;
    color: #333333;
    font-size: 35rpx;
    font-family: PingFangSC-Medium, PingFang SC;
  }
}
</style>
