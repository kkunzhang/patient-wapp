<template>
  <view>
    <view>
      <uni-card class="my-uni-card">
        <view class="card-item-add">
          <!-- | getTime -->
          <view style="font-size: large">应退金额</view>
          <view style="display: flex">
            <view class="right-tips" v-if="info.applyAmt"
              >¥{{ info.applyAmt }}</view
            >
          </view>
        </view>
        <view class="item-font-spacing">
          <view>
            <text>退款单号</text>
            <text>{{ info.applyNo }}</text>
          </view>
          <view>
            <text>申请时间 </text>
            <text>{{ info.applyTime }}</text>
          </view>
          <view>
            <text>申请渠道 </text>
            <text>{{ info.applyChannel }}</text>
          </view>
          <view>
            <text>退款状态 </text>
            <text>{{ info.refundStatus }}</text>
          </view>
          <view>
            <text>退款原因</text>
            <text>{{ info.refundReason }}</text>
          </view>
          <view v-if="info.refundExplain">
            <text>退款说明</text>
            <text>{{ info.refundExplain }}</text>
          </view>
          <view v-if="info.refundFailDesc">
            <text>失败说明</text>
            <text>{{ info.refundFailDesc }}</text>
          </view>
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
    info: {
      type: Object,
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
  .right-tips {
    font-size: 32rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    margin-left: 24rpx;
  }
}
</style>
