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
    this.addFlag = true
  },
  onHide() {
    this.addFlag = false
  },
}
</script>

<style>
</style>