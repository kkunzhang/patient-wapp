<template>
  <view class="login">
    <view class="header">
      <open-data type="userAvatarUrl"></open-data>
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
      @getuserinfo="wxGetUserInfo">
      授权登录
    </button>
  </view>
</template>

<script>
import { login } from '@api/common'
import { mapMutations } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      tips: null,
      isShow: false,
      SessionKey: '',
      OpenId: '',
      nickName: null,
      avatarUrl: null
    }
  },
  methods: {
    ...mapMutations(['updateTabbarIndex']),
    wxGetUserInfo () {
      const context = this
      uni.getSetting({
        success (res) {
          console.log(res)
          uni.getUserInfo({
            provider: 'weixin',
            success: function (infoRes) {
              context.login()
            },
            fail (res) {
              uni.showModal({
                title: '温馨提示',
                content: '检测到您未进行用户授权，将无法获得该小程序的完整体验！',
                showCancel: false,
                success: function (res) {
                  return
                }
              })
            }
          })
        }
      })
    },

    // 登录
    login () {
      const context = this
      uni.showLoading({
        title: '登录中...'
      })
      uni.login({
        provider: 'weixin',
        success: function (loginRes) {
          login({ code: loginRes.code }).then(res => {
            uni.hideLoading()
            uni.setStorageSync('token', res.obj.Authorization)
            context.updateTabbarIndex(0)
            context.$Router.replaceAll({ name: 'Index' })
          })
        },
        fail (err) {
          uni.showModal({
            title: '温馨提示',
            content: err.errMsg,
            showCancel: false,
            success: function (res) {
              return
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  margin: 200rpx auto 40rpx;
  width: 140rpx;
  height: 140rpx;
  border-radius: 50%;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  box-shadow: 0 0 10rpx #ccc;
  overflow: hidden;
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
