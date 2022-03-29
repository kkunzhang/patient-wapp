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
            <u--input
              placeholder="请输入身份证号"
              border="surround"
              clearable
              v-model="valiFormData.cardNumber"
              type="number"
              @blur="Listeningfocus()"
            ></u--input>
          </uni-forms-item>
          <uni-forms-item label="手机号" type="number" required name="phone">
            <u--input
              placeholder="请输入手机号"
              border="surround"
              clearable
              v-model="valiFormData.phone"
              type="number"
              @blur="Listeningfocus(1)"
            ></u--input>
          </uni-forms-item>
          <uni-forms-item label="性别" required name="sexs">
            <uni-data-checkbox v-model="valiFormData.sex" :localdata="sexs" />
          </uni-forms-item>
        </uni-forms>
      </view>
    </uni-section>

    <view class="submit-box">
      <!-- <button type="primary" @click="settlement">提交</button> -->
      <button type="primary" @click="submit('valiForm')">提交</button>
    </view>
  </view>
</template>

<script>
import choiceSelected from '@/components/selected/selected.vue'
export default {
  components: {
    choiceSelected,
  },
  data() {
    return {
      sexs: [
        {
          text: '男',
          value: 0,
        },
        {
          text: '女',
          value: 1,
        },
      ],
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
        name: '',
        age: '',
        cardNumber: '',
        phone: '',
      },
      // 校验规则
      rules: {
        name: {
          rules: [
            {
              required: true,
              errorMessage: '姓名不能为空',
            },
          ],
        },
        sexs: {
          rules: [
            {
              required: true,
              errorMessage: '性别不能为空',
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
      },
    }
  },
  computed: {},
  methods: {
    onChoiceClick: function (position) {
      console.log('+++++++' + position)

      var _this = this

      _this.choiceIndex = position

      _this.choiceContent = _this.choiceList[position].choiceItemContent
    },
    // 1、监听身份证输入
    Listeningfocus(isPhone = '') {
      if (this.valiFormData.cardNumber != '') {
        this.getCardTypeNumber(this.valiFormData.cardNumber, isPhone)
      }
    },
    // 2、检验身份证是否正确
    getCardTypeNumber(value, isPhone) {
      if (isPhone) {
        const reg = /^1[34578]\d{9}$/
        if (reg.test(value) === false && value) {
          let msg = '请输入正确格式的手机号码'
          uni.showToast({
            icon: 'none',
            title: msg,
            duration: 2000,
            position: 'top',
          })
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
    settlement() {
      uni.navigateBack({
        delta: 1,
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
</style>
