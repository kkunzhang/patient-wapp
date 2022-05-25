<template>
  <view>
    <uni-card>
      <view style="font-size: large">订单信息</view>
      <view class="item-font-spacing">
        <view>
          <text>订单编号</text>
          <text>{{ info.orderNo }}</text>
        </view>
        <view>
          <text>订单类型</text>
          <text>{{ info.orderType | filterType }}</text>
        </view>
        <view>
          <text>下单时间</text>
          <text>{{ info.orderTime }}</text>
        </view>
        <view>
          <text>支付方式</text>
          <text>{{ info.payType }}</text>
        </view>
        <view>
          <text>支付时间</text>
          <text>{{ info.payTime }}</text>
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
      let type = ''
      if (value == 'registration') {
        type = '预约挂号'
      } else {
        type = '门诊缴费'
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
