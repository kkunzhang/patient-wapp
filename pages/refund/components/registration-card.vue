<template>
  <view>
    <!-- 挂号信息 -->
    <uni-card>
      <view style="font-size: large">挂号信息</view>
      <view class="item-font-spacing">
        <view>
          <text>就诊患者</text>
          <text>{{ info.patientName }}</text>
        </view>
        <view>
          <text>就诊医生</text>
          <text>{{ info.doctorName }}</text>
        </view>
        <view>
          <text>就诊科室</text>
          <text>{{ info.deptName }}</text>
        </view>
        <view>
          <text>就诊日期</text>
          <text>{{ info.registerData }}</text>
        </view>
        <view>
          <text>就诊地址</text>
          <text>{{ info.deptAddress }}</text>
        </view>
        <view>
          <text>就诊费用</text>
          <text v-if="info.totalFee">￥{{ info.totalFee }}</text>
        </view>
      </view>
    </uni-card>
  </view>
</template>
<script>
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
}
</script>
<style lang="scss">
</style>
