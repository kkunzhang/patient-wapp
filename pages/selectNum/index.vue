<template>
  <view class="container">
    <!-- 顶部日期 -->
    <select-date :dataInfo="dataInfo" @onClick="onClickDate"></select-date>
    <!-- 通告 -->
    <uni-notice-bar
      showIcon="true"
      scrollable="true"
      single="true"
      :speed="50"
      text="医生出诊时间      08:00-12:00    14:30-17:30"
    ></uni-notice-bar>

    <!-- 医生号源信息 -->
    <u-skeleton rows="10" :loading="loading" :animate="true" :title="false">
      <view v-for="(item, index) in reservationList" :key="index">
        <card :info="item" @onClick="order"></card>
      </view>
      <u-empty
        v-if="reservationList.length === 0"
        mode="data"
        icon="/static/images/none.png"
      >
        暂无医生出诊
      </u-empty>
    </u-skeleton>
  </view>
</template>
<script>
import card from '@/components/doctor/card.vue'
import selectDate from './components/select-date.vue'
import { formatWeekInfo } from '@utils/utils'
import { getReservation } from '@/api/modules/onlinePay'
export default {
  components: {
    card,
    selectDate,
  },
  data() {
    return {
      dataInfo: [],
      deptId: '',
      reservationList: [], //号源列表
      icon: '/static/images/none.png',
      dateIndex: 0,
      loading: true,
    }
  },
  onLoad(options) {
    this.deptId = options.id
    //获取七天后时间
    this.dataInfo = formatWeekInfo()
  },
  methods: {
    //获取号源
    async getReservation(index, isLoading = false) {
      const params = {
        deptId: this.deptId,
        doctorId: '',
        date: index
          ? this.dataInfo[index]['infoTime']
          : this.dataInfo[0]['infoTime'],
      }
      const data = await getReservation(params, isLoading)
      if (data.data.length > 0) {
        this.reservationList = data.data
      } else {
        this.reservationList = []
      }
      this.loading = false
    },
    // 预约
    order(val) {
      uni.navigateTo({
        url: `/pages/messageConfirm/index?data=${encodeURIComponent(
          JSON.stringify(val)
        )}&deptId=${this.deptId}`,
      })
    },
    onClickDate(index) {
      this.dateIndex = index
      this.getReservation(index)
    },
  },
  onShow() {
    //获取号源
    this.getReservation(this.dateIndex, true)
    setTimeout(() => {
      this.loading = false
    }, 3000)
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
