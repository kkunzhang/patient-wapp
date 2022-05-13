<template>
  <view class="content">
    <!-- <image class="logo" src="/static/logo.png"></image> -->
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <button
      @click="getUserOpenId()"
      style="height: 100rpx; width: 300rpx; background-color: #007aff"
    >
      发起支付
    </button>
  </view>
</template>

<script>
import { pay } from '@api/modules/pay'
export default {
  data() {
    return {
      title: 'Hello',
    }
  },
  onLoad() {},
  methods: {
    //在这里不需要获取用户的昵称和头像，直接通过uni.login方法获取code，再获取openid
    getUserOpenId() {
      uni.login({
        provider: 'weixin',
        success: (loginRes) => {
          console.log(loginRes)
          this.getPayInfo(loginRes.code)
        },
      })
    },

    // 生成订单并获取支付请求凭证
    getPayInfo(code) {
      console.log(code)
      this.dispose('getPayInfo', { code: code }).then((res) => {
        console.log(res)
        this.pay(res)
      })
    },

    // 调用发起小程序支付
    pay(data) {
      uni.requestPayment({
        provider: 'wxpay',
        appId: data.appId,
        timeStamp: '1585322276', //时间戳
        nonceStr: '03a619d2d9d5496b89fe73ee5ce1fa38', //随机字符串
        package: 'prepay_id=wx000000000000000000000000', //统一下单接口返回的 prepay_id 参数值
        signType: 'MD5',
        paySign: '00000000000000000000000000', //签名内容
        success(res) {
          console.log('success:' + JSON.stringify(res))
          uni.showToast({
            title: '支付成功',
            duration: 2500,
          })
        },
        fail(err) {
          console.log('fail:' + JSON.stringify(err))
          uni.showToast({
            title: '取消支付',
            duration: 2500,
          })
        },
      })
    },

    // 网络请求
    dispose(path, data) {
      return uni
        .request({
          url: `http://192.168.1.5:6110/${path}`,
          method: 'GET',
          data,
        })
        .then((data) => {
          const [error, res] = data
          console.log(data)
          // 出错
          if (error) {
            uni.hideLoading()
            uni.showToast({
              icon: 'none',
              title: '网络出错了',
            })
            return Promise.reject('网络出错了')
          }
          if (res.statusCode == 200) {
            console.log(11)
            return Promise.resolve(res.data)
          }
        })
    },
  },
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
