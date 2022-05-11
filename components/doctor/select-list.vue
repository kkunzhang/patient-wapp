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
      <view v-for="item in secondData" :key="item.id">
        <text @click="onClick(item)">{{ item.title }}</text>
      </view>
      <u-empty
        v-if="secondData.length === 0"
        mode="data"
        icon="/static/images/none.png"
      >
        暂无数据
      </u-empty>
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
        {
          id: 5,
          title: '复产科',
          path: '/static/images/commonknowledge.png',
        },
        {
          id: 6,
          title: '复产科',
          path: '/static/images/commonknowledge.png',
        },
        {
          id: 7,
          title: '复产科',
          path: '/static/images/commonknowledge.png',
        },
      ],
      active: 0,
      secondData: [
        { id: 1, title: '心内科门诊', path: '/static/images/space.png' },
      ],
      secondData1: [
        { id: 1, title: '风湿门诊', path: '/static/images/space.png' },
        { id: 2, title: '内分泌门诊', path: '/static/images/space.png' },
        { id: 3, title: '神经内科门诊', path: '/static/images/space.png' },
        { id: 4, title: '呼吸介入门诊', path: '/static/images/space.png' },
      ],
    }
  },
  methods: {
    async getCate() {
      this.leftClickHandle(0, this.cates[0].id)
    },
    async leftClickHandle(index, id) {
      this.active = index
      this.secondData = []
      if (this.secondData1[index]) {
        this.secondData.push(this.secondData1[index])
      }
    },
    onClick(item) {
      this.$emit('getSelectItem', item)
    },
  },
  onLoad() {
    this.getCate()
  },
}
</script>

<style lang="scss">
.pics {
  height: 100%;
  display: flex;
  .left {
    width: 300rpx;
    height: 100%;
    border-right: 1px solid #f2f2f2;
    background-color: #f2f2f2;
    view {
      height: 110rpx;
      line-height: 110rpx;
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
    background: #fff;
    text {
      height: 110rpx;
      line-height: 110rpx;
      color: #333;
      text-align: center;
      font-size: 30rpx;
    }
  }
}
</style>
