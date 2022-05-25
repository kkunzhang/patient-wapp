<template>
  <view>
    <view v-for="(item, index) in list" @click="onClick(item)" :key="index">
      <uni-card class="my-uni-card">
        <view class="card-item-add">
          <!-- | getTime -->
          <view style="font-size: large">{{ item.applyTime }}</view>
          <view style="display: flex">
            <view class="right-tips">{{ item.refundStatus | filterType }}</view>
          </view>
        </view>
        <view class="item-font-spacing">
          <view>
            <text>退款单号</text>
            <text>{{ item.applyNo }}</text>
          </view>
          <view>
            <text>退款金额</text>
            <text>¥{{ item.applyAmt }}</text>
          </view>
          <view>
            <text>退款说明</text>
            <text v-if="item.refundExplain">{{ item.refundExplain }}</text>
          </view>
        </view>
        <view class="card-num">
          {{ item.orderType }}
        </view>
      </uni-card>
    </view>
  </view>
</template>

<script>
import { formatDate } from '@utils/utils'
export default {
  data() {
    return {}
  },
  methods: {
    onClick(val) {
      this.$emit('onClick', val)
    },
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
    getTime(value) {
      if (value) {
        return formatDate(value, '1')
      }
    },
  },
  props: {
    list: {
      type: Array,
      default() {
        return {}
      },
    },
    isShowPayTime: {
      type: Boolean,
      default() {
        true
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
    font-family: PingFangSC-Medium, PingFang SC;
    margin-right: 4rpx;
  }
}
.card-num {
  display: flex;
  justify-content: space-between;
  margin-top: 35rpx;
  text {
    margin: 4rpx;
    color: #909399;
    font-weight: 400;
  }
  .mini-btn {
    border-radius: 30rpx !important;
  }
}
</style>
