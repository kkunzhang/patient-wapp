<template>
  <view class="pics">
    <scroll-view class="left" scroll-y>
      <view
        @click="leftClickHandle(index, item.deptId)"
        :class="active === index ? 'active' : ''"
        v-for="(item, index) in list"
        :key="item.deptId"
      >
        {{ item.deptName }}
      </view>
    </scroll-view>
    <scroll-view class="right" @click="onClick(infoData)" scroll-y>
      <text class="item">{{ infoData.deptName }}</text>
    </scroll-view>
  </view>
</template>

<script>
import { getDept } from '@/api/modules/registration'
export default {
  data() {
    return {
      active: 0,
      infoData: [],
      params: {
        deptId: '',
        date: '',
      },
      list: [],
    }
  },
  methods: {
    async getDept() {
      const params = {
        deptId: this.params.deptId,
        date: this.params.date,
      }
      const data = await getDept(params)
      this.list = data.data
      this.leftClickHandle(0, this.list[0].deptId)
    },
    async leftClickHandle(index, id) {
      this.active = index
      this.infoData = this.list[index]
    },
    onClick(item) {
      if (item) {
        uni.navigateTo({
          url: '/pages/selectNum/index?id=' + item.deptId,
        })
      }
    },
  },
  onLoad() {
    this.getDept()
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
      font-size: $uni-font-size-h3;
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
    margin: 1rpx auto;
    background: #fff;
    .item {
      height: 60px;
      line-height: 60px;
      color: #333;
      text-align: center;
      font-size: $uni-font-size-h3;
      margin-left: 20px;
    }
  }
}
</style>
