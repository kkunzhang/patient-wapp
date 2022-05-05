<template>
  <view class="container">
    <view class="title">报告查询</view>
    <view>
      <u-skeleton rows="2" :loading="loading" :animate="true" :title="false">
        <!-- 无默认就诊人 -->
        <add-visiter
          v-if="!patientId"
          :isAdd="false"
          @isShowItemList="isShowItemList"
          >选择就诊人</add-visiter
        >
        <!-- 默认就诊人 -->
        <card-item v-else @openPop="onOpen" :list="defaultPatientList">
        </card-item>
      </u-skeleton>
    </view>

    <!-- 查询按钮 -->
    <view class="button">
      <button type="primary" @click="onClick()">查询</button>
    </view>
    <!-- 描述 -->
    <view class="bt-bottom">
      <span v-html="content"> {{ content }} </span>
    </view>
    <!-- 弹窗 -->
    <card-pop
      :isShow="show"
      @closePop="closePop"
      @submitPatientId="submitPatientId"
      :items="patientList"
    ></card-pop>
  </view>
</template>

<script>
import addVisiter from '@/components/add-visiter/add-visiter.vue'
import cardPop from '@/components/card-pop/card-pop.vue'
import cardItem from '@/components/card-item/card-item.vue'
import { getPatientList } from '@/api/modules/user'
export default {
  components: { addVisiter, cardPop, cardItem },
  data() {
    return {
      info: [{ id: 1 }, { id: 2 }],
      show: false,
      patientId: '',
      patientList: [],
      defaultPatientList: [],
      loading: true,
      content: `温馨提示 <br>
      1、仅支持待缴费用的查询。<br>

      2、目前仅支持非医保患者在线缴费，医保患者请到院内自助机或窗口缴费。<br>

      3、目前仅支持挂号、检查、检验、处方和线上服务待缴费用查询和缴费。其他待缴费用请到院内自助机或窗口缴费。<br>

      4、缴费有效期与线下缴费单一致，若在有效期内超时未交费，则查询不到该待缴项目信息。线上服务不受限制。<br>

      5、请注意，待缴明细中若涉及到需要人工划价的项目，请到医院人工窗口划价后再进行缴费<br>`,
    }
  },
  methods: {
    onClick(val) {
      uni.navigateTo({
        url:
          `/pages/seeReport/list?data=` +
          encodeURIComponent(JSON.stringify(this.defaultPatientList)),
      })
    },
    isShowItemList(val) {
      if (val) {
        this.show = true
      }
    },
    closePop(val) {
      this.show = false
    },
    onOpen() {
      this.show = true
    },
    //获取就诊人列表
    async getTenantPatientList() {
      const params = {}
      const data = await getPatientList(params)
      if (data.data.records) {
        this.patientList = data.data.records
        this.checkDefaultPatient(data.data.records)
      }
      console.log(data)
    },
    //判断默认就诊人
    checkDefaultPatient(data) {
      this.patientId = ''
      data.forEach((element) => {
        if (element.isDefault) {
          this.patientId = element.patientId
          this.defaultPatientList = element
          return
        }
      })
      if (!this.patientId) {
        this.patientId = data[0].patientId
        this.defaultPatientList = data[0]
      }
      this.loading = false
    },
    submitPatientId(val) {
      if (val) {
        this.defaultPatientList = val
      }
      this.show = false
      this.$tools.toast('操作成功', 'suc')
    },
  },
  onLoad(options) {
    this.getTenantPatientList()
  },
}
</script>
<style lang="scss">
.container {
  .title {
    display: flex;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
    font-weight: 700;
    font-style: normal;
    padding: 200rpx 20rpx 60rpx;
    font-size: 60rpx;
  }
  .button {
    margin: 22rpx;
    padding-top: 40rpx;
  }
  .bt-bottom {
    text-align: left;
    margin: 22rpx;
    padding-top: 40rpx;
  }
}
</style>
