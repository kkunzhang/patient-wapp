<template>
  <view>
    <uni-card>
      <view style="font-size: large">订单信息</view>
      <view class="item-font-spacing">
        <view>
          <text>订单编号</text>
          <text>{{ info.registrationNo }}</text>
        </view>
        <view>
          <text>订单类型</text>
          <text>{{ info.registrationStatus | filterType }}</text>
        </view>
        <view>
          <text>下单时间</text>
          <text>{{ info.createTime | getTime }}</text>
        </view>
        <view v-if="info.paidTime">
          <text>支付方式</text>
          <text>微信支付</text>
        </view>
        <view v-if="info.paidTime">
          <text>支付时间</text>
          <text>{{ info.paidTime | getTime }}</text>
        </view>
      </view>
    </uni-card>
  </view>
</template>
<script>
import { formatDate } from '@utils/utils'

export default {
  data() {
    return {}
  },
  methods: {},
  props: {
    info: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  filters: {
    filterType(value) {
      let type
      if (value == 10) {
        type = '待付款'
      } else if (value == 20) {
        type = '已取消'
      } else if (value == 50) {
        type = '已完成'
      }
      return type
    },
    getTime(value) {
      return formatDate(value, '1')
    },
  },
}
</script>
<style lang="scss">
</style>
