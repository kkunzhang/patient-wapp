<template>
  <view class="page">
    <view>
      <uni-card
        v-for="(item, index) in info"
        :key="index"
        :title="item.title"
        :sub-title="item.subTitle"
        :extra="item.extra"
        :thumbnail="item.url"
      >
        <text>就诊人:{{ item.patient }}</text>
      </uni-card>
    </view>
  </view>
</template>

<script>
// pages/message/index.js
export default {
  data() {
    return {
      info: [
        {
          url: '/static/images/service-notification.png',
          title: '内容 A',
          subTitle: '明天到医院,我看看你的情况',
          extra: '昨天',
          patient: '李逵',
        },
        {
          url: '/static/images/service-notification.png',
          title: '内容 B',
          subTitle: '明天到医院,我看看你的情况',
          extra: '昨天',
          patient: '李逵',
        },
        {
          url: '/static/images/service-notification.png',
          title: '内容 C',
          subTitle: '明天到医院,我看看你的情况',
          extra: '昨天',
          patient: '李逵',
        },
      ],
    }
  },
  components: {},
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
<style>
</style>
