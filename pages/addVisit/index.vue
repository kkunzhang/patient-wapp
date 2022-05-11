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
            />
          </uni-forms-item>
          <uni-forms-item label="手机号" type="number" required name="phone">
            <uni-easyinput
              placeholder="请输入手机号"
              border="surround"
              clearable
              v-model="valiFormData.phone"
              type="number"
            />
          </uni-forms-item>
          <uni-forms-item label="验证码" type="number" required name="code">
            <view class="code-box">
              <view class="code-input">
                <uni-easyinput
                  @input="smsCode"
                  v-model="valiFormData.code"
                  type="number"
                  placeholder="请输入验证码"
                  border="surround"
                  clearable
              /></view>
              <button
                type="primary"
                class="send-code-btn"
                size="mini"
                @click="getSmsCode"
              >
                {{ time }}{{ text }}
              </button>
            </view>
          </uni-forms-item>
          <uni-forms-item
            label="是否默认"
            type="number"
            required
            name="isDefault"
          >
            <u-switch
              v-model="valiFormData.isDefault"
              @change="onSwitchChange"
              activeColor="#1AAD19"
            ></u-switch>
          </uni-forms-item>
        </uni-forms>
      </view>
    </uni-section>
    <cp-button @onSubmit="onSubmit">提交</cp-button>
  </view>
</template>

<script>
import choiceSelected from '@/components/selected/selected.vue'
import { getIdCardInfo } from '@utils/utils'
import { sendSms, addPatient } from '@/api/modules/patientUser'
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
      ],
      choiceContent: '大陆身份证', //选择的内容
      choiceIndex: 0, //选择位置
      // 校验表单数据
      valiFormData: {
        name: '',
        age: '',
        cardNumber: '',
        phone: '',
        code: '',
        age: '',
        birthday: '',
        sex: '',
        isDefault: true,
      },
      time: '',
      text: '获取验证码',
      disabled: false,
      isCanClick: false,
      // 校验规则
      rules: {
        validateTrigger: 'bind',
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
    onSwitchChange(e) {
      console.log('change', e)
      this.valiFormData.isDefault = e
    },
    //获取验证码
    getSmsCode() {
      //先验证电话号
      if (!this.$validate.isPhone(this.valiFormData.phone)) {
        uni.showToast({
          icon: 'none',
          title: '请输入正确的手机号',
        })
      } else {
        this.disabled = true
        this.sendSmsCode()
        this.setInterValFunc()
      }
    },
    //发送验证码
    async sendSmsCode() {
      const _this = this
      const params = {
        mobile: _this.valiFormData.phone,
      }
      const data = await sendSms(params)
      if (data.code) {
        this.$tools.message('发送成功', 'suc')
      }
    },
    //定时器
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
    smsCode(e) {
      e = e.match(/^\d{0,6}/g)[0] || ''
      this.$nextTick(() => {
        this.valiFormData.code = e
      })
    },
    checkAdd() {
      let loginRules = [
        {
          name: 'name',
          required: true,
          type: 'regex',
          errmsg: '请输入正确的名字',
          regex: /^(?:[\u4e00-\u9fa5·]{2,16})$/,
        },
        {
          name: 'cardNumber',
          required: true,
          type: 'regex',
          errmsg: '请输入正确的身份证号码',
          regex:
            /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
        },
        {
          name: 'phone',
          required: true,
          type: 'phone',
          errmsg: '请输入正确的手机号!!',
        },
        { name: 'code', type: 'required', errmsg: '请输入验证码' },
        {
          name: 'code',
          type: 'lengthRange',
          min: 6,
          max: 6,
          errmsg: '请正确输入验证码',
        },
      ]
      let valLoginRes = this.$validate.validate(this.valiFormData, loginRules)
      if (!valLoginRes.isOk) {
        uni.showToast({
          icon: 'none',
          title: valLoginRes.errmsg,
        })
        return false
      } else {
        return true
      }
    },
    onSubmit() {
      let isSubmit = this.checkAdd()
      if (isSubmit) {
        this.addPatient(this.valiFormData.cardNumber)
      }
    },
    //添加就诊人
    async addPatient(card) {
      const _this = this
      _this.getCardInfo(card)
      const params = {
        smsCode: _this.valiFormData.code,
        mobile: _this.valiFormData.phone,
        name: _this.valiFormData.name,
        idCard: _this.valiFormData.cardNumber,
        gender: _this.valiFormData.sex,
        birthday: _this.valiFormData.birthday,
        isDefault: _this.valiFormData.isDefault,
      }
      const data = await addPatient(params)
      if (data.code == 100000) {
        uni.showModal({
          title: '添加成功',
          showCancel: false,
          success: function () {
            uni.setStorageSync('isAdd', true)
            uni.navigateBack({
              delta: 1,
            })
          },
        })
      }

      console.log(data)
    },
    //获取身份证信息
    getCardInfo(card) {
      console.log(card)
      const ret = getIdCardInfo(card)
      console.log(ret)
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
  onUnload() {
    console.log('就诊人页面关闭')
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
    width: 200rpx;
  }
}
</style>
