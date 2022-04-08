<template>
  <view>
    <view class="lia">
      <input
        @input="shuma"
        v-model="yanzhengnum"
        :class="shumatext ? 'shuruhou' : 'shuruqian'"
        type="number"
        placeholder="请输入您收到的验证码"
      />
      <view :class="disabled ? 'huoquzhong' : 'huoqu'" @click="get_code"
        >{{ time }}{{ text }}</view
      >
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      shumatext: false,
      yanzhengnum: '',
      text: '获取验证码',
      time: '',
      disabled: false,
    }
  },
  methods: {
    //获取验证码
    async get_code() {
      var pphone = /^1[3456789]\d{9}$/
      var pkong = /^[\s\S]*.*[^\s][\s\S]*$/
      if (this.disabled) {
        return
      }
      // if(!pkong.test(this.phonenum) || !pphone.test(this.phonenum)){
      //   Eapp.ui.toast.text("请输入正确的手机号");
      //   return false
      // }

      this.disabled = true
      this.setInterValFunc()
    },
    setInterValFunc() {
      this.time = 60
      this.text = '秒'
      this.setTime = setInterval(() => {
        if (this.time - 1 == 0) {
          this.time = ''
          this.text = '重新获取'
          this.code = ''
          this.disabled = false
          clearInterval(this.setTime)
        } else {
          this.time--
        }
      }, 1000)
    },
    // 验证码输入框
    shuma(e) {
      if (e.detail.value) {
        this.shumatext = true
      } else {
        this.shumatext = false
      }
    },
  },
}
</script>
<style scoped >
.lia {
  width: 690rpx;
  height: 105rpx;
  margin: 0 auto;
  border-bottom: 1rpx solid #f1f1f1;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
}
.shuruqian {
  height: 50rpx;
  width: 60%;
  font-size: 32rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
}
.shuruhou {
  height: 50rpx;
  width: 60%;
  font-size: 36rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;
}
.huoqu {
  font-size: 32rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2d8bff;
}
.huoquzhong {
  font-size: 32rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999999;
}
</style>