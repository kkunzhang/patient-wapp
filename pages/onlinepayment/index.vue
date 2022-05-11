<template>
  <view>
    <cp-get-patient-list :href="href" :addFlag="addFlag"
      >待缴项目查询</cp-get-patient-list
    >
  </view>
</template>  

<script>
export default {
  data() {
    return {
      href: '/pages/onlinepayment/list',
      addFlag: false,
    }
  },
  onShow() {
    if (uni.getStorageSync('isAdd')) {
      this.addFlag = uni.getStorageSync('isAdd')
      console.log('已经添加')
      uni.removeStorageSync('isAdd')
    }
  },
}
</script>

<style>
</style>