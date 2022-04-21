<template>
  <view class="container">
    <!-- 顶部日期 -->
    <view class="box-outside-warp">
      <view
        @click="onClick(index, item.id)"
        v-for="(item, index) in info"
        :key="index"
      >
        <view :class="[getMyClass(index, item)]">
          <view>{{ item.time }}</view>
          <view>{{ item.week }}</view>
        </view>
      </view>
    </view>
    <!-- 通告 -->
    <uni-notice-bar
      showIcon="true"
      scrollable="true"
      single="true"
      :speed="50"
      text="医生出诊时间      08:00-12:00    14:30-17:30"
    ></uni-notice-bar>
    <!-- 医生号源信息 -->
    <view v-for="(item, index) in info1" :key="index">
      <card @onClick="order"></card>
    </view>
  </view>
</template>
<script>
import card from '@/components/doctor/card.vue'
import { formatDate } from '@utils/utils'
import { getDept, getDoctor, getReservation } from '@/api/modules/registration'
export default {
  components: {
    card,
  },
  data() {
    return {
      active: 0,
      info1: [{ id: 1 }, { id: 2 }],
      info: [],
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.getDate(options)
  },
  methods: {
    getDate() {
      const today = new Date()
      const nextDay = new Date(today)
      // this.info.forEach((element, index) => {
      //   nextDay.setDate(today.getDate() + index)
      //   const week = this.getWeek(nextDay.getDay())
      //   const isToday = this.getWeek(today.getDay())
      //   element.week = isToday == week ? '今天' : week
      //   element.time = nextDay.getDate()
      // })
      const info = []
      for (let index = 0; index < 7; index++) {
        const infoChild = {}
        nextDay.setDate(today.getDate() + index)
        const week = this.getWeek(nextDay.getDay())
        const isToday = this.getWeek(today.getDay())
        infoChild.week = isToday == week ? '今天' : week
        infoChild.time = nextDay.getDate()
        infoChild.id = index
        info.push(infoChild)
      }
      this.info = info
      console.log(info)
    },
    getWeek(days) {
      let week
      switch (days) {
        case 1:
          week = '周一'
          break
        case 2:
          week = '周二'
          break
        case 3:
          week = '周三'
          break
        case 4:
          week = '周四'
          break
        case 5:
          week = '周五'
          break
        case 6:
          week = '周六'
          break
        case 0:
          week = '周日'
          break
      }
      return week
    },
    getMyClass(index, item) {
      let boxClass
      if (this.active === index && !item.status) {
        boxClass = 'box-outside active'
      } else if (item.status) {
        boxClass = 'box-outside activeUnUse'
      } else {
        boxClass = 'box-outside'
      }
      return boxClass
    },
    order(val) {
      console.log(val)
      uni.navigateTo({
        url: '/pages/messageConfirm/index',
      })
    },
    async onClick(index, id) {
      this.active = index
      this.getDate(index)
    },
  },
}
</script>
<style lang="scss">
.box-outside-warp {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .box-outside {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
    padding: 0 25rpx;
    // width: 8vw;
    background-color: #87cefa;
    border-radius: 15rpx;
    box-shadow: 0 2rpx 6rpx rgba(0, 0, 0, 0.12), 0 2rpx 4rpx rgba(0, 0, 0, 0.24);
  }
  .active {
    background: #007aff !important;
    color: #fff;
  }
  .activeUnUse {
    background: #dddddd !important;
    color: #c0c0c0;
  }
}
</style>
