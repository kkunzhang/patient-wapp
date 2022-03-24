<template>
  <view>
    <u-popup
      :show="show"
      mode="bottom"
      :closeable="true"
      @close="close"
      @open="open"
      closeIconPos="top-left"
      :safeAreaInsetBottom="true"
    >
      <view class="center" :style="{ height: height + 65 + 'px' }">
        <!-- 循环 -->
        <view v-for="(item, index) in items" :key="item.value">
          <uni-card
            class="my-uni-card"
            :style="{ backgroundColor: index === current ? color : colorOther }"
          >
            <view class="center-item">
              <!-- 卡片文字 -->
              <view>
                <view class="card-item-add">
                  <text>赵云</text>
                  <view>12312312312</view>
                </view>
                <view class="fir-card-top">
                  <text>男 </text>
                  <text>32 </text>
                  <text>1993年11月12日 </text>
                </view>
              </view>
              <!-- 卡片文字结束 -->

              <!-- 选中按钮 -->
              <radio-group @change="radioChange">
                <label class="uni-list-cell uni-list-cell-pd">
                  <view class="radio-right">
                    <radio :value="item.value" :checked="index === current" />
                  </view>
                </label>
              </radio-group>
              <!-- 选中按钮结束 -->
            </view>
          </uni-card>
        </view>
      </view>
      <view class="submit-box">
        <button type="primary" @click="onSubmit()">确认</button>
      </view>
    </u-popup>
    <!-- <u-button @click="onClick()">打开</u-button> -->
  </view>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          value: 'ENG',
          name: '英国',
        },
        {
          value: 'FRA',
          name: '法国',
        },
      ],
      height: null, //获取的状态栏高度
      color: 'skyblue',
      colorOther: '#f2f2f2',
      value: 0,
      current: 0,
      show: false,
    }
  },
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    isShow: {
      handler(newVal, oldVal) {
        this.show = newVal
      },
    },
  },
  methods: {
    radioChange: function (evt) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].value === evt.detail.value) {
          this.current = i
          break
        }
      }
    },
    close() {
      this.$emit('closePop', 0)
    },
    onSubmit() {
      console.log('提交')
      this.$tools.toast('操作成功', 'suc')
      this.$emit('closePop', 0)
      // this.$tools.message('回答已删除', 'suc')
      // this.$emit('toHandlePopModal', 1)
    },
  },
}
</script>
<style lang="scss">
.center {
  margin-bottom: 100%;
  margin-top: 60rpx;
  .center-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .card-item-add {
      display: flex;
      text {
        font-size: 38rpx;
        color: #333333;
        font-weight: 500;
        margin-right: 30rpx;
      }
      view {
        font-size: 34rpx;
      }
    }
    .fir-card-top {
      display: flex;
      flex-wrap: wrap;
      margin-top: 20rpx;
      text {
        margin-right: 30rpx;
        font-size: 34rpx;
      }
    }
  }
}

.submit-box {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>