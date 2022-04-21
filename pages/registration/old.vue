<template>
  <view class="pics">
    <scroll-view class="left" scroll-y>
      <view
        @click="leftClickHandle(index, item.id)"
        :class="active === index ? 'active' : ''"
        v-for="(item, index) in cates"
        :key="item.id"
      >
        {{ item.title }}
      </view>
    </scroll-view>
    <scroll-view class="right" scroll-y>
      <view class="item" v-for="item in secondData" :key="item.id">
        <!-- <image @click="previewImg(item.img_url)" :src="item.img_url"></image> -->
        <text @click="onClick(item)">{{ item.title }}</text>
      </view>
      <text v-if="secondData.length === 0">暂无数据</text>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      cates: [
        { id: 1, title: '内科', path: '/static/images/space.png' },
        {
          id: 2,
          title: '外科',
          path: '/static/images/commonknowledge.png',
        },
        { id: 3, title: '骨科', path: '/static/images/space.png' },
        {
          id: 4,
          title: '复产科',
          path: '/static/images/commonknowledge.png',
        },
      ],
      active: 0,
      secondData: [
        { id: 1, title: '医生空间', path: '/static/images/space.png' },
      ],
      secondData1: [
        { id: 1, title: '医生空间', path: '/static/images/space.png' },
        { id: 2, title: '啊实打实', path: '/static/images/space.png' },
        { id: 3, title: 'a啊实打', path: '/static/images/space.png' },
        { id: 4, title: '和广泛地', path: '/static/images/space.png' },
      ],
    }
  },
  methods: {
    // async getPicsCate() {
    //   const res = await this.$myRuquest({
    //     url: '/api/getimgcategory',
    //   })
    //   this.cates = res.data.message
    //   this.leftClickHandle(0, this.cates[0].id)
    // },
    // async leftClickHandle(index, id) {
    //   this.active = index
    //   // 获取右侧的数据
    //   const res = await this.$myRuquest({
    //     url: '/api/getimages/' + id,
    //   })
    //   this.secondData = res.data.message
    // },
    async getCate() {
      this.leftClickHandle(0, this.cates[0].id)
    },
    async leftClickHandle(index, id) {
      this.active = index
      this.secondData = []

      this.secondData.push(this.secondData1[index])
    },
    //预览图片
    // previewImg(current) {
    //   const urls = this.secondData.map((item) => {
    //     return item.img_url
    //   })
    //   uni.previewImage({
    //     current,
    //     urls,
    //   })
    // },
    onClick(item) {
      uni.navigateTo({
        url: '/pages/selectNum/index?id=' + item.id,
      })
    },
  },
  onLoad() {
    // this.getPicsCate()
    this.getCate()
  },
}
</script>

<style lang="scss">
page {
  height: 100%;
}
.pics {
  height: 100%;
  display: flex;
  .left {
    width: 300rpx;
    height: 100%;
    border-right: 1px solid #f2f2f2;
    background-color: #f2f2f2;

    view {
      height: 60px;
      line-height: 60px;
      color: #333;
      text-align: center;
      font-size: 30rpx;
      border-top: 1px solid #eee;
    }
    .active {
      background: #fff;
      color: rgb(102, 51, 255);
    }
  }
  .right {
    height: 100%;
    width: 520rpx;
    margin: 10rpx auto;
    background: #fff;
    .item {
      image {
        width: 520rpx;
        height: 520rpx;
        border-radius: 5px;
      }
      text {
        font-size: 60rpx;
        height: 60px;
        line-height: 60px;
        color: #333;
        text-align: center;
        font-size: 35rpx;
      }
    }
  }
}
</style>
