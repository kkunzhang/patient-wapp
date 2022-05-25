<template>
  <view>
    <u-skeleton rows="10" :loading="loading" :animate="true" :title="false">
      <u-empty
        v-if="info.length === 0"
        mode="data"
        icon="/static/images/none.png"
      >
        暂无数据
      </u-empty>
      <view v-else>
        <refund-card
          :list="info"
          @onClick="getDetail"
          :isShowPayTime="true"
        ></refund-card>
      </view>
    </u-skeleton>
  </view>
</template>
<script>
import refundCard from './components/refund-card.vue'
import { getrefundsList } from '@/api/modules/refund'
export default {
  components: { refundCard },
  data() {
    return {
      info: [],
      page: '1',
      pageSize: '10',
      flag: false,
      loading: true,
    }
  },
  methods: {
    onClean() {
      this.info = []
      this.page = '1'
    },
    //获取详细信息
    async getDetail(item) {
      uni.navigateTo({
        url: `/pages/refund/detail?applyNo=${item.applyNo}`,
      })
    },
    async getList() {
      let params = {
        page: this.page,
        pageSize: this.pageSize,
      }
      const data = await getrefundsList(params)
      console.log(data)
      if (data.code == 100000) {
        this.info = [...this.info, ...data.data.records]
        console.log(this.info)
      }
      this.loading = false
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
    this.onClean()
    this.getList()
    setTimeout(() => {
      this.loading = false
    }, 3000)
  },
  onUnload() {
    // 如果多端发布的话判断一下当前操作的客户端
    //#ifdef MP-WEIXIN
    wx.switchTab({
      url: '/pages/user/index',
    })
    //#endif
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