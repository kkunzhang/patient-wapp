<template>
  <view>
    <view>
      <view class="card-user-info">
        <view class="card-item-add">
          <view style="display: flex">
            <view class="right-tips" v-if="item.status == 50">已完成 </view>
            <view class="right-tips" v-if="item.status == 20">已取消 </view>
            <view class="right-tips" v-if="item.status == 10">待支付 </view>
            <view class="right-tips" v-if="item.status == 30">处理中 </view>
          </view>
        </view>
        <view class="card-num">
          <view v-if="item.status == 50">谨遵医嘱，按时吃药 </view>
          <view v-if="item.status == 20">超时未支付 </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {},
  props: {
    item: {
      type: Object,
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
.card-user-info {
  padding: 10rpx 44rpx;
  border-radius: 8rpx;
  overflow: hidden;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  background-color: #19be6b;
  border: 1rpx solid #dcdcdc;
  line-height: 125rpx;
  view {
    color: #ffffff;
  }
  .card-item-add {
    display: flex;
    justify-content: space-between;
    .right-tips {
      font-size: 32rpx;
      margin-right: 4rpx;
    }
  }
  .card-num {
    display: flex;
    justify-content: space-between;
    text {
      margin: 4rpx;
    }
    .mini-btn {
      border-radius: 30rpx !important;
    }
  }
}
</style>
