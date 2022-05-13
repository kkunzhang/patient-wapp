<template>
  <view>
    <cp-get-patient-list :href="href" :addFlag="addFlag" :isShowText="false"
      >报告查询</cp-get-patient-list
    >
  </view>
</template>  

<script>
export default {
  data() {
    return {
      href: '/pages/seeReport/list',
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