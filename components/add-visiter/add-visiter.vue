<template>
  <view>
    <uni-card :border="false">
      <view class="card-item-add" @click="onAdd()">
        <view><uni-icons type="plus-filled" size="30"></uni-icons></view>
        <text> <slot> 添加就诊人</slot></text>
      </view>
    </uni-card>
  </view>
</template>

<script>
// 搜索
export default {
  name: 'cardPop',
  data() {
    return {
      show: false,
    }
  },
  props: {
    isAdd: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: '输入科室、医生姓名搜医生',
    },
  },
  methods: {
    onAdd() {
      if (this.isAdd) {
        uni.navigateTo({
          url: '/pages/addVisit/index',
        })
      } else {
        this.$emit('isShowItemList', 1)
      }
    },
  },
}
</script>
<style lang="scss">
.card-item-add {
  display: flex;
  height: 80rpx;
  line-height: 80rpx;
  text {
    font-size: 38rpx;
    font-weight: 500;
  }
}
</style>

