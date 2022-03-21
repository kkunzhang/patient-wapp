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
      speed="50"
      text="医生出诊时间      08:00-12:00    14:30-17:30"
    ></uni-notice-bar>
    <!-- 医生号源信息 -->
    <uni-card>
      <view class="doctor-num-card">
        <view>
          <u-avatar :src="src" size="80"></u-avatar>
        </view>
        <view class="head-user-info">
          <view class="top-title">
            <uni-title
              type="h1"
              color="#ffffff"
              class="user-name"
              :title="user_name"
            ></uni-title>
            <uni-title
              type="h3"
              color="#ffffff"
              class="user-phone"
              :title="user_phone"
            ></uni-title>
          </view>
        </view>
      </view>
    </uni-card>
  </view>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      src: '/static/images/doctor.jpeg',
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
  components: {},
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
.doctor-num-card {
  .head-pic {
    border-radius: 50%;
    width: 140rpx;
    height: 140rpx;
  }
  .head-user-info {
    padding-left: 20rpx;
    width: 500rpx;
    height: 140rpx;
    .top-title {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
    }
    .user-name {
      margin-top: -24rpx;
    }
    .user-phone {
      margin-top: -60rpx;
    }
  }
}
</style>
