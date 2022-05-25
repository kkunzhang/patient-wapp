<template>
  <view>
    <view>
      <view class="card-user-info">
        <view class="card-item-add">
          <view style="display: flex">
            <view class="right-tips">
              {{ item.refundStatus }}
            </view>
          </view>
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
  filters: {
    filterType(value) {
      let type = ''
      if (value === 0) {
        type = '待退款'
      } else if (value === 1) {
        type = '退款中'
      } else if (value === 2) {
        type = '退款成功'
      } else if (value === 4) {
        type = '退款失败'
      }
      return type
    },
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
}
</style>
