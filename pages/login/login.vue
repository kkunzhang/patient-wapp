<template>
  <view>
    <!-- #ifdef MP-WEIXIN -->
    <view>
      <view class="header">
        <!-- 用户微信头像 -->
        <!-- <open-data type="userAvatarUrl"></open-data> -->
        <u-avatar src="/static/images/logo@2x.png" size="80"></u-avatar>
      </view>
      <view class="content">
        <view>申请获取以下权限</view>
        <text>获得你的公开信息(昵称，头像、地区等)</text>
      </view>
      <button
        class="bottom"
        type="primary"
        open-type="getUserInfo"
        withCredentials="true"
        lang="zh_CN"
        @click="wxGetUserInfo"
      >
        登录
      </button>
    </view>
    <!-- #endif -->
  </view>
</template>

<script>
import { login } from '@api/modules/common'
export default {
  name: 'Login',
  data() {
    return {
      tips: null,
      isShow: false,
      SessionKey: '',
      openid: '',
      unionid: '',
      nickName: '',
      avatarUrl: '',
      code: '',
      pageOption: {
        backpage: '/pages/home/index',
        backtype: '1',
      },
      // phone: uni.getStorageSync('phone') || false,
      //todo  删除
      phone: uni.getStorageSync('phone') || 17610229358,
    }
  },
  methods: {
    //老版无法获取头像，昵称等信息
    wxGetUserInfo() {
      const _this = this
      //判断是否授权
      uni.getSetting({
        success(res) {
          if (!res.authSetting['scope.userInfo']) {
            //这里调用授权
            console.log('当前未授权')
          } else {
            //用户已经授权过了
            console.log('当前已授权')
          }
          uni.getUserProfile({
            desc: 'Wexin', // 这个参数是必须的
            success: (infoRes) => {
              console.log(infoRes)
              //获取用户信息后向调用信息更新方法
              _this.nickName = infoRes.userInfo.nickName //昵称
              _this.avatarUrl = infoRes.userInfo.avatarUrl //头像
              uni.setStorageSync('nickName', infoRes.userInfo.nickName)
              uni.setStorageSync('avatarUrl', infoRes.userInfo.avatarUrl)
              _this.updateUserInfo(_this.code)
            },
            fail: (err) => {
              console.log(err)
              uni.showModal({
                title: '温馨提示',
                content:
                  '检测到您未进行用户授权，将无法获得该小程序的完整体验！',
                showCancel: false,
                success: function (res) {
                  return
                },
              })
            },
          })
        },
      })
    },
    // 登录
    login() {
      const _this = this
      uni.showLoading({
        title: '登录中...',
      })
      uni.login({
        provider: 'weixin',
        success: function (loginRes) {
          _this.code = loginRes.code
          uni.hideLoading()
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
    //向后台更新信息 login
    async updateUserInfo(code = '') {
      const _this = this
      const params = {
        nickName: _this.nickName,
        headUrl: _this.avatarUrl,
      }
      const data = await login(params, code)
      if (data.data) {
        console.log(data.data)
        uni.setStorageSync('token', data.data.accessToken)
        uni.setStorageSync('unionid', data.data.unionid)
        uni.setStorageSync('openId', data.data.openid)
        //todo 删除
        uni.setStorageSync('phone', '17610229358')

        if (!data.data.bindingStatus || !this.phone) {
          uni.redirectTo({
            url:
              '/pages/login/loginPhone?backpage=' +
              _this.pageOption.backpage +
              '&backtype=' +
              _this.pageOption.backtype,
          })
        } else {
          console.log(_this.pageOption.backpage)
          if (_this.pageOption.backtype == 1) {
            uni.switchTab({ url: _this.pageOption.backpage })
          } else {
            uni.redirectTo({ url: _this.pageOption.backpage })
          }
        }
      } else {
        this.$tools.message('登陆接口错误')
      }
    },
  },
  onLoad(options) {
    // 接收跳转的参数
    if (options) {
      this.pageOption = options //默认加载
    }
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
