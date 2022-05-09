<template>
  <view>
    <u-tabs
      :list="tabBars"
      lineWidth="40"
      lineColor="#f56c6c"
      :activeStyle="{
        color: '#303133',
        fontWeight: 'bold',
        transform: 'scale(1.05)'
      }"
      :inactiveStyle="{
        color: '#606266',
        transform: 'scale(1)'
      }"
      itemStyle="padding-left: 30px; padding-right: 30px; height: 44px;"
      @click="onClick"
    >
    </u-tabs>
    <view v-if="info.length === 0">
      <view class="holder">
        <p class="tips">暂无挂号信息</p>
      </view>
    </view>
    <view v-else>
      <pay-card :list="info" @onClick="getInfo" :isShowPayTime="true"></pay-card>
      //todo 加倒计时时间
      <!-- :endTime="item.endTime"
              :systemTime="item.systemTime" -->
      <!-- <view class="isOver" v-if="flag">-----我是有底线的-----</view> -->
    </view>
  </view>
</template>
<script>
import payCard from './components/pay-card.vue'
import { reservationList, reservationDetail } from '@/api/modules/registration'
export default {
  components: { payCard },
  data() {
    return {
      info: [],
      tabBars: [
        {
          name: '全部',
          id: '',
        },
        {
          name: '待支付',
          id: '10',
        },
        {
          name: '已完成',
          id: '50',
        },
        {
          name: '已取消',
          id: '20',
        },
      ],
      page: '1',
      pageSize: '10',
      flag: false,
    }
  },
  methods: {
    onClick(item) {
      //清除数据
      this.onClean()
      this.getList(item.id)
      console.log(item)
    },
    onClean() {
      this.info = []
      this.page = '1'
    },
    getInfo(item) {
      //todo 获取全部数句
      uni.navigateTo({
        url: `/pages/registrationInfo/index?registrationNo=${item.registrationNo}`,
      })
    },
    async getList(status = '') {
      let params = {
        registrationStatus: status,
        page: this.page,
        pageSize: this.pageSize,
      }
      const data = await reservationList(params)
      console.log(data)
      if (data.code == 100000) {
        this.info = [...this.info, ...data.data.records]
        console.log(this.info)
      }
    },
    //分页
    onReachBottom() {
      console.log('触底请求下一页')
      if (this.info.length < this.page * this.pageSize) {
        console.log(this.info.length)
        return (this.flag = true)
      } else {
        this.page++
        this.getList()
      }
    },
  },
  onLoad(options) {
    this.getList()
  },
}
</script>
<style lang="scss" scoped>
.holder {
  display: flex;
  align-items: center;
  flex-direction: column;
  .tips {
    color: #ccc;
    font-size: 22px;
    padding-top: 30px;
  }
}
</style>