<template>
  <view class="container">
    <!-- 顶部日期 -->
    <view class="box-outside-warp">
      <view
        @click="onClick(index, item.id)"
        v-for="(item, index) in info"
        :key="index"
      >
        <!--  -->
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
export default {
  components: {
    card,
  },
  data() {
    return {
      active: 0,
      info1: [{ id: 1 }, { id: 2 }],
      info: [
        {
          id: 1,
          time: '11',
          week: '周2',
          status: 0,
        },
        {
          id: 1,
          time: '12',
          week: '周3',
          status: 1,
        },
        {
          id: 1,
          time: '13',
          week: '周4',
          status: 0,
        },
        {
          id: 1,
          time: '14',
          week: '周5',
        },
        {
          id: 1,
          time: '15',
          week: '周六',
        },
        {
          id: 1,
          time: '16',
          week: '周日',
        },
        {
          id: 1,
          time: '17',
          week: '周一',
        },
      ],
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },
  methods: {
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
    background-color: lightskyblue;
    border-radius: 15rpx;
    box-shadow: 0 2rpx 6rpx rgba(0, 0, 0, 0.12), 0 2rpx 4rpx rgba(0, 0, 0, 0.24);
  }
  .active {
    background: rgb(0, 121, 254) !important;
    color: #fff;
  }
  .activeUnUse {
    background: rgb(170, 170, 170) !important;
    color: #fff;
  }
}
</style>
