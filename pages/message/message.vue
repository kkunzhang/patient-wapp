<template>
  <view class="page">
    <view>
      <uni-card
        v-for="(item, index) in info"
        :key="index"
        :title="item.name"
        :sub-title="item.hospitalName"
        :extra="item.departName"
        :thumbnail="item.image"
      >
        <!-- item.title -->
        <text>擅长:{{ item.special }}</text>
      </uni-card>
    </view>
  </view>
</template>

<script>
// pages/message/index.js
export default {
  data() {
    return {
      info: [],
      params: {
        cityCode: '',
        deptCode: '',
        page: 1,
        keyword: '',
        sort: 0,
        caseCode: '',
      },
      header: {
        Authorization: 'Bearer 4733a2eb-0723-41ef-bfa2-2ade373a37c0',
      },
    }
  },
  components: {},
  methods: {
    /**
     * 页面的初始数据
     */
    getData() {
      uni.request({
        url: 'http://api.jiukangguoji.cn/search/v2/recommend-doctor/list',
        data: this.params,
        header: this.header,
        method: 'POST',
        success: (response) => {
          console.log(response.data.data)
          this.changeData(response.data.data)
        },
        fail: (error) => {},
        complete: () => {},
      })
    },
    changeData(data) {
      data.forEach((element) => {
        element.name = element.name + '  ' + element.title
      })
      this.info = data
    },
  },
  onLoad() {
    this.getData()
  },
}
</script>
<style>
</style>
