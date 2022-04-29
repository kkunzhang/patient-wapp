<template>
  <view>
    <view class="head-warpe">
      <view>
        <u-avatar :src="src" size="80"></u-avatar>
      </view>
      <view class="head-user-info">
        <view v-if="1 == type" class="top-title">
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
        <view v-else class="login-bt"> 登录/注册 </view>
      </view>
    </view>
    <!--就诊人管理-->
    <uni-card>
      <view class="box-tip">
        <view class="card-title">就诊人管理</view>
        <view v-if="1 == type">全部></view>
      </view>
      <view v-if="1 == type" class="box-outside-warp">
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
      <view v-else class="card-item-add-bt">
        <button type="primary" plain="true" @click="onAdd()">
          <view class="card-item-add"
            ><uni-icons
              type="plus-filled"
              color="#1aad19"
              size="36"
            ></uni-icons>
            添加就诊人</view
          >
        </button>
      </view>
    </uni-card>

    <!--订单管理-->
    <uni-card>
      <view class="box-tip">
        <view class="card-title">订单管理</view>
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
import { throttle, debounce } from '@utils/utils'
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
      type: 0,
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
          title: '预约挂号',
          path: '/static/images/register.png',
        },
        {
          icon: 'iconfont icon-guanyuwomen',
          title: '远程门诊',
          path: '/static/images/remote-outpatient.png',
        },
        {
          icon: 'iconfont icon-tupian',
          title: '远程会诊',
          path: '/static/images/remote-consultation.png',
        },
        {
          icon: 'iconfont icon-shipin',
          title: '处方订单',
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
    onAdd() {
      uni.navigateTo({
        url: '/pages/user/manage/index',
      })
    },
    onClick: debounce(function (item) {
      switch (item.title) {
        case '预约挂号':
          uni.navigateTo({
            url: '/pages/registrationOrders/index',
          })
          break
        case '处方订单':
          uni.navigateTo({
            url: '/pages/prescriptionOrders/index',
          })
          break
        case '我的医生':
          uni.navigateTo({
            url: '/pages/user/myDoctor/index',
          })
          break
        case '我的关注':
          uni.navigateTo({
            url: '/pages/user/myWith/index',
          })
          break
        default:
          this.$tools.toast('敬请期待')
      }
    }),
  },
}
</script>
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
    .login-bt {
      display: flex;
      height: 140rpx;
      align-items: center;
      color: white;
      font-size: 40rpx;
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
      border-radius: 30rpx !important;
    }
  }
}
.card-item-add-bt {
  margin-top: 40rpx;
  .card-item-add {
    display: flex;
    height: 100rpx;
    line-height: 100rpx;
    justify-content: center;
    border-radius: 10rpx;
  }
}
</style>
