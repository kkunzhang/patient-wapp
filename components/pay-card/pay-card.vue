<template>
  <view>
    <view v-for="(item, index) in list" @click="onClick(item)" :key="index">
      <uni-card class="my-uni-card">
        <view class="card-item-add">
          <view style="font-size: large">{{ item.prescriptionTime }}</view>
          <view style="display: flex">
            <view class="right-tips">待支付 </view>
            <!-- <count-down v-if="isShowPayTime"></count-down> -->
          </view>
        </view>
        <view class="item-font-spacing">
          <view>
            <text>处方编号</text>
            <text>{{ item.prescriptionId }}</text>
          </view>
          <view>
            <text>开单科室</text>
            <text>{{ item.deptName }}</text>
          </view>
          <view>
            <text>执行科室</text>
            <text>{{ item.materialDeptName }}</text>
          </view>
          <view>
            <text>订单金额</text>
            <text>￥{{ item.totalFee }}</text>
          </view>
        </view>
        <view class="card-num">
          <view>{{ item.type }} </view>
          <!-- <view v-if="isShowPayTime">
            <button
              class="mini-btn"
              @click="onClick()"
              type="primary"
              size="mini"
            >
              去支付
            </button>
          </view> -->
        </view>
      </uni-card>
    </view>
  </view>
</template>

<script>
import countDown from './count-down.vue'
export default {
  components: { countDown },
  data() {
    return {}
  },
  methods: {
    onClick(val) {
      this.$emit('onClick', val)
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
