<template>
  <view class="page">
    <!---------------------公共部分 ------------------------------->
    <uni-row class="demo-uni-row">
      <uni-col>
        <uni-title
          type="h1"
          align="center"
          title="庆阳市西峰区人民医院"
        ></uni-title>
      </uni-col>
      <uni-col>
        <view class="title">{{ info.reportName }}</view>
      </uni-col>
    </uni-row>
    <uni-row class="demo-uni-row">
      <uni-col :span="14">
        <view class="demo-uni-col dark"
          >检查时间 : <text>{{ info.examDate || info.writeDate }}</text></view
        >
      </uni-col>
      <uni-col :span="10">
        <view class="demo-uni-col dark"
          >报告单号 : <text>{{ info.reportId }}</text></view
        >
      </uni-col>
    </uni-row>
    <u-line color="#2979ff" margin="0 10rpx 20rpx 0"></u-line>
    <uni-row class="demo-uni-row">
      <uni-col :span="8">
        <view class="demo-uni-col dark"
          >姓名 :<text>{{ info.patientName }}</text></view
        >
      </uni-col>
      <uni-col :span="8">
        <view class="demo-uni-col dark"
          >性别 :<text>{{ info.patientSex }}</text></view
        >
      </uni-col>
      <uni-col :span="8">
        <view class="demo-uni-col dark"
          >年龄 :<text>{{ info.patientAge }}</text></view
        >
      </uni-col>
    </uni-row>
    <uni-row class="demo-uni-row">
      <uni-col :span="14" :pull="0">
        <view class="demo-uni-col dark"
          >申请科室 :<text>{{
            info.writeDeptName || info.deptName
          }}</text></view
        >
      </uni-col>
      <uni-col :span="10">
        <view class="demo-uni-col dark"
          >申请医生 :<text>{{ info.writeDoctorName }}</text></view
        >
      </uni-col>
    </uni-row>
    <u-line color="#2979ff" margin="0 10rpx 20rpx 0"></u-line>
    <!------------------------检查报告部分-------------------->
    <view v-if="type == 0">
      <uni-row class="demo-uni-row">
        <uni-col :span="8" :pull="0">
          <view class="demo-uni-col dark">检查项目 </view>
        </uni-col>
        <uni-col :span="12" :pull="0">
          <view class="demo-uni-col dark"
            ><text>{{ info.reportName }}</text>
          </view>
        </uni-col>
      </uni-row>
      <uni-row class="demo-uni-row">
        <uni-col :span="8" :pull="0">
          <view class="demo-uni-col dark">检查部位/方法</view>
        </uni-col>
        <uni-col :span="16" :pull="0">
          <view style="text-align: left"
            ><text>{{ info.pacsReportItemList[0].execLocation }}</text></view
          >
        </uni-col>
      </uni-row>
      <uni-row class="demo-uni-row">
        <uni-col :span="8" :pull="0">
          <view class="demo-uni-col dark">影像表现</view>
        </uni-col>
        <uni-col :span="16" :pull="0">
          <view style="text-align: left"
            ><text>{{ info.pacsReportItemList[0].reportContent }}</text></view
          >
        </uni-col>
      </uni-row>
      <uni-row class="demo-uni-row">
        <uni-col :span="8" :pull="0">
          <view class="demo-uni-col dark">影像诊断</view>
        </uni-col>
        <uni-col :span="16" :pull="0">
          <view style="text-align: left"
            ><text>{{ info.pacsReportItemList[0].reportDiag }}</text></view
          >
        </uni-col>
      </uni-row>
    </view>
    <view v-else>
      <!---------------------检验表格部分 ------------------------------->
      <table-info :info="info.lisReportItemList"></table-info>
    </view>

    <!---------------------公共部分 ------------------------------->

    <u-line color="#2979ff" margin="0 10rpx 20rpx 0"></u-line>
    <uni-row class="demo-uni-row">
      <uni-col :span="14" :pull="0">
        <view class="demo-uni-col dark"
          >报告医师 :<text>{{
            info.executeDoctorName || info.doctorName
          }}</text></view
        >
      </uni-col>
      <uni-col :span="10">
        <view class="demo-uni-col dark"
          >审核医师 :<text>{{ info.reviewDoctorName }}</text></view
        >
      </uni-col>
    </uni-row>
    <uni-row class="demo-uni-row">
      <uni-col :span="14">
        <view class="demo-uni-col dark"
          >报告时间 :<text>{{
            info.executeDate || info.reportDate
          }}</text></view
        >
      </uni-col>
      <uni-col :span="10" :push="0">
        <view class="demo-uni-col dark"
          >报告单号 :<text>{{ info.reportId }}</text></view
        >
      </uni-col>
    </uni-row>
  </view>
</template>

<script>
import tableInfo from './components/table.vue'
import { getReportLisDetail, getReportPacsDetail } from '@api/modules/report'
export default {
  data() {
    return {
      show: false,
      dataList: '',
      type: '0',
      patientId: '',
      info: {},
    }
  },
  components: {
    tableInfo,
  },
  methods: {
    //检差报告
    async getReportDetail(items) {
      const _this = this
      const params = {
        type: _this.current,
        startDate: items.startDate,
        patientId: items.patientId,
        reportId: items.reportId,
        endDate: items.endDate,
        patientId: this.patientId,
      }
      const data = await getReportPacsDetail(params)
      _this.info = data.data
      console.log(data.data)
    },
    //检验报告
    async getReportLisDetail(items) {
      const _this = this
      const params = {
        startDate: items.startDate,
        reportId: items.reportId,
        endDate: items.endDate,
        patientId: this.patientId,
      }
      const data = await getReportLisDetail(params)
      _this.info = data.data
      console.log(data.data)
    },
    getReport(type) {
      if (type == 0) {
        this.getReportDetail(this.dataList)
      } else if (type == 1) {
        this.getReportLisDetail(this.dataList)
      }
    },
  },
  onLoad(options) {
    this.dataList = JSON.parse(decodeURIComponent(options.data))
    this.type = options.type
    this.patientId = options.patientId
    this.getReport(this.type)
  },
}
</script>
<style lang="scss">
.page {
  margin-left: 20rpx;
  font-size: 24rpx;
  // text-align: center;
  .demo-uni-row {
    margin-bottom: 20rpx;
    /* QQ、字节小程序文档写有 :host，但实测不生效 */
    /* 百度小程序没有 :host，需要设置block */
    /* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
    display: block;
    /* #endif */
  }
  /* 支付宝小程序没有 demo-uni-row 层级 */
  /* 微信小程序使用了虚拟化节点，没有 demo-uni-row 层级 */
  /* #ifdef MP-ALIPAY || MP-WEIXIN */
  /deep/ .uni-row {
    margin-bottom: 20rpx;
  }
  /* #endif */

  .demo-uni-col {
    border-radius: 8rpx;
  }

  .title {
    text-align: center;
    font-size: 40rpx;
  }
  .dark_deep {
    background-color: #99a9bf;
  }
}
</style>
