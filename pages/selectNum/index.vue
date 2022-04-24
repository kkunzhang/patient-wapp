<template>
  <view class="container">
    <!-- 顶部日期 -->
    <view class="box-outside-warp">
      <view
        @click="onClick(index, item)"
        v-for="(item, index) in dataInfo"
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
    <view v-for="(item, index) in reservationList" :key="index">
      <card :info="item" @onClick="order"></card>
    </view>
    <text v-if="reservationList.length === 0">暂无数据</text>
  </view>
</template>
<script>
import card from '@/components/doctor/card.vue'
import { formatWeekInfo } from '@utils/utils'
import { getReservation } from '@/api/modules/registration'
export default {
  components: {
    card,
  },
  data() {
    return {
      active: 0,
      dataInfo: [],
      doctorList: [],
      deptId: '',
      reservationList: [], //号源列表
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.deptId = options.id
    //获取七天后时间
    const ret = formatWeekInfo()
    this.dataInfo = ret
    //获取号源
    this.getReservation()
  },
  methods: {
    //获取号源
    async getReservation(site) {
      this.reservationList = []
      const params = {
        deptId: this.deptId,
        doctorId: '',
        date: site
          ? this.dataInfo[site]['infoTime']
          : this.dataInfo[0]['infoTime'],
      }
      const data = await getReservation(params)
      if (data.data.length > 0) {
        this.reservationList = data.data
      }
      console.log(this.reservationList)
    },
    getMyClass(index, item) {
      let boxClass
      if (this.active === index && !item.status) {
        boxClass = 'box-outside active'
      } else if (item.status) {
        //置灰
        boxClass = 'box-outside activeUnUse'
      } else {
        boxClass = 'box-outside'
      }
      return boxClass
    },
    order(val) {
      console.log(val)
      uni.navigateTo({
        url:
          `/pages/messageConfirm/index?data=` +
          encodeURIComponent(JSON.stringify(val)),
      })
    },
    async onClick(index, item) {
      this.active = index
      this.getReservation(index)
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
