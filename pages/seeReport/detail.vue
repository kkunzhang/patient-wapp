<template>
  <view class="page">
    <uni-row class="demo-uni-row">
      <uni-col>
        <uni-title
          type="h1"
          align="center"
          title="庆阳市西峰区人民医院"
        ></uni-title>
      </uni-col>
      <uni-col>
        <view class="title">影像检查报告单</view>
      </uni-col>
    </uni-row>
    <uni-row class="demo-uni-row">
      <uni-col :span="14">
        <view class="demo-uni-col dark">检查时间 2022-01-02 10:23</view>
      </uni-col>
      <uni-col :span="10">
        <view class="demo-uni-col dark">报告单号 1234567890</view>
      </uni-col>
    </uni-row>
    <u-line color="#2979ff" margin="0 10rpx 20rpx 0"></u-line>
    <uni-row class="demo-uni-row">
      <uni-col :span="8">
        <view class="demo-uni-col dark">姓名 赵云</view>
      </uni-col>
      <uni-col :span="8">
        <view class="demo-uni-col dark">性别 男</view>
      </uni-col>
      <uni-col :span="8">
        <view class="demo-uni-col dark">年龄 32</view>
      </uni-col>
    </uni-row>
    <uni-row class="demo-uni-row">
      <uni-col :span="14" :pull="0">
        <view class="demo-uni-col dark">申请科室 神经外科</view>
      </uni-col>
      <uni-col :span="10">
        <view class="demo-uni-col dark">申请医生 徐景明</view>
      </uni-col>
    </uni-row>
    <u-line color="#2979ff" margin="0 10rpx 20rpx 0"></u-line>
    <!-- 检验报告 ，检查报告 -->
    <view v-if="type == 1">
      <uni-row class="demo-uni-row">
        <uni-col :span="8" :pull="0">
          <view class="demo-uni-col dark">检查项目 </view>
        </uni-col>
        <uni-col :span="12" :pull="0">
          <view class="demo-uni-col dark"> CT</view>
        </uni-col>
      </uni-row>
      <uni-row class="demo-uni-row">
        <uni-col :span="8" :pull="0">
          <view class="demo-uni-col dark">检查部位/方法</view>
        </uni-col>
        <uni-col :span="16" :pull="0">
          <view style="text-align: left">颅脑CT螺旋扫描</view>
        </uni-col>
      </uni-row>
      <uni-row class="demo-uni-row">
        <uni-col :span="8" :pull="0">
          <view class="demo-uni-col dark">影像表现</view>
        </uni-col>
        <uni-col :span="16" :pull="0">
          <view style="text-align: left"
            >脑实质密度未见异常，脑室系统无明显扩张，脑裂、脑沟未见明显增宽、加深，脑中线结构居中</view
          >
        </uni-col>
      </uni-row>
      <uni-row class="demo-uni-row">
        <uni-col :span="8" :pull="0">
          <view class="demo-uni-col dark">影像诊断</view>
        </uni-col>
        <uni-col :span="16" :pull="0">
          <view style="text-align: left">颅脑CT未见异常，请结合临床。</view>
        </uni-col>
      </uni-row>
      <!-- <uni-row class="demo-uni-row">
      <uni-col :span="8" :pull="0">
        <view class="demo-uni-col dark">影像附件</view>
      </uni-col>
      <uni-col :span="16" :pull="0">
        <view style="text-align: left"
          ><uni-link
            href="https://uniapp.dcloud.io/"
            color="blue"
            text="点击查看"
          ></uni-link
        ></view>
      </uni-col>
    </uni-row> -->
    </view>
    <view v-else>
      <!-- 检验表格 -->
      <table-info :info="dataList"></table-info>
    </view>
    <u-line color="#2979ff" margin="0 10rpx 20rpx 0"></u-line>
    <uni-row class="demo-uni-row">
      <uni-col :span="14" :pull="0">
        <view class="demo-uni-col dark">报告医师 王某某</view>
      </uni-col>
      <uni-col :span="10">
        <view class="demo-uni-col dark">审核医师 李某某</view>
      </uni-col>
    </uni-row>
    <uni-row class="demo-uni-row">
      <uni-col :span="14">
        <view class="demo-uni-col dark">检查时间 2022-01-02 10:23</view>
      </uni-col>
      <uni-col :span="10" :push="0">
        <view class="demo-uni-col dark">报告单号 1234567890</view>
      </uni-col>
    </uni-row>
  </view>
</template>

<script>
// import cardItem from './cardItem.vue'
import tableInfo from './table.vue'
export default {
  data() {
    return {
      items: ['检查报告', '检验报告'],
      show: false,
      dataList: '',
      type: '1',
    }
  },
  components: {
    tableInfo,
  },
  methods: {},
  onLoad(options) {
    this.dataList = JSON.parse(decodeURIComponent(options.data))
    console.log(this.dataList)

    this.type = options.type
  },
}
</script>
<style lang="scss">
.page {
  margin-left: 10px;
  // text-align: center;
  .demo-uni-row {
    margin-bottom: 10px;
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
    margin-bottom: 10px;
  }
  /* #endif */

  .demo-uni-col {
    border-radius: 4px;
  }

  .title {
    text-align: center;
  }
  .dark_deep {
    background-color: #99a9bf;
  }
}
</style>
