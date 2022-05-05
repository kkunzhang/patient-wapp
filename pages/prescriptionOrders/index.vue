<template>
  <view>
    <view v-if="info.length === 0">
      <view class="holder">
        <p class="tips">暂无信息</p>
      </view>
    </view>
    <view v-else>
      <pay-card
        :list="info"
        @onClick="getDetail"
        :isShowPayTime="true"
      ></pay-card>
      <view class="isOver" v-if="flag">-----我是有底线的-----</view>
    </view>
  </view>
</template>
<script>
import payCard from './components/pay-card.vue'
import { prescriptionList, prescriptionDetail } from '@/api/modules/onlinePay'
export default {
  components: { payCard },
  data() {
    return {
      info: [],
      page: '1',
      pageSize: '10',
      flag: false,
      prescriptionId: '1234',
    }
  },
  methods: {
    onClean() {
      this.info = []
      this.page = '1'
    },
    onSubmit() {
      console.log('跳转去支付')
      uni.navigateTo({
        url:
          `/pages/onlinepayment/subMessage?data=` +
          encodeURIComponent(JSON.stringify(this.info)),
      })
    },
    //获取详细信息
    async getDetail(item) {
      const params = {
        // prescriptionId: item.prescriptionId,
        //todo 删除
        prescriptionId: 1234,
      }
      const data = await prescriptionDetail(params)
      console.log(data)
      if (data.code == 10000) {
        this.info = { ...data.data, ...params }
        this.goToPage()
      }
    },
    goToPage() {
      uni.navigateTo({
        url:
          `/pages/onlinepayment/subMessage?data=` +
          encodeURIComponent(JSON.stringify(this.info)),
      })
    },
    async getList() {
      let params = {
        page: this.page,
        pageSize: this.pageSize,
      }
      const data = await prescriptionList(params)
      console.log(data)
      if (data.code == 10000) {
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
    this.info = []
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