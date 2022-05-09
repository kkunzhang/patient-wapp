<template>
  <view>
    <uni-card>
      <view style="font-size: large"> <slot>处方明细</slot></view>
      <view style="margin-top: 20rpx">
        <uni-table border stripe emptyText="暂无更多数据">
          <!-- 表头行 -->
          <uni-tr>
            <uni-th width="20" align="left">名称</uni-th>
            <uni-th width="20" align="left">单价</uni-th>
            <uni-th width="20" align="left">数量</uni-th>
            <uni-th width="20" align="left">总额</uni-th>
          </uni-tr>
          <!-- 表格数据行 -->
          <uni-tr v-for="(item, index) in info" :key="index">
            <uni-td>{{ item.itemName }}</uni-td>
            <uni-td>{{ item.price }}</uni-td>
            <uni-td>{{ item.number }}</uni-td>
            <uni-td>{{ item.itemiFee }}</uni-td>
          </uni-tr>
        </uni-table>
      </view>
      <view class="payment-footer">
        <view>
          <text>合计 :</text>
          <text class="price">￥{{ totalFee }}</text>
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
      type: Array,
      default() {
        return []
      },
    },
    totalFee: {
      type: String,
      default() {
        return ''
      },
    },
  },
}
</script>
<style lang="scss">
.payment-footer {
  box-sizing: border-box;
  padding-top: 5rpx;
  text-align: right;
  border-top: 1px solid rgba(245, 246, 248, 1);
  margin-top: 30rpx;
  .price {
    color: rgba(255, 95, 86, 1);
    font-size: 35rpx;
  }
}
</style>
