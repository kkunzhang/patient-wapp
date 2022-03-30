<template>
  <u-count-down
    :time="30 * 60 * 1000"
    format="HH:mm:ss"
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
</template>

<script>
export default {
  data() {
    return {
      timeData: {},
    }
  },
  methods: {
    onChange(e) {
      this.timeData = e
    },
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
    background-color: #f29100;
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
    color: #f29100;
    padding: 0px 4px;
  }

  &__item {
    color: #606266;
    font-size: 15px;
    margin-right: 4px;
  }
}
</style>