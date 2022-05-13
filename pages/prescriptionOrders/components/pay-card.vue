<template>
  <view>
    <view v-for="(item, index) in list" @click="onClick(item)" :key="index">
      <uni-card class="my-uni-card">
        <view class="card-item-add">
          <view style="font-size: large">{{ item.createTime }}</view>
          <view style="display: flex">
            <view class="right-tips">{{
              item.prescriptionStatus | filterType
            }}</view>
          </view>
        </view>
        <view class="item-font-spacing">
          <view>
            <text>处方编号</text>
            <text>{{ item.prescriptionNo }}</text>
          </view>
          <view>
            <text>就诊患者</text>
            <text>{{ item.patientName }}</text>
          </view>
          <view>
            <text>执行科室</text>
            <text>{{ item.materialDeptName }} </text>
          </view>
          <view>
            <text>订单金额</text>
            <text>￥{{ item.totalFee }}</text>
          </view>
        </view>
        <view class="card-num">
          {{ item.prescriptionType }}
        </view>
      </uni-card>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    onClick(val) {
      this.$emit('onClick', val)
    },
  },
  filters: {
    filterType(value) {
      let type = ''
      if (value == 10) {
        type = '待付款'
      } else if (value == 20) {
        type = '已取消'
      } else if (value == 50) {
        type = '已完成'
      } else if (value == 30) {
        type = '处理中'
      }
      return type
    },
  },
  props: {
    list: {
      type: Array,
      default() {
        return {}
      },
    },
    isShowPayTime: {
      type: Boolean,
      default() {
        true
      },
    },
  },
}
</script>
<style lang="scss">
.card-item-add {
  display: flex;
  justify-content: space-between;
  .right-tips {
    font-size: 32rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    margin-right: 4rpx;
  }
}
.card-num {
  display: flex;
  justify-content: space-between;
  margin-top: 35rpx;
  text {
    margin: 4rpx;
    color: #909399;
    font-weight: 400;
  }
  .mini-btn {
    border-radius: 30rpx !important;
  }
}
</style>
