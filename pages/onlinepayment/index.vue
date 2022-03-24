<template>
  <view>
    <view v-for="(item, index) in info1" :key="index">
      <uni-card class="my-uni-card">
        <view class="card-item-add" @click="onClick()">
          <view style="font-size: large">2022年01月14日</view>
          <view class="right-tips">待支付 09:12</view>
        </view>
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
        <view class="card-num">
          <view>远程门诊 </view>
          <view>
            <button
              class="mini-btn"
              @click="onClick()"
              type="primary"
              size="mini"
            >
              去支付
            </button>
          </view>
        </view>
      </uni-card>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      info1: [{ id: 1 }, { id: 2 }],
      time: 30 * 60 * 60 * 1000,
      timeData: {
        minutes: '',
        seconds: '',
      },
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    uni.startPullDownRefresh()
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {
    /**
     * 页面的初始数据
     */
    back() {
      uni.switchTab({
        url: '/pages/home/index',
      })
    },

    gotoinfo() {
      uni.navigateTo({
        url: '/pages/orderlist/index',
      })
    },

    onClick(e) {
      this.setData({
        timeData: e.detail,
      })
    },
  },
}
</script>
<style lang="scss">
.card-item-add {
  display: flex;
  justify-content: space-between;
  .right-tips {
    height: 50rpx;
    font-size: 36rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    color: #f68834;
  }
}
.item-bottom view {
  margin-top: 30rpx;
  color: rgba(96, 102, 114, 1);
}
.item-bottom view text {
  margin-right: 20rpx;
}
.card-num {
  display: flex;
  justify-content: space-between;
  margin-top: 45rpx;
  text {
    margin: 4rpx;
  }
  .mini-btn {
    border-radius: 30rpx !important;
  }
}
</style>
