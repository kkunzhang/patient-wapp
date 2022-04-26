<template>
  <view>
    <!-- 挂号信息 -->
    <uni-card>
      <view style="font-size: large">挂号信息</view>
      <view class="item">
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
          <text>￥{{ info.registerFee }}</text>
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
      type: [],
      default() {
        return {}
      },
    },
  },
}
</script>
<style lang="scss">
.item view {
  margin-top: 30rpx;
  color: rgba(96, 102, 114, 1);
  text {
    margin-right: 20rpx;
  }
}
</style>
