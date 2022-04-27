<template>
  <view class="main">
    <uni-section type="line">
      <view class="example">
        <!-- 基础表单校验 -->
        <uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData">
          <uni-forms-item label="姓名" required name="name">
            <uni-easyinput
              placeholder="请输入姓名"
              class="input-bg"
              placeholder-style="color: rgb(192, 196, 204);font-size: 30rpx;font-weight: 400;"
              v-model="valiFormData.name"
            />
          </uni-forms-item>
          <uni-forms-item label="证件类型" required name="cardType">
            <choice-selected
              :choiceContent="choiceContent"
              :choiceIndex="choiceIndex"
              :choiceList="choiceList"
              @onChoiceClick="onChoiceClick"
            ></choice-selected>
          </uni-forms-item>
          <uni-forms-item
            label="身份证"
            type="number"
            required
            name="cardNumber"
          >
            <uni-easyinput
              placeholder="请输入身份证号"
              border="surround"
              clearable
              v-model="valiFormData.cardNumber"
              type="number"
              @blur="listeningFocus()"
            />
          </uni-forms-item>
          <uni-forms-item label="手机号" type="number" required name="phone">
            <uni-easyinput
              placeholder="请输入手机号"
              border="surround"
              clearable
              v-model="valiFormData.phone"
              type="number"
              @blur="listeningFocus(1)"
            />
          </uni-forms-item>
          <uni-forms-item label="验证码" type="number" required name="code">
            <view class="code-box">
              <view>
                <uni-easyinput
                  @input="shuma"
                  v-model="valiFormData.code"
                  type="number"
                  placeholder="请输入您收到的验证码"
                  border="surround"
                  clearable
              /></view>
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
    <cp-button @onSubmit="onSubmit('valiForm')">提交</cp-button>
  </view>
</template>

<script>
import choiceSelected from '@/components/selected/selected.vue'
import { getIdCardInfo } from '@utils/utils'
export default {
  components: {
    choiceSelected,
  },
  data() {
    return {
      choiceList: [
        {
          choiceItemId: '0',
          choiceItemContent: '大陆身份证',
        },
        // {
        //   choiceItemId: '1',
        //   choiceItemContent: '苹果',
        // },
      ],
      choiceContent: '大陆身份证', //选择的内容
      choiceIndex: 0, //选择位置
      // 校验表单数据
      valiFormData: {
        name: '张琨',
        age: '16',
        cardNumber: '220602199311091235',
        phone: '17610229358',
        code: '',
        age: '',
        birthday: '',
        sex: '',
      },
      time: '',
      text: '获取验证码',
      disabled: false,
      isCanClick: false,
      // 校验规则
      rules: {
        name: {
          rules: [
            {
              required: true,
              errorMessage: '姓名不能为空',
            },
            {
              validateFunction: function (rule, value, data, callback) {
                const reg = /^(?:[\u4e00-\u9fa5·]{2,16})$/
                if (reg.test(value) === false && value) {
                  callback('请输入正确的姓名信息')
                }
                return true
              },
            },
          ],
        },
        cardNumber: {
          rules: [
            {
              required: true,
              errorMessage: '身份证号不能为空',
            },
            {
              validateFunction: function (rule, value, data, callback) {
                const reg =
                  /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
                if (reg.test(value) === false && value) {
                  callback('请输入正确格式的身份证号码')
                }
                return true
              },
            },
          ],
        },
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
    onChoiceClick: function (position) {
      var _this = this
      _this.choiceIndex = position
      _this.choiceContent = _this.choiceList[position].choiceItemContent
    },
    // 1、监听身份证输入
    listeningFocus(isPhone = '') {
      if (isPhone) {
        this.getCardTypeNumber(this.valiFormData.phone, isPhone)
      } else {
        this.getCardTypeNumber(this.valiFormData.cardNumber, '')
      }
    },
    // 2、检验身份证是否正确
    getCardTypeNumber(value, isPhone) {
      if (isPhone) {
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
      } else {
        const reg =
          /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
        if (reg.test(value) === false && value) {
          let msg = '请输入正确格式的身份证号码'
          uni.showToast({
            icon: 'none',
            title: msg,
            duration: 2000,
            position: 'top',
          })
        }
      }
    },

    //获取验证码
    async get_code() {
      this.listeningFocus(1)
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
    shuma(e) {
      e = e.match(/^\d{0,6}/g)[0] || ''
      this.$nextTick(() => {
        this.valiFormData.code = e
      })
    },

    onSubmit(ref) {
      this.$refs[ref]
        .validate()
        .then((res) => {
          console.log(res)
          uni.showToast({
            title: `校验通过`,
          })
          this.getCardInfo(res.caredNumbr)
        })
        .catch((err) => {
          console.log('err', err)
        })
    },
    getCardInfo(card) {
      const ret = getIdCardInfo(card)
      if (ret) {
        this.valiFormData.age = ret.age
        this.valiFormData.birthday = ret.birthday
        this.valiFormData.sex = ret.sex
      }
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
.example {
  padding: 40rpx 50rpx 20rpx 50rpx;
  .input-bg {
    background-color: #fff;
  }
}
.code-box {
  display: flex;
  align-items: center;
  .code-input {
  }
}
</style>
