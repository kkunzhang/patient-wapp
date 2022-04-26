<template>
  <view>
    <uni-swiper-dot
      @clickItem="clickItem"
      :info="info"
      :current="current"
      :mode="mode"
      field="content"
      :dotsStyles="dotsStyles"
    >
      <swiper
        autoplay="true"
        class="swiper-box"
        @change="change"
        :current="swiperDotIndex"
      >
        <swiper-item
          class="swiper-item"
          v-for="(item, index) in info"
          :key="index"
        >
          <view>
            <image :src="item.url" mode="aspectFit" style="width: 100%" />
          </view>
        </swiper-item>
      </swiper>
    </uni-swiper-dot>
  </view>
</template>

<script>
// 搜索
export default {
  name: 'search',
  data() {
    return {
      info: [
        {
          url: '/static/images/banner1.jpg',
          content: '内容 A',
        },
        {
          url: '/static/images/banner1.jpg',
          content: '内容 B',
        },
      ],
      current: 0,
      mode: 'default', //default 、round 、 indexes、nav
      swiperDotIndex: 0,
      dotsStyles: {
        backgroundColor: 'rgba(60,179,113,0.3)',
        border: '1px rgba(60,179,113,0.3) solid',
        color: '#fff',
        selectedBackgroundColor: 'rgba(60,179,113,0.9)',
        selectedBorder: '1px rgba(60,179,113,0.9) solid',
      },
    }
  },
  props: {
    fill: {
      type: Boolean,
      default: false,
    },
    bgColor: {
      type: String,
      default: '#FFFFFF',
    },
    placeholder: {
      type: String,
      default: '输入科室、医生姓名搜医生',
    },
  },
  methods: {
    change(e) {
      this.current = e.detail.current
    },
    clickItem(e) {
      this.swiperDotIndex = e
    },
  },
}
</script>

<style lang="scss">
.swiper-box {
  // height: 250rpx;
  .swiper-item {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
  }
}
</style>

