<template>
  <view>
    <view v-for="(item, index) in list" :key="index">
      <view class="card-user-info">
        <view class="card-item-add">
          <view style="display: flex">
            <view class="right-tips" v-if="item.id == 1">待支付 </view>
            <view class="right-tips" v-if="item.id == 2">服务中 </view>
            <view class="right-tips" v-if="item.id == 3">已完成 </view>
            <view class="right-tips" v-if="item.id == 4">已取消 </view>
            <view class="right-tips" v-if="item.id == 5">挂号成功 </view>
            <view class="right-tips" v-if="item.id == 6">处理中 </view>
            <count-down v-if="item.id == 1"></count-down>
          </view>
        </view>
        <view class="card-num">
          <view v-if="item.id == 1">超时未支付自动取消</view>
          <view v-if="item.id == 1">订单金额：￥100.00</view>
          <view v-if="item.id == 3">谨遵医嘱，按时复诊 </view>
          <view v-if="item.id == 4">超时未支付已自动取消 </view>
          <view v-if="item.id == 5">请按时就诊，号源当日有效，过期作废 </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import countDown from './count-down.vue'
export default {
  components: { countDown },
  data() {
    return {}
  },
  methods: {},
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
.card-user-info {
  padding: 10rpx 44rpx;
  border-radius: 8rpx;
  overflow: hidden;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  background-color: #19be6b;
  border: 1rpx solid #dcdcdc;
  line-height: 65rpx;
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
