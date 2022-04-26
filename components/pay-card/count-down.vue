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
      console.log('222')
      var end = 1649663471073
      var nowDate = new Date()
      var now = nowDate.getTime()
      now = 1649661671000
      this.expirationTime = end - now //计算两日期之间相差的毫秒数
    },
  },
  created() {
    this.runBack()
  },
}
</script>

<style lang="scss">
.time {
  @include flex;
  align-items: center;

  &__custom {
    width: 22px;
    height: 22px;
    background-color: #007aff;
    // background-color: #f29100;
    border-radius: 4px;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    justify-content: center;
    align-items: center;

    &__item {
      color: #fff;
      font-size: 12px;
      text-align: center;
    }
  }

  &__doc {
    color: #007aff;
    padding: 0px 4px;
  }

  &__item {
    color: #606266;
    font-size: 15px;
    margin-right: 4px;
  }
}
</style>