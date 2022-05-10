<template>
  <view>
    <!-- <u-count-down :time="60 * 60 * 1000" format="mm:ss"></u-count-down> -->
    <u-count-down
      :time="expirationTime"
      format="mm:ss"
      autoStart
      millisecond
      @change="onChange"
    >
      <view class="time">
        <view class="time__custom">
          <text class="time__custom__item">{{ timeData.minutes }}</text>
        </view>
        <text class="time__doc">:</text>
        <view class="time__custom">
          <text class="time__custom__item">{{ timeData.seconds }}</text>
        </view>
      </view>
    </u-count-down>
  </view>
</template>

<script>
export default {
  data() {
    return {
      timeData: {},
      expirationTime: 30 * 60 * 1000,
    }
  },
  methods: {
    onChange(e) {
      this.timeData = e
    },
    runBack() {
      console.log('倒计时created')
      this.expirationTime = this.endTime - this.createTime //计算两日期之间相差的毫秒数
      console.log(this.expirationTime)

      // const nowDate = new Date()
      // let now = nowDate.getTime()
      // // this.expirationTime = endTime - now //计算两日期之间相差的毫秒数
    },
  },
  watch: {
    expirationTime: {
      handler(newVal, oldVal) {
        if (newVal < 0) {
          this.$emit('isTimeOut', 1)
        }
      },
    },
  },
  created() {
    this.runBack()
  },
  props: {
    endTime: {
      type: Number,
      default() {
        return 0
      },
    },
    createTime: {
      type: Number,
      default() {
        return 0
      },
    },
  },
}
</script>

<style lang="scss">
.time {
  @include flex;
  align-items: center;

  &__custom {
    width: 40rpx;
    height: 40rpx;
    background-color: #007aff;
    // background-color: #f29100;
    border-radius: 8rpx;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    justify-content: center;
    align-items: center;

    &__item {
      color: #fff;
      font-size: 24rpx;
      text-align: center;
    }
  }

  &__doc {
    color: #007aff;
    padding: 0rpx 8rpx;
  }

  &__item {
    color: #606266;
    font-size: 30rpx;
    margin-right: 8rpx;
  }
}
</style>