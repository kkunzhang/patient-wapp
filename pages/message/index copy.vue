<template>
  <view>
    <view>
      <view class="holder">
        <image mode="aspectFit" src="/static/images/empty.png"></image>
        <p class="tips">敬请期待</p>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
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
  methods: {},
}
</script>
<style lang="scss" scoped>
.holder {
  display: flex;
  align-items: center;
  flex-direction: column;
  .tips {
    color: #ccc;
    font-size: 22px;
    padding-top: 30px;
  }
}
</style>
