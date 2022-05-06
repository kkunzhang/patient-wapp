<template>
  <view class="page">
    <card-item :isShowButton="false" :list="defaultPatientList"> </card-item>
    <!--选项卡-->
    <uni-card class="my-uni-card">
      <uni-segmented-control
        :current="current"
        :values="items"
        @clickItem="onClickItem"
        styleType="button"
      ></uni-segmented-control>
      <!-- 检查报告 0-->
      <view v-show="current === 0">
        <contro-list :info="info" @onClick="onClick"></contro-list>
      </view>
      <!-- 检验报告 1-->
      <view v-show="current === 1">
        <contro-list :info="info" @onClick="onClick"></contro-list>
      </view>
    </uni-card>
  </view>
</template>

<script>
import controList from './components/contro-list.vue'
import cardItem from '@/components/card-item/card-item.vue'
import {
  getReportResult,
  getReportLisDetail,
  getReportPacsDetail,
} from '@api/modules/report'
export default {
  data() {
    return {
      items: ['检查报告', '检验报告'],
      current: 0,
      info: [],
      show: false,
      patientId: '',
      defaultPatientList: {},
    }
  },
  components: { cardItem, controList },
  methods: {
    onClickItem(e) {
      console.log(e)
      if (this.current != e.currentIndex) {
        this.current = e.currentIndex
      }
      this.getReportList()
    },
    onClick(item) {
      uni.navigateTo({
        url: `/pages/seeReport/detail?data=${encodeURIComponent(
          JSON.stringify(item)
        )}&type=${this.current}&patientId=${this.defaultPatientList.patientId}`,
      })
    },
    //获取就诊人信息
    getPatientInfo(options) {
      let data = JSON.parse(decodeURIComponent(options.data))
      console.log(data)
      this.defaultPatientList = data
      this.getReportList()
    },
    async getReportList() {
      const _this = this
      const params = {
        type: _this.current,
        // patientId: this.defaultPatientList.patientId,
        // todo删除假数据
        patientId: '005155',
      }
      const data = await getReportResult(params)
      _this.info = data.data
      console.log(data.data)
    },
  },
  onLoad(options) {
    this.getPatientInfo(options)
  },
}
</script>

