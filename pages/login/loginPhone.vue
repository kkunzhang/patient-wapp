<template>
  <view>
    <!-- #ifdef MP-WEIXIN -->
    <view v-if="isPhoneLogin">
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
import config from '@/utils/config.js'
export default {
  name: 'Login',
  data() {
    return {
      tips: null,
      SessionKey: '',
      OpenId: '',
      nickName: null,
      avatarUrl: null,
      userInfo: {
        avatarUrl: '',
        city: '',
        country: '',
        gender: 1,
        language: '',
        nickName: '',
      },
      pageOption: {},
      isPhoneLogin: uni.getStorageSync('isPhoneLogin') || true,
      phone: '',
    }
  },
  methods: {
    // 登录
    login() {
      const _this = this
      uni.showLoading({
        title: '登录中...',
      })
      uni.login({
        provider: 'weixin',
        success: function (loginRes) {
          let code = loginRes.code
          console.log(code)
          uni.hideLoading()
          // todo 将用户登录code传递到后台置换用户SessionKey、OpenId等信息
          // login({ code: loginRes.code })
          //   .then((res) => {
          //     uni.hideLoading()
          //     // openId、或SessionKdy存储//隐藏loading
          //     uni.setStorageSync('token', res.obj.Authorization)
          //     _self.openId = res.data.openid
          //     _self.sessionKey = res.data.session_key // 3.通过 openId 判断用户是否授权
          //   })
          //   .catch(() => {
          //     uni.showToast({
          //       title: '获取 SesssionKey OpenId 失败',
          //       icon: 'none',
          //     })
          //     return false
          //   })
        },
        fail(err) {
          console.log('失败')
          uni.showModal({
            title: '温馨提示',
            content: err.errMsg,
            showCancel: false,
            success: function (res) {
              return
            },
          })
        },
      })
    },
    getPhoneNumber(e) {
      if (e.detail.errMsg == 'getPhoneNumber:ok') {
        console.log(e)
        console.log(e.detail.errMsg)
        console.log(e.detail.iv)
        console.log(e.detail.encryptedData)
        console.log('用户点击了接受')
        //获取手机号
        this.api
          .phone({
            session_key: this.sessionKey,
            encryptedData: e.detail.encryptedData,
            iv: e.detail.iv,
          })
          .then((res) => {
            console.log(res, 2)
            let data = JSON.parse(res.data.shuju)
            console.log(data, 34)
            // let oppenid = uni.getStorageSync('OPPENID')
            //更新手机号
            this.api
              .updateUser({
                phonenumber: data.phoneNumber,
              })
              .then((res1) => {
                console.log(res1)
                uni.setStorageSync('isPhoneLogin', false)
                if (_this.pageOption.backtype == 1) {
                  uni.redirectTo({ url: _this.pageOption.backpage })
                } else {
                  uni.switchTab({ url: _this.pageOption.backpage })
                }
              })
              .catch((err) => {})
          })
          .catch((err) => {})
      } else {
        console.log('用户点击了拒绝')
      }
    },
  },
  onLoad(options) {
    // 接收跳转的参数
    const _this = this
    this.pageOption = options //默认加载
    this.login()
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
