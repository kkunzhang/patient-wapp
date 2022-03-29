<template>
  <view>
    <view class="head-warpe">
      <view>
        <u-avatar :src="src" size="80"></u-avatar>
      </view>
      <view class="head-user-info">
        <view class="top-title">
          <uni-title
            type="h1"
            color="#ffffff"
            class="user-name"
            :title="user_name"
          ></uni-title>
          <uni-title
            type="h3"
            color="#ffffff"
            class="user-phone"
            :title="user_phone"
          ></uni-title>
        </view>
      </view>
    </view>
    <!--就诊人管理-->
    <uni-card>
      <view class="box-tip">
        <view class="card-title">就诊人管理</view>
        <view>全部></view>
      </view>
      <view class="box-outside-warp">
        <view class="fir-card-top-warp">
          <view class="fir-card-top">
            <view class="fir-card-top-item">
              <uni-title type="h1" color="black" title="赵云"></uni-title>
            </view>
            <view class="fir-card-top-item">
              <uni-tag
                text="已经绑定医保卡"
                type="success"
                :circle="true"
                inverted
              ></uni-tag>
            </view>
            <view class="fir-card-top-item">
              <uni-tag
                text="默认"
                inverted
                type="error"
                :circle="true"
              ></uni-tag>
            </view>
          </view>
          <view class="fir-card-top">
            <text class="sec-card-top-item">男 </text>
            <text class="sec-card-top-item">32 </text>
            <text class="sec-card-top-item">12312312312 </text>
          </view>
        </view>

        <view
          @click="onClick(item, index)"
          v-for="(item, index) in navs"
          :key="index"
        >
          <view class="box-outside" style="margin-top: -40rpx">
            <button class="mini-btn" type="primary" size="mini">
              {{ item.title }}
            </button>
          </view>
        </view>
      </view>
    </uni-card>

    <!--订单管理-->
    <uni-card>
      <view class="box-tip">
        <view class="card-title">订单管理</view>
        <view @click="onClick(0, 0)">全部订单></view>
      </view>
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
    <!--常用工具-->
    <uni-card>
      <view class="card-title">常用工具</view>
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
  </view>
</template>

<script>
const globalData = getApp().globalData
export default {
  components: {},
  // inster({
  data() {
    return {
      phone: '',
      openid: '',
      unionid: '',
      accessToken: globalData.accessToken,
      src: '/static/images/doctor.jpeg',
      user_name: '赵云',
      user_phone: '138****1234',
      userInfo: [
        {
          url: '/static/images/service-notification.png',
          title: '内容 A',
          subTitle: '明天到医院,我看看你的情况',
          extra: '昨天',
          patient: '李逵',
        },
      ],
      navs: [
        {
          icon: 'iconfont icon-ziyuan',
          title: ' 就诊卡 ',
          path: '/static/images/register.png',
        },
        {
          icon: 'iconfont icon-guanyuwomen',
          title: '健康档案',
          path: '/static/images/remote-outpatient.png',
        },
        {
          icon: 'iconfont icon-tupian',
          title: '电子病历',
          path: '/static/images/remote-consultation.png',
        },
      ],
      navs2: [
        {
          icon: 'iconfont icon-ziyuan',
          title: ' 待支付 ',
          path: '/static/images/register.png',
        },
        {
          icon: 'iconfont icon-guanyuwomen',
          title: '服务中',
          path: '/static/images/remote-outpatient.png',
        },
        {
          icon: 'iconfont icon-tupian',
          title: '待评价',
          path: '/static/images/remote-consultation.png',
        },
        {
          icon: 'iconfont icon-shipin',
          title: '退款',
          path: '/static/images/prescription.png',
        },
      ],
      navs3: [
        {
          icon: 'iconfont icon-ziyuan',
          title: '我的医生',
          path: '/static/images/my-doctor.png',
        },
        {
          icon: 'iconfont icon-guanyuwomen',
          title: '我的关注',
          path: '/static/images/my-follow.png',
        },
        {
          icon: 'iconfont icon-tupian',
          title: '我的评价',
          path: '/static/images/my-assess.png',
        },
        {
          icon: 'iconfont icon-shipin',
          title: '系统设置',
          path: '/static/images/setting.png',
        },
        {
          icon: 'iconfont icon-shipin',
          title: '电子发票',
          path: '/static/images/e-invoice.png',
        },
        {
          icon: 'iconfont icon-shipin',
          title: '医保报销',
          path: '/static/images/insurance.png',
        },
        {
          icon: 'iconfont icon-shipin',
          title: '地址管理',
          path: '/static/images/address.png',
        },
      ],
    }
  },
  // }),

  methods: {
    onClick() {
      uni.navigateTo({
        url: '/pages/allOrders/index',
      })
    },
  },
}
</script>
<style>
/* @import './index.css'; */
</style>
<style lang="scss">
.head-warpe {
  height: 280rpx;
  width: 100%;
  background-color: #18bc37;
  display: flex;
  justify-content: center;
  align-items: center;
  .head-user-info {
    padding-left: 20rpx;
    width: 500rpx;
    height: 140rpx;
    .top-title {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
    }
    .user-name {
      margin-top: -24rpx;
    }
    .user-phone {
      margin-top: -60rpx;
    }
  }
}
.box-tip {
  display: flex;
  justify-content: space-between;
}
.card-title {
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  font-size: 36rpx;
  padding: 0rpx 10rpx;
  border-left: 12rpx solid greenyellow;
}
.box-outside-warp {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .fir-card-top-warp {
    display: flex;
    flex-wrap: wrap;
    .fir-card-top {
      display: flex;
      align-items: center;
      .fir-card-top-item {
        margin: 15rpx;
      }
      .sec-card-top-item {
        margin: 15rpx;
        position: relative;
        top: -60rpx;
        font-size: 34rpx;
      }
    }
  }

  .box-outside {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
    margin-top: 30rpx;
    padding: 16rpx;
    .bg-img {
      width: 100rpx;
      height: 100rpx;
    }
    .box-title {
      padding-bottom: 20rpx;
    }
    .mini-btn {
      border-radius: 15px !important;
    }
  }
}
</style>
