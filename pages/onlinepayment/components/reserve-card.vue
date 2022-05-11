<template>
  <view>
    <!-- 预约信息 -->
    <uni-card>
      <view style="font-size: large">
        <slot>处方信息 </slot>
      </view>
      <view class="item-font-spacing">
        <view>
          <text>处方编号</text>
          <text>{{ info.prescriptionId || info.prescriptionId }}</text>
        </view>
        <view>
          <text>处方类型</text>
          <text>{{ info.type || info.prescriptionType }}</text>
        </view>
        <view>
          <text>开单科室</text>
          <text>{{ info.deptName || info.deptName }}</text>
        </view>
        <view>
          <text>执行科室</text>
          <text>{{ info.materialDeptName || info.materialDeptName }}</text>
        </view>
        <view>
          <text>科室地址</text>
          <text>{{ info.location || info.location }}</text>
        </view>
        <view>
          <text>开单时间</text>
          <text>{{ info.prescriptionTime | getTime }}</text>
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
    getTime(value) {
      return formatDate(value, '1')
    },
  },
}
</script>
<style lang="scss">
</style>
