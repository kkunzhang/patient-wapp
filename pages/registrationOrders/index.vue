<template>
  <view>
    <u-tabs
      :list="tabBars"
      lineWidth="40"
      lineColor="#f56c6c"
      :activeStyle="{
        color: '#303133',
        fontWeight: 'bold',
        transform: 'scale(1.05)',
      }"
      :inactiveStyle="{
        color: '#606266',
        transform: 'scale(1)',
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
      <pay-card
        :list="info"
        @onClick="getInfo"
        :isShowPayTime="true"
      ></pay-card>
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
      info: {
        code: 10000,
        msg: '',
        data: {
          records: [
            {
              registrationId: 273,
              registrationNo: '0000000001',
              registerData: '2022-04-29 00:00:00',
              patientId: '123',
              patientName: null,
              doctorTitle: '主任医师',
              doctorName: '杨有川',
              deptName: '专家门诊三',
              paidFee: 12,
              registerType: '免挂号费',
              registrationStatus: 10,
            },
            {
              registrationId: 273,
              registrationNo: '0000000001',
              registerData: '2022-04-29 00:00:00',
              patientId: '123',
              patientName: null,
              doctorTitle: '主任医师',
              doctorName: '杨有川',
              deptName: '专家门诊三',
              paidFee: 12,
              registerType: '免挂号费',
              registrationStatus: 10,
            },
            {
              registrationId: 273,
              registrationNo: '0000000001',
              registerData: '2022-04-29 00:00:00',
              patientId: '123',
              patientName: null,
              doctorTitle: '主任医师',
              doctorName: '杨有川',
              deptName: '专家门诊三',
              paidFee: 12,
              registerType: '免挂号费',
              registrationStatus: 10,
            },
            {
              registrationId: 273,
              registrationNo: '0000000001',
              registerData: '2022-04-29 00:00:00',
              patientId: '123',
              patientName: null,
              doctorTitle: '主任医师',
              doctorName: '杨有川',
              deptName: '专家门诊三',
              paidFee: 12,
              registerType: '免挂号费',
              registrationStatus: 10,
            },
            {
              registrationId: 273,
              registrationNo: '0000000001',
              registerData: '2022-04-29 00:00:00',
              patientId: '123',
              patientName: null,
              doctorTitle: '主任医师',
              doctorName: '杨有川',
              deptName: '专家门诊三',
              paidFee: 12,
              registerType: '免挂号费',
              registrationStatus: 10,
            },
            {
              registrationId: 273,
              registrationNo: '0000000001',
              registerData: '2022-04-29 00:00:00',
              patientId: '123',
              patientName: null,
              doctorTitle: '主任医师',
              doctorName: '杨有川',
              deptName: '专家门诊三',
              paidFee: 12,
              registerType: '免挂号费',
              registrationStatus: 10,
            },
            {
              registrationId: 273,
              registrationNo: '0000000001',
              registerData: '2022-04-29 00:00:00',
              patientId: '123',
              patientName: null,
              doctorTitle: '主任医师',
              doctorName: '杨有川',
              deptName: '专家门诊三',
              paidFee: 12,
              registerType: '免挂号费',
              registrationStatus: 10,
            },
            {
              registrationId: 273,
              registrationNo: '0000000001',
              registerData: '2022-04-29 00:00:00',
              patientId: '123',
              patientName: null,
              doctorTitle: '主任医师',
              doctorName: '杨有川',
              deptName: '专家门诊三',
              paidFee: 12,
              registerType: '免挂号费',
              registrationStatus: 10,
            },
            {
              registrationId: 273,
              registrationNo: '0000000001',
              registerData: '2022-04-29 00:00:00',
              patientId: '123',
              patientName: null,
              doctorTitle: '主任医师',
              doctorName: '杨有川',
              deptName: '专家门诊三',
              paidFee: 12,
              registerType: '免挂号费',
              registrationStatus: 10,
            },
            {
              registrationId: 273,
              registrationNo: '0000000001',
              registerData: '2022-04-29 00:00:00',
              patientId: '123',
              patientName: null,
              doctorTitle: '主任医师',
              doctorName: '杨有川',
              deptName: '专家门诊三',
              paidFee: 12,
              registerType: '免挂号费',
              registrationStatus: 10,
            },
            {
              registrationId: 273,
              registrationNo: '0000000001',
              registerData: '2022-04-29 00:00:00',
              patientId: '123',
              patientName: null,
              doctorTitle: '主任医师',
              doctorName: '杨有川',
              deptName: '专家门诊三',
              paidFee: 12,
              registerType: '免挂号费',
              registrationStatus: 10,
            },
            {
              registrationId: 273,
              registrationNo: '0000000001',
              registerData: '2022-04-29 00:00:00',
              patientId: '123',
              patientName: null,
              doctorTitle: '主任医师',
              doctorName: '杨有川',
              deptName: '专家门诊三',
              paidFee: 12,
              registerType: '免挂号费',
              registrationStatus: 10,
            },
            {
              registrationId: 273,
              registrationNo: '0000000001',
              registerData: '2022-04-29 00:00:00',
              patientId: '123',
              patientName: null,
              doctorTitle: '主任医师',
              doctorName: '杨有川',
              deptName: '专家门诊三',
              paidFee: 12,
              registerType: '免挂号费',
              registrationStatus: 10,
            },
            {
              registrationId: 273,
              registrationNo: '0000000001',
              registerData: '2022-04-29 00:00:00',
              patientId: '123',
              patientName: null,
              doctorTitle: '主任医师',
              doctorName: '杨有川',
              deptName: '专家门诊三',
              paidFee: 12,
              registerType: '免挂号费',
              registrationStatus: 10,
            },
            {
              registrationId: 273,
              registrationNo: '0000000001',
              registerData: '2022-04-29 00:00:00',
              patientId: '123',
              patientName: null,
              doctorTitle: '主任医师',
              doctorName: '杨有川',
              deptName: '专家门诊三',
              paidFee: 12,
              registerType: '免挂号费',
              registrationStatus: 10,
            },
          ],
          page: 1,
          pageSize: 10,
          pageCount: 1,
          totalCount: 1,
          hasNext: false,
        },
      },
      // 订单状态：
      // 10  待付款
      // 20 已取消
      // 50 已完成
      // 不传全部
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
      type: '',
    }
  },
  methods: {
    onClick(item) {
      this.getList(item.id)
      this.type = item.name
      console.log('222')
    },
    getInfo(item) {
      //todo 刁刁借口获取全部数句
      uni.navigateTo({
        url: `/pages/registrationInfo/index?patientId=${item.patientId}&registrationId=${item.registrationId}`,
      })
    },
    async getList(type = '') {
      let params = {
        registrationStatus: type,
        page: '1',
        pageSize: '10',
      }
      const data = await reservationList(JSON.stringify(params))
      if (data.data.length > 0) {
        this.info = data.data.records
      }
    },
    //分页
    onReachBottom() {
      console.log('触底请求下一页')
      if (this.info.length < this.page * this.pageSize) {
        return (this.flag = true)
      } else {
        this.page++
        this.getList()
      }
    },
  },
  onLoad(options) {
    // this.getList()
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