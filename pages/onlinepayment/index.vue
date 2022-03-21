<template>
  <view style="width: 100%; overflow-x: hidden">
    <van-nav-bar
      title="在线缴费"
      custom-class="nav-bar"
      title-class="nav-bar-title"
      :border="false"
      fixed
      placeholder
      left-arrow
      @click-left="back"
    />
    <view class="centent">
      <view class="centent-title">
        <text class="title_time">2021年2月17日</text>
        <view class="payment">
          <text>待支付</text>
          <van-count-down use-slot :time="time" @change="onChange">
            <text class="item">{{ timeData.minutes }}</text>
            <text class="item">:</text>
            <text class="item">{{ timeData.seconds }}</text>
          </van-count-down>
        </view>
      </view>
      <view>
        <text class="titname">患者主诉</text>
        <text>流鼻涕，发热，全身酸痛</text>
      </view>
      <view>
        <text class="titname">就诊患者</text>
        <text>赵云</text>
      </view>
      <view>
        <text class="titname">会诊医生</text>
        <text>流鼻涕，发热，全身酸痛</text>
      </view>
      <view>
        <text class="titname">患者主诉</text>
        <text>张伟军</text>
        <text>李小凡</text>
        <text>李佳轩</text>
        <text>王小年</text>
        <text>23徐启明</text>
      </view>
      <view>
        <text class="titname">应付金额</text>
        <text class="price">￥30.00</text>
      </view>
      <view class="footer">
        <view class="titname">远程会诊</view>
        <button @tap="gotoinfo">去支付</button>
      </view>
    </view>
  </view>
</template>

<script>
import vanNavBar from '@vant/weapp/nav-bar/index'
import vanImage from '@vant/weapp/image/index'
import vanIcon from '@vant/weapp/icon/index'
import vanButton from '@vant/weapp/button/index'
import vanCard from '@vant/weapp/card/index'
import vanCountDown from '@vant/weapp/count-down/index'
// pages/user/index.js
export default {
  components: {
    vanNavBar,
    vanImage,
    vanIcon,
    vanButton,
    vanCard,
    vanCountDown,
  },
  data() {
    return {
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

    onChange(e) {
      this.setData({
        timeData: e.detail,
      })
    },
  },
}
</script>
<style>
@import './index.css';
</style>
