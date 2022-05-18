<template>
  <view class="page">
    <uni-card :border="false">
      <view @click="onClick()" class="center-item">
        <view>
          <view class="card-item-add">
            <text>{{ list.name || list.patientName }}</text>
            <view>{{ list.phone || list.phone }}</view>
          </view>
          <view class="fir-card-top">
            <text>{{ list.sex || list.patientGender }} </text>
            <text>{{ list.age || list.patientAge }} 岁 </text>
            <text>{{ list.birthday || list.birthday }} </text>
          </view>
        </view>
        <slot><view v-if="isShowButton" class="gl"></view></slot>
      </view>
    </uni-card>
  </view>
</template>

<script>
import { debounce } from '@utils/utils'
export default {
  data() {
    return {}
  },
  methods: {
    onClick: debounce(function (item) {
      this.$emit('openPop', 1)
    }),
  },
  props: {
    list: {
      type: Object,
      default() {
        return {}
      },
    },
    isShowButton: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
<style lang="scss">
.center-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .card-item-add {
    display: flex;
    text {
      font-size: $uni-font-size-h1;
      color: #333333;
      font-weight: 500;
      margin-right: 30rpx;
    }
    view {
      font-size: $uni-font-size-h3;
    }
  }
  .fir-card-top {
    display: flex;
    flex-wrap: wrap;
    margin-top: 12rpx;
    text {
      margin-right: 30rpx;
      font-size: $uni-font-size-h3;
    }
  }
}
</style>
