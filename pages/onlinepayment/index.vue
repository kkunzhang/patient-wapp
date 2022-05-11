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
  // todo 这里查询传进去
  onShow() {
    console.log('12222')
  },
}
</script>

<style>
</style>