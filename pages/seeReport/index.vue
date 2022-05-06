<template>
  <view>
    <cp-get-patient-list :href="href">报告查询</cp-get-patient-list>
  </view>
</template>  

<script>
export default {
  data() {
    return {
      href: '/pages/seeReport/list',
    }
  },
  onLoad() {},
}
</script>

<style>
</style>