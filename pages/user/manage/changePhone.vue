<template>
  <view class="main">
    <uni-section type="line">
      <view class="example">
        <!-- 基础表单校验 -->
        <uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData">
          <uni-forms-item label="手机号" type="number" required name="phone">
            <u--input
              placeholder="请输入手机号"
              border="surround"
              clearable
              v-model="valiFormData.phone"
              type="number"
              @blur="listeningfocus()"
            ></u--input>
          </uni-forms-item>
          <uni-forms-item label="验证码" type="number" required name="code">
            <view class="code-box">
              <u--input
                @input="inputCode"
                v-model="valiFormData.code"
                type="number"
                class="code-input"
                placeholder="请输入您收到的验证码"
                border="surround"
                clearable
              ></u--input>
              <button
                type="primary"
                class="send-code-btn"
                size="mini"
                @click="get_code"
              >
                {{ time }}{{ text }}
              </button>
            </view>
          </uni-forms-item>
        </uni-forms>
      </view>
    </uni-section>

    <view class="submit-box">
      <button type="primary" @click="submit('valiForm')">提交</button>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      // 校验表单数据
      valiFormData: {
        name: '',
        age: '',
        cardNumber: '',
        phone: '',
        code: '',
      },
      time: '',
      text: '获取验证码',
      disabled: false,
      isCanClick: false,
      // 校验规则
      rules: {
        phone: {
          rules: [
            {
              required: true,
              errorMessage: '手机号不能为空',
            },
            {
              validateFunction: function (rule, value, data, callback) {
                const reg = /^1[34578]\d{9}$/
                if (reg.test(value) === false && value) {
                  callback('请输入正确格式的手机号码')
                }
                return true
              },
            },
          ],
        },
        code: {
          rules: [
            {
              required: true,
              errorMessage: '验证码不能为空',
            },
          ],
        },
      },
    }
  },
  computed: {},
  methods: {
    // 1、监听输入
    listeningfocus() {
      this.getCardTypeNumber(this.valiFormData.phone)
    },
    // 2、检验是否正确
    getCardTypeNumber(value) {
      const rex =
        /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/
      if (rex.test(value) === false && value) {
        let msg = '请输入正确格式的手机号码'
        this.isCanClick = false
        uni.showToast({
          icon: 'none',
          title: msg,
          duration: 2000,
          position: 'top',
        })
      } else {
        if (value) {
          this.isCanClick = true
        }
      }
    },
    submit(ref) {
      this.$refs[ref]
        .validate()
        .then((res) => {
          console.log('success', res)
          uni.showToast({
            title: `校验通过`,
          })
        })
        .catch((err) => {
          console.log('err', err)
        })
    },
    //获取验证码
    async get_code() {
      if (this.isCanClick) {
        if (this.disabled) {
          return
        }
        this.disabled = true
        this.setInterValFunc()
      } else {
        uni.showToast({
          icon: 'none',
          title: '请输入正确格式的手机号码',
          duration: 2000,
          position: 'top',
        })
      }
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
    inputCode(e) {
      e = e.match(/^\d{0,6}/g)[0] || ''
      this.$nextTick(() => {
        this.valiFormData.code = e
      })
    },
  },
  props: {
    tabCur: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss">
.submit-box {
  width: 100%;
  position: fixed;
  bottom: 0;
}
.example {
  padding: 40rpx 50rpx 20rpx 50rpx;
  .input-bg {
    background-color: #fff;
  }
}
.code-box {
  display: flex;
  align-items: center;
}
.send-code-btn {
  width: 35%;
  margin-left: 35rpx;
}
</style>
