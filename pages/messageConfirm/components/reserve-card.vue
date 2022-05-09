<template>
  <view>
    <!-- 预约信息 -->
    <uni-card>
      <view style="font-size: large">预约信息</view>
      <view class="item-font-spacing">
        <view>
          <text>就诊日期</text>
          <text>{{ info.registerDate }}</text>
        </view>
        <view>
          <text>就诊科室</text>
          <text>{{ info.doctorTag }}</text>
        </view>
        <view>
          <text>就诊地址</text>
          <text>{{ info.location }}</text>
        </view>
        <view>
          <text>就诊费用</text>
          <text>￥{{ info.examinationFee }}</text>
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
