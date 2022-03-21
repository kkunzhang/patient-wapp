<template>
  <view>
    <!-- 假设我需要状态栏到文字内容部分还有50px的距离 -->
    <view class="status_bar" :style="{ height: height + 65 + 'px' }">
      <text class="nav-bar-text">西峰区人民医院互联网医院</text>
    </view>
  </view>
</template>  

<script>
export default {
  data() {
    return {
      height: null, //获取的状态栏高度
    }
  },
  onLoad() {
    var _this = this
    // 获取手机状态栏高度
    uni.getSystemInfo({
      success: function (data) {
        // 将其赋值给this
        _this.height = data.statusBarHeight
      },
    })
  },
}
</script>

<style>
.status_bar {
  width: 100%;
  position: relative;
}
/* 调整状态栏标题的位置 */
.nav-bar-text {
  position: absolute;
  margin: auto;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
}
</style>