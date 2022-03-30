<template>
  <view>
    <view v-for="(item, index) in list" @click="onClick(111)" :key="index">
      <uni-card class="my-uni-card">
        <view class="card-item-add">
          <view style="font-size: large">2022年01月14日</view>
          <view style="display: flex">
            <view class="right-tips">待支付 </view>
            <count-down></count-down>
          </view>
        </view>
        <view class="item-bottom">
          <view>
            <text>订单名称</text>
            <text>远程会诊-视频问诊</text>
          </view>
          <view>
            <text>就诊患者</text>
            <text>赵云</text>
          </view>
          <view>
            <text>参会医生</text>
            <text>张围军</text>
            <text>李小凡</text>
          </view>
        </view>
        <view class="card-num">
          <view>远程门诊 </view>
          <view>
            <button
              class="mini-btn"
              @click="onClick()"
              type="primary"
              size="mini"
            >
              去支付
            </button>
          </view>
        </view>
      </uni-card>
    </view>
  </view>
</template>

<script>
import countDown from './countDown.vue'
export default {
  components: { countDown },
  data() {
    return {}
  },
  methods: {
    onClick(val) {
      let item
      item = 'vvv'
      this.$emit('onClick', item)
    },
  },
  props: {
    list: {
      type: Array,
      default() {
        return {}
      },
    },
  },
}
</script>
<style lang="scss">
.card-item-add {
  display: flex;
  justify-content: space-between;
  .right-tips {
    font-size: 32rpx;
    // font-family: PingFangSC-Medium, PingFang SC;
    margin-right: 4rpx;
  }
}
.item-bottom view {
  margin-top: 30rpx;
  color: rgba(96, 102, 114, 1);
}
.item-bottom view text {
  margin-right: 20rpx;
}
.card-num {
  display: flex;
  justify-content: space-between;
  margin-top: 45rpx;
  text {
    margin: 4rpx;
  }
  .mini-btn {
    border-radius: 30rpx !important;
  }
}
</style>
