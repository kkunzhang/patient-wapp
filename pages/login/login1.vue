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
      openid: '',
      unionid: '',
      nickName: 'xiaowang',
      avatarUrl:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      code: '',
      // userInfo: {
      //   avatarUrl: '',
      //   city: '',
      //   country: '',
      //   gender: 1,
      //   language: '',
      //   nickName: '',
      // },
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
              uni.setStorageSync('nickName', infoRes.userInfo.nickName)
              uni.setStorageSync('avatarUrl', infoRes.userInfo.avatarUrl)
              try {
                uni.setStorageSync('isCanUse', false) //记录是否第一次授权  false:表示不是第一次授权
                _this.updateUserInfo(_this.code)
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
          _this.code = loginRes.code
          uni.hideLoading()
          //非第一次授权获取用户信息
          if (!_this.isCanUse) {
            console.log('log:非第一次授权获取用户信息.')
            uni.getUserProfile({
              desc: 'Wexin', // 这个参数是必须的
              success: (infoRes) => {
                console.log(infoRes)
                //获取用户信息后向调用信息更新方法
                _this.nickName = infoRes.userInfo.nickName //昵称
                _this.avatarUrl = infoRes.userInfo.avatarUrl //头像
                uni.setStorageSync('nickName', infoRes.userInfo.nickName)
                uni.setStorageSync('avatarUrl', infoRes.userInfo.avatarUrl)
                _this.updateUserInfo(code) //调用更新信息方法
              },
              fail: (err) => {
                console.log(err)
              },
            })
          }
          login({}, code)
            .then((res) => {
              uni.hideLoading()
              console.log(res)
              // 通过 openId 判断用户是否授权
              _this.openId = res.data.openid
              _this.unionid = res.data.unionid
            })
            .catch(() => {
              uni.showToast({
                title: '获取 unionid OpenId 失败',
                icon: 'none',
              })
              return false
            })
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
      console.log(data.data)
      if (data.data) {
        // todo 页面到获取手机号
        // uni.redirectTo({
        //   url:
        //     '/pages/login/loginPhone?backpage=' +
        //     this.pageOption.backpage +
        //     '&backtype=' +
        //     this.pageOption.backtype,
        // })
      }
    },
  },
  onLoad(options) {
    // 接收跳转的参数
    this.pageOption = options //默认加载
    this.login()
    // 测试用
    // uni.setStorageSync('nickName', 2)
    // uni.setStorageSync('avatarUrl', 3)
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
