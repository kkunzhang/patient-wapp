<template>
  <view>
    <!-- #ifdef MP-WEIXIN -->
    <view v-if="isCanUse">
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
        新版请登录
      </button>
    </view>
    <!-- #endif -->
  </view>
</template>

<script>
import { login } from '@api/modules/common'
import { mapMutations } from 'vuex'
import config from '@/utils/config.js'
export default {
  name: 'Login',
  data() {
    return {
      tips: null,
      isShow: false,
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
      isCanUse: uni.getStorageSync('isCanUse') || true, //默认为true
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
              // todo 打开
              // uni.setStorageSync('uid', infoRes.userInfo.uid)
              // uni.setStorageSync('nickName', infoRes.userInfo.nickName)
              // uni.setStorageSync('avatarUrl', infoRes.userInfo.avatarUrl)
              // uni.setStorageSync('regtime', infoRes.userInfo.regtime)
              // todo 打开
              try {
                uni.setStorageSync('isCanUse', false) //记录是否第一次授权  false:表示不是第一次授权
                _this.updateUserInfo()
              } catch (e) {}
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
          let code = loginRes.code
          console.log(code)
          uni.hideLoading()
          if (!_this.isCanUse) {
            console.log(3333)
            //非第一次授权获取用户信息///新版方法
            uni.getUserProfile({
              desc: 'Wexin', // 这个参数是必须的
              success: (infoRes) => {
                console.log(infoRes)
                //获取用户信息后向调用信息更新方法
                _this.nickName = infoRes.userInfo.nickName //昵称
                _this.avatarUrl = infoRes.userInfo.avatarUrl //头像
                // todo 打开
                // uni.setStorageSync('uid', infoRes.userInfo.uid)
                // uni.setStorageSync('nickName', infoRes.userInfo.nickName)
                // uni.setStorageSync('avatarUrl', infoRes.userInfo.avatarUrl)
                // uni.setStorageSync('regtime', infoRes.userInfo.regtime)
                // todo 打开
                // _this.updateUserInfo() //调用更新信息方法
              },
              fail: (err) => {
                console.log(err)
              },
            })
          }
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
    //向后台更新信息
    updateUserInfo() {
      const _this = this
      uni.request({
        url: 'url', //服务器端地址
        data: {
          appKey: config.appKey,
          customerId: _this.customerId,
          nickName: _this.nickName,
          headUrl: _this.avatarUrl,
        },
        method: 'POST',
        header: {
          'content-type': 'application/json',
        },
        success: (res) => {
          if (res.data.state == 'success') {
            // todo 页面到获取手机号
            uni.redirectTo({
              url:
                '/pages/login/loginPhone?backpage=' +
                this.pageOption.backpage +
                '&backtype=' +
                this.pageOption.backtype,
            })
          }
        },
        fail: () => {
          uni.showToast({ title: '用户信息操作失败', icon: 'none' })
        },
      })
    },
  },
  onLoad(options) {
    // 接收跳转的参数
    this.pageOption = options //默认加载
    this.login()
    // 测试用
    // uni.setStorageSync('uid', 1)
    // uni.setStorageSync('nickName', 2)
    // uni.setStorageSync('avatarUrl', 3)
    // uni.setStorageSync('regtime', 4)
    // uni.redirectTo({ url: this.pageOption.backpage })
  },
}
</script>

<style lang="scss" scoped>
.header {
  margin: 200rpx auto 40rpx;
  width: 140rpx;
  height: 140rpx;
  // border-radius: 50%;
  // backface-visibility: hidden;
  // transform: translate3d(0, 0, 0);
  // box-shadow: 0 0 10rpx #ccc;
  // overflow: hidden;
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
