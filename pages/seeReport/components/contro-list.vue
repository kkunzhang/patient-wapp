<template>
  <view>
    <view
      v-for="(item, index) in info"
      :key="index"
      @click="onClick(item)"
      class="box-content"
    >
      <view class="box-content-item">
        <view>
          <button class="mini-btn" type="primary" size="mini">
            {{ item.reportStatus | filterType }}
          </button>
        </view>
        <view class="box-content-title">
          <view> {{ item.reportName }} </view>
          <view>{{ item.executeDate }}</view>
        </view>
      </view>
      <view class="gl"></view>
    </view>
  </view>
</template>

<script>
import countDown from '@/components/pay-card/count-down.vue'
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
.box-content {
  display: flex;
  padding: 40rpx;
  box-sizing: border-box;
  border-radius: 20rpx;
  background-color: #fff;
  margin: 20rpx 0;
  flex-direction: row;
  background-color: rgba(242, 242, 242, 1);
  align-items: center;
  justify-content: space-between;
  .box-content-item {
    display: flex;
    align-items: center;
  }
  .box-content-title {
    margin-left: 20rpx;
    color: #333333;
    font-size: 35rpx;
    font-family: PingFangSC-Medium, PingFang SC;
  }
}
</style>