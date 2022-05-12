<template>
  <view>
    <view class="fir-card-top-warp">
      <view class="fir-card-top">
        <view class="fir-card-top-item">
          <uni-title type="h1" color="black" :title="list.name"></uni-title>
        </view>
        <view class="fir-card-top-item">
          <uni-tag
            text="未绑定医保卡"
            type="success"
            :circle="true"
            inverted
          ></uni-tag>
        </view>
        <view class="fir-card-top-item">
          <uni-tag
            v-if="list.isDefault"
            text="默认"
            inverted
            type="error"
            :circle="true"
          ></uni-tag>
        </view>
      </view>
      <view class="fir-card-top">
        <text class="sec-card-top-item">{{ list.sex }}</text>
        <text class="sec-card-top-item">{{ list.age }} 岁 </text>
        <text class="sec-card-top-item">{{ list.phone }} </text>
        <text class="sec-card-top-item"
          >就诊卡号:{{ list.hospitalCardId }}
        </text>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
    }
  },
  methods: {},
  props: {
    list: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
