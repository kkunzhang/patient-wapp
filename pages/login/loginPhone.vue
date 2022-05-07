<template>
  <view>
    <!-- #ifdef MP-WEIXIN -->
    <view>
      <view class="header">
        <u-avatar src="/static/images/logo@2x.png" size="80"></u-avatar>
      </view>
      <view class="content">
        <view>申请获取以下权限</view>
        <text>获得您微信绑定的手机号</text>
      </view>
      <button
        class="bottom"
        type="primary"
        open-type="getPhoneNumber"
        @getphonenumber="getPhoneNumber"
        withCredentials="true"
        lang="zh_CN"
      >
        点击获取手机号
      </button>
    </view>
    <!-- #endif -->
  </view>
</template>

<script>
import { phoneLogin } from '@api/modules/common'
export default {
  name: 'Login',
  data() {
    return {
      tips: null,
      SessionKey: '',
      OpenId: '',
      nickName: null,
      avatarUrl: null,
      code: '',
      pageOption: {
        backpage: '/pages/home/index',
        backtype: '1',
      },
      phone: '',
    }
  },
  methods: {
    getPhoneNumber(e) {
      if (e.detail.errMsg == 'getPhoneNumber:ok') {
        console.log('用户点击了接受')
        this.updateUserInfo(e.detail.code)
      } else {
        console.log('用户点击了拒绝')
      }
    },
    //向后台更新信息 login
    async updateUserInfo(code = '') {
      const _this = this
      const params = {
        openid: uni.getStorageSync('openId'),
        unionid: uni.getStorageSync('unionid'),
      }
      const data = await phoneLogin(params, code)
      console.log(data.data)
      if (data.data.userInfo.mobile) {
        uni.setStorageSync('phone', data.data.userInfo.mobile)
        uni.setStorageSync('token', data.data.accessToken)
        console.log(data.data.accessToken)
        console.log(_this.pageOption.backpage)
        if (_this.pageOption.backtype == 1) {
          console.log(_this.pageOption.backpage)
          //tableTab
          uni.switchTab({ url: _this.pageOption.backpage })
        } else {
          uni.redirectTo({ url: _this.pageOption.backpage })
        }
      } else {
        this.$tools.message('获取手机号接口错误')
      }
    },
  },
  onLoad(options) {
    // 接收跳转的参数
    if (options) {
      this.pageOption = options //默认加载
    }
    console.log(options)
  },
}
</script>

<style lang="scss" scoped>
.header {
  margin: 200rpx auto 40rpx;
  width: 140rpx;
  height: 140rpx;
}
.content {
  margin-left: 50rpx;
  margin-bottom: 90rpx;
}
.content text {
  display: block;
  color: #9d9d9d;
  margin-top: 40rpx;
}

.bottom {
  border-radius: 80rpx;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  margin: 70rpx 50rpx;
  font-size: 35rpx;
}
</style>
