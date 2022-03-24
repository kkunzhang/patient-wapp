<template>
  <view class="main">
    <uni-section type="line">
      <view class="example">
        <!-- 基础表单校验 -->
        <uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData">
          <uni-forms-item label="工单号" required name="name">
            <uni-easyinput
              placeholder="请输入工单号"
              class="input-bg"
              placeholder-style=" color: #999;font-size: 30rpx;font-weight: 400;"
              v-model="valiFormData.name"
            />
          </uni-forms-item>
          <uni-forms-item label="物料编码" required name="age1">
            <uni-easyinput
              placeholder="请输入物料编码"
              class="input-bg"
              placeholder-style=" color: #999;font-size: 30rpx;font-weight: 400;"
              v-model="valiFormData.age"
            />
          </uni-forms-item>
          <uni-forms-item label="数量" required name="age2">
            <uni-easyinput
              placeholder="请输入数量"
              class="input-bg"
              placeholder-style=" color: #999;font-size: 30rpx;font-weight: 400;"
              v-model="valiFormData.age"
            />
          </uni-forms-item>
          <uni-forms-item label="钢卷号" required name="age3">
            <uni-easyinput
              placeholder="请输入钢卷号"
              class="input-bg"
              placeholder-style=" color: #999;font-size: 30rpx;font-weight: 400;"
              v-model="valiFormData.age"
            />
          </uni-forms-item>
          <uni-forms-item label="类型" required name="age4">
            <button class="mini-btn" type="default">
              {{ valiFormData.statusText }}
            </button>
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
export default {
  data() {
    return {
      inputData: '',
      // 校验表单数据
      valiFormData: {
        name: '',
        age: '',
        introduction: '',
        id: 0,
        name: '制单人:王五',
        home: '到货时间:2012-12-12',
        level: '制单时间:2012-12-12',
        age: '顺达广州机械公司',
        subtotal: '23',
        numberBox: '到货单号:DH12312312312312312',
        checked: false,
        statusText: '不良',
      },
      input1: '',
      input2: '',
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
        age: {
          rules: [
            {
              required: true,
              errorMessage: '年龄不能为空',
            },
            {
              format: 'number',
              errorMessage: '年龄只能输入数字',
            },
          ],
        },
      },
    }
  },
  computed: {},
  methods: {
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
.main {
  background-color: #f7f7f7;
  padding-bottom: 180rpx;
  .list-item {
    cursor: pointer;
    background-color: #fff;
    border-radius: 10rpx;
    margin-top: 20rpx;
    .l-line {
      line-height: 45rpx;
      border-bottom: 2rpx #d6d6d6 dashed;
      padding: 10rpx 0;
    }
    .title {
      line-height: 45rpx;
      border-bottom: 2rpx #d6d6d6 dashed;
      padding: 30rpx 0;
    }
  }
}
.submit-box {
  width: 100%;
  position: fixed;
  bottom: 0;
}
.example {
  padding: 40rpx 100rpx 20rpx 100rpx;
  .input-bg {
    background-color: #fff;
  }
}
</style>
