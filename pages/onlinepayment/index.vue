<template>
  <view>
    <cp-get-patient-list :href="href">待缴项目查询</cp-get-patient-list>
  </view>
</template>  

<script>
export default {
  data() {
    return {
      href: '/pages/onlinepayment/list',
    }
  },
  onLoad() {},
}
</script>

<style>
</style>