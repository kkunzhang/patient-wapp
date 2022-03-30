<template>
  <view>
    <view v-for="(item, index) in list" @click="onClick(111)" :key="index">
      <uni-card class="my-uni-card" :isFull="isFull">
        <view class="card-item-add">
          <view style="display: flex">
            <view class="right-tips">待支付 </view>
            <count-down></count-down>
          </view>
        </view>
        <view class="card-num">
          <view>订单金额：￥100.00 </view>
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
    isFull: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style lang="scss">
.my-uni-card {
  background-color: #19be6b;
  .card-item-add {
    display: flex;
    justify-content: space-between;
    .right-tips {
      font-size: 32rpx;
      // font-family: PingFangSC-Medium, PingFang SC;
      margin-right: 4rpx;
    }
  }
  .card-num {
    display: flex;
    justify-content: space-between;
    margin-top: 25rpx;
    text {
      margin: 4rpx;
    }
    .mini-btn {
      border-radius: 30rpx !important;
    }
  }
}
</style>
