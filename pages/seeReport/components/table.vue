<template>
  <view>
    <view style="margin-top: 20rpx">
      <uni-table :loading="loading" border stripe emptyText="暂无更多数据">
        <!-- 表头行 -->
        <uni-tr>
          <uni-th width="15" align="center">检查项目</uni-th>
          <uni-th width="15" align="center">结果</uni-th>
          <uni-th width="15" align="center">参考值</uni-th>
        </uni-tr>
        <!-- 表格数据行 -->
        <uni-tr v-for="(item, index) in info" :key="index">
          <uni-td>{{ item.itemName }}</uni-td>
          <uni-td>{{ item.result }}</uni-td>
          <uni-td>{{ item.resultRange }}</uni-td>
        </uni-tr>
      </uni-table>
    </view>
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
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
<style lang="scss">
</style>
