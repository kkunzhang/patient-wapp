<template>
  <view>
    <!--顶部卡片 -->
    <card :isShow="false"></card>
    <!--添加就诊人 -->
    <uni-card class="my-uni-card">
      <view class="card-item-add" @click="onClick()">
        <view><uni-icons type="plus-filled" size="40"></uni-icons></view>
        <text>添加就诊人</text>
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
    <uni-card class="my-uni-card">
      <view style="font-size: large">支付信息</view>
      <view class="payment-item">
        <view>
          <text>订单总额</text>
          <text>￥30.00</text>
        </view>
      </view>
      <view class="payment-item">
        <view>
          <text>医保报销</text>
          <text v-if="lever == true">-￥5.00</text>
          <text v-if="lever === false">就诊人未绑定医保卡</text>
        </view>
      </view>
      <view class="payment-item">
        <view>
          <text>优惠券</text>
          <text>未使用</text>
          <text class="coupon">无可用券</text>
        </view>
      </view>

      <view class="payment-footer">
        <view>
          应付
          <text class="price">￥25.00</text>
        </view>
      </view>
    </uni-card>

    <uni-card class="my-uni-card">
      <view>支付方式</view>
      <view class="weicat">
        <view class="weicat-item">
          <image src="/static/images/weixinzhifu.png"></image>
          <text>微信支付</text>
        </view>
      </view>
    </uni-card>
    <view class="submit-box">
      <button type="primary" @click="onSubmit()">确认挂号</button>
    </view>
  </view>
</template>
<script>
import card from '@/components/doctor/card.vue'
export default {
  components: { card },
  data() {
    return {
      radio: '1',
      show: false,
      lever: true,
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
  onPullDownRefresh: function () {},
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
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
    onChange(event) {
      console.log(event)
      this.setData({
        radio: event.detail,
      })
    },
    showFun() {
      this.setData({
        show: true,
      })
      console.log(11)
    },

    onClose() {
      this.setData({
        show: false,
      })
    },
  },
}
</script>
<style lang="scss">
.card-item-add {
  display: flex;
  height: 80rpx;
  line-height: 80rpx;
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
.payment-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  margin-top: 35rpx;
  .coupon {
    margin-left: 10rpx;
    color: rgba(145, 149, 158, 0.79);
    border-radius: 16rpx;
    border: 1rpx solid rgba(145, 149, 158, 1);
    font-size: 22rpx;
    padding: 5rpx 10rpx;
    line-height: auto;
  }
}
.payment-item > view > text {
  margin-right: 20rpx;
}
.payment-footer {
  box-sizing: border-box;
  padding-top: 20rpx;
  text-align: right;
  border-top: 1px solid rgba(245, 246, 248, 1);
  margin-top: 30rpx;
  .price {
    color: rgba(255, 95, 86, 1);
    font-size: 35rpx;
  }
}

.weicat {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20rpx;
}
.weicat image {
  width: 50rpx;
  height: 50rpx;
  margin-right: 15rpx;
}
.weicat-item {
  display: flex;
  align-items: center;
}
.submit-box {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>
