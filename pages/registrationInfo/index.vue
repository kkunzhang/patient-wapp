<template>
  <view class="page">
    <view>
      <uni-card class="my-uni-card">
        <view class="card-item-add" @click="onClick()">
          <view><text> 挂号成功</text></view>
          <view>请按时就诊，号源当日有效，过期作废</view>
        </view>
      </uni-card>
      <uni-card class="my-uni-card">
        <view class="item-bottom">
          <view>
            <text>订单名称</text>
            <text>远程会诊-视频问诊</text>
          </view>
          <view>
            <text>就诊患者</text>
            <text>赵云</text>
          </view>
          <view>
            <text>参会医生</text>
            <text>张围军</text>
            <text>李小凡</text>
          </view>
        </view>
      </uni-card>
    </view>
  </view>
</template>

<script>
// pages/message/index.js
export default {
  data() {
    return {}
  },
  components: {},

  methods: {
    /**
     * 页面的初始数据
     */
    onlineinfo() {
      // wx.navigateTo({
      //   url: '/pages/onlinepayment/index',
      //   })
      console.log('跳转消息详情')
    },
  },
}
</script>
<style lang="scss">
.card-item-add {
  text {
    font-size: 38rpx;
    font-weight: 500;
  }
}
.item-bottom view {
  margin-top: 30rpx;
  color: rgba(96, 102, 114, 1);
}
.item-bottom view text {
  margin-right: 20rpx;
}
</style>
