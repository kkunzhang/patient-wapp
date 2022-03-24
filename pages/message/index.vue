<template>
  <view class="page">
    <!-- <view>
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
    </view> -->
    <sl-filter
      :ref="'slFilter'"
      :topFixed="true"
      :isTransNav="true"
      :navHeight="0"
      :color="titleColor"
      :themeColor="themeColor"
      :menuList="menuList"
      @result="result"
    ></sl-filter>

    <button
      type="primary"
      @click="changeMenuListDetailList()"
      style="margin-top: 10px; width: 90%"
    >
      动态修改menuList的detailList
    </button>
  </view>
</template>

<script>
// pages/message/index.js
import slFilter from '@/components/sl-filter/sl-filter.vue'

export default {
  data() {
    return {
      menuList: [
        {
          title: '菜单1',
          detailTitle: '子标题1',
          isMutiple: true,
          key: 'key_1',
          detailList: [
            {
              title: '不限',
              value: '',
            },
            {
              title: '条件_1_1',
              value: 'val_1_1',
            },
            {
              title: '条件1_2',
              value: 'val_1_2',
            },
          ],
        },
        {
          title: '菜单2',
          detailTitle: '子标题2',
          key: 'key_2',
          isMutiple: false,
          detailList: [
            {
              title: '不限',
              value: '',
            },
            {
              title: '条件_2_1',
              value: 'val_2_1',
            },
            {
              title: '条件_2_2',
              value: 'val_2_2',
            },
          ],
        },
        {
          title: '菜单3',
          detailTitle: '子标题3',
          key: 'key_3',
          isSort: true,
          isMutiple: false,
          detailList: [
            {
              title: '条件_3_1',
              value: 'val_3_1',
            },
            {
              title: '条件_3_2',
              value: 'val_3_2',
            },
            {
              title: '条件_3_3',
              value: 'val_3_3',
            },
          ],
        },
      ],
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
  components: {
    slFilter,
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
    /**
     * 页面的初始数据
     */
    onlineinfo() {
      // wx.navigateTo({
      //   url: '/pages/onlinepayment/index',
      //   })
      console.log('跳转消息详情')
    },
    changeMenuListDetailList() {
      let tempDetailList = [
        {
          title: '不限',
          value: '',
        },
        {
          title: 'new_1',
          value: 'new_1',
        },
        {
          title: 'new_2',
          value: 'new_2',
        },
        {
          title: 'new_3',
          value: 'new_3',
        },
      ]
      this.menuList[0].detailList = tempDetailList
      this.$refs.slFilter.resetMenuList(this.menuList)
    },
  },
}
</script>
<style>
</style>
