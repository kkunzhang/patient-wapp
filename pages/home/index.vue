<template>
  <view class="container">
    <!--搜索-->
    <cp-search @searchValue="searchValue"></cp-search>
    <!--轮播图-->
    <cp-swiper></cp-swiper>
    <!-- 导航区域 -->
    <view class="fast-enter">
      <view
        class="fast-enter-item"
        v-for="(item, index) in navs"
        :key="index"
        @click="onClick(item, index)"
      >
        <image class="bg-img" :src="item.path" />
        <text>{{ item.title }}</text>
      </view>
    </view>
    <!--线上服务-->
    <uni-card>
      <view class="card-title">线上服务</view>
      <view class="box-outside-warp">
        <view
          class="padding-sm"
          @click="onClick(item, index)"
          v-for="(item, index) in navs2"
          :key="index"
        >
          <view class="box-outside">
            <image class="bg-img" :src="item.path" />
            <view class="text-lg box-title">{{ item.title }}</view>
          </view>
        </view>
      </view>
    </uni-card>
    <!--预约服务-->
    <uni-card>
      <view class="card-title">预约服务</view>
      <view class="box-outside-warp">
        <view
          class="padding-sm"
          @click="onClick(item, index)"
          v-for="(item, index) in navs3"
          :key="index"
        >
          <view class="box-outside">
            <image class="bg-img" :src="item.path" />
            <view class="text-lg box-title">{{ item.title }}</view>
          </view>
        </view>
      </view>
    </uni-card>
    <!--健康学院-->
    <uni-card>
      <view class="card-title">健康学院</view>
      <view class="box-outside-warp">
        <view
          class="padding-sm"
          @click="onClick(item, index)"
          v-for="(item, index) in navs4"
          :key="index"
        >
          <view class="box-outside">
            <image class="bg-img" :src="item.path" />
            <view class="text-lg box-title">{{ item.title }}</view>
          </view>
        </view>
      </view>
    </uni-card>
  </view>
</template>
<script>
import { throttle } from '@utils/utils'
export default {
  data() {
    return {
      isShow: false,
      indexBackgroundImage: '/static/images/logo@2x.png',
      navs: [
        {
          icon: 'iconfont icon-ziyuan',
          title: '预约挂号',
          path: '/static/images/appintment.png',
        },
        {
          icon: 'iconfont icon-guanyuwomen',
          title: '在线缴费',
          path: '/static/images/payment.png',
        },
        {
          icon: 'iconfont icon-tupian',
          title: '报告查询',
          path: '/static/images/report.png',
        },
        {
          icon: 'iconfont icon-shipin',
          title: '云药房',
          path: '/static/images/drugstore.png',
        },
      ],
      navs2: [
        {
          icon: 'iconfont icon-ziyuan',
          title: '远程门诊',
          path: '/static/images/outpatient.png',
        },
        {
          icon: 'iconfont icon-guanyuwomen',
          title: '远程会诊',
          path: '/static/images/consultation.png',
        },
        {
          icon: 'iconfont icon-tupian',
          title: '全国医生',
          path: '/static/images/doctor.png',
        },
        {
          icon: 'iconfont icon-shipin',
          title: '复诊续方',
          path: '/static/images/followup.png',
        },
      ],
      navs3: [
        {
          icon: 'iconfont icon-ziyuan',
          title: '预约检查',
          path: '/static/images/inspect.png',
        },
        {
          icon: 'iconfont icon-guanyuwomen',
          title: '预约检验',
          path: '/static/images/examine.png',
        },
        {
          icon: 'iconfont icon-tupian',
          title: '预约体检',
          path: '/static/images/physical.png',
        },
        {
          icon: 'iconfont icon-shipin',
          title: '预约手术',
          path: '/static/images/operation.png',
        },
        {
          icon: 'iconfont icon-shipin',
          title: '预约住院',
          path: '/static/images/hospitalization.png',
        },
        {
          icon: 'iconfont icon-shipin',
          title: '预约转诊',
          path: '/static/images/referral.png',
        },
      ],
      navs4: [
        {
          icon: 'iconfont icon-ziyuan',
          title: '医学综合',
          path: '/static/images/synthetical.png',
        },
        {
          icon: 'iconfont icon-guanyuwomen',
          title: '医生空间',
          path: '/static/images/space.png',
        },
        {
          icon: 'iconfont icon-tupian',
          title: '医学常识',
          path: '/static/images/commonknowledge.png',
        },
        {
          icon: 'iconfont icon-shipin',
          title: '培训报名',
          path: '/static/images/trainning.png',
        },
      ],
    }
  },
  methods: {
    // 搜索
    searchValue(val) {
      this.keyword = val
      this.getList()
    },
    // 获取列表
    async getArriveOrderItem() {
      const params = {
        arrive_order_id: this.arrive_order_id,
      }
      const data = await this.$api.getArriveOrderItem(params)
      this.list = data.results
    },
    onClick: throttle(function (item) {
      switch (item.title) {
        case '预约挂号':
          this.onNavigateTo('/pages/registration/index')
          break
        case '在线缴费':
          this.onNavigateTo('/pages/onlinepayment/index')
          break
        case '报告查询':
          this.onNavigateTo('/pages/seeReport/index')
          break
        case '全国医生':
          this.onNavigateTo('/pages/doctorList/index')
          break
        case '远程会诊':
          this.$tools.message('请到应用商店下载庆阳市西峰区人民医院', 'suc')
          break
        case '远程门诊':
          this.$tools.message('请到应用商店下载庆阳市西峰区人民医院', 'suc')
          break
        default:
          console.log(item.id)
          this.$tools.toast('敬请期待')
      }
      // this.isShow = !this.isShow
      // this.$tools.toast('回答已删除',"suc")
      // this.$tools.message('回答已删除', 'suc')
      // this.$tools.toast('回答已删除', 'suc')
    }),
    onNavigateTo(url) {
      // #ifdef MP-WEIXIN
      if (this.checkLogin(url, 1)) {
        uni.navigateTo({
          url: url,
        })
      }
      // #endif
      // #ifdef H5
      uni.navigateTo({
        url: url,
      })
      // #endif
    },
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {},
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
  onReachBottom: function () {
    console.log('22232')
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
}
</script>
<style lang="scss">
.container {
  .top-nav {
    margin-top: 60rpx;
  }
  .home-nav {
    display: flex;
  }
  .home-nav-title {
    display: flex;
    align-content: space-around;
    flex-wrap: wrap;
    margin-left: 32rpx;
    font-size: 1rem;
  }
  .fast-enter {
    margin: 20rpx 20rpx 0rpx 20rpx;
    display: flex;
    justify-content: space-between;
    .fast-enter-item {
      width: 22vw;
      // height: calc(20vw - 60rpx);
      background-color: white;
      border-radius: 20rpx;
      text-align: center;
      padding-top: 10rpx;
      box-shadow: 0 2rpx 6rpx rgba(0, 0, 0, 0.12),
        0 2rpx 4rpx rgba(0, 0, 0, 0.24);
      .bg-img {
        width: 50rpx;
        height: 50rpx;
      }
      text {
        display: block;
        font-weight: 500;
      }
    }
  }
  .card-title {
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    font-size: 36rpx;
    padding: 0rpx 10rpx;
    border-left: 12rpx solid #18bc37;
  }
  .box-outside-warp {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .box-outside {
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      align-items: center;
      margin-top: 10rpx;
      padding: 16rpx;
      .bg-img {
        width: 100rpx;
        height: 100rpx;
      }
      .box-title {
        padding-bottom: 20rpx;
      }
    }
  }
}
</style>
