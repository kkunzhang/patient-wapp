<template>
  <view>
    <view v-for="(item, index) in list" @click="onClick(111)" :key="index">
      <uni-card class="my-uni-card" :isFull="isFull">
        <view class="card-item-add">
          <view style="display: flex">
            <view class="right-tips" v-if="item.id == 1">待支付 </view>
            <view class="right-tips" v-if="item.id == 2">服务中 </view>
            <view class="right-tips" v-if="item.id == 3">已完成 </view>
            <view class="right-tips" v-if="item.id == 4">已取消 </view>
            <count-down v-if="item.id == 1"></count-down>
          </view>
        </view>
        <view class="card-num">
          <view v-if="item.id == 1">
            <view>超时未支付自动取消 </view>
            <view>订单金额：￥100.00 </view>
          </view>
          <view v-if="item.id == 3">谨遵医嘱，按时复诊 </view>
          <view v-if="item.id == 4">超时未支付 </view>
          <view>
            <button
              v-if="item.id == 1"
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
  view {
    color: #ffffff;
  }
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
