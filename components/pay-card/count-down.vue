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
      ispay: '',
      expirationTime: 30 * 60 * 1000,
      // expirationTime: 10,
    }
  },
  methods: {
    onChange(e) {
      this.timeData = e
      // minutes: 29
      // seconds: 56
    },
    runBack() {
      console.log('倒计时created')
      const nowDate = new Date()
      let now = nowDate.getTime()
      //   // var endTime = 1649663471073
      //  // now = 1649661671000
      //todo 打开
      // this.expirationTime = endTime - now //计算两日期之间相差的毫秒数
    },
  },
  created() {
    this.runBack()
  },
  props: {
    endTime: {
      type: String,
      default() {
        return ''
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