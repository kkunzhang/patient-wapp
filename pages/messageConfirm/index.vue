<template>
  <view>
    <!--顶部卡片 -->
    <card :isShow="false" :info="doctorInfo"></card>
    <!--添加就诊人 -->
    <view>
      <add-visiter></add-visiter>
      <!-- 已有就诊人，非第一次添加 -->
      <card-item @openPop="onOpen"> </card-item>
    </view>
    <!-- 预约信息 -->
    <uni-card>
      <view style="font-size: large">预约信息</view>
      <view class="item-bottom">
        <view>
          <text>就诊日期</text>
          <text>{{ doctorInfo.registerDate }}</text>
        </view>
        <view>
          <text>就诊科室</text>
          <text>{{ doctorInfo.doctorTag }}</text>
        </view>
        <view>
          <text>就诊地址</text>
          <text>{{ doctorInfo.location }}</text>
        </view>
        <view>
          <text>就诊费用</text>
          <text>￥{{ doctorInfo.registerFee }}</text>
        </view>
      </view>
    </uni-card>
    <!-- 支付信息 -->
    <uni-card>
      <view style="font-size: large">支付信息</view>
      <view class="payment-item">
        <view>
          <text>订单总额</text>
          <text>￥{{ doctorInfo.registerFee }}</text>
        </view>
      </view>
      <!-- <view class="payment-item">
        <view>
          <text>医保报销</text>
          <text v-if="lever == true">-￥5.00</text>
          <text v-if="lever === false">就诊人未绑定医保卡</text>
        </view>
      </view> -->
      <view class="payment-item">
        <view>
          <text>优惠券</text>
          <text>未使用</text>
          <text class="coupon">无可用券</text>
        </view>
      </view>

      <view class="payment-footer">
        <view>
          应付
          <text class="price">￥{{ doctorInfo.registerFee }}</text>
        </view>
      </view>
    </uni-card>
    <!-- 支付方式 -->
    <uni-card class="bottom-pay">
      <view>支付方式</view>
      <view class="weicat">
        <view class="weicat-item">
          <image src="/static/images/weixinzhifu.png"></image>
          <text>微信支付</text>
        </view>
      </view>
    </uni-card>
    <!-- 提交 -->
    <view class="submit-box">
      <button type="primary" @click="onSubmit()">确认挂号</button>
    </view>
    <!-- 弹窗 -->
    <card-pop :isShow="show" @closePop="onClose"></card-pop>
  </view>
</template>
<script>
import card from '@/components/doctor/card.vue'
import cardPop from '@/components/card-pop/card-pop.vue'
import cardItem from '@/components/card-item/card-item.vue'
import addVisiter from '@/components/add-visiter/add-visiter.vue'
import { reservationLock } from '@/api/modules/registration'
import { debounce } from '@utils/utils'
export default {
  components: { card, cardPop, cardItem, addVisiter },
  data() {
    return {
      show: false,
      lever: false,
      doctorInfo: '',
      orderList: {
        registrationId: 1,
        registrationNo: '0000000001',
        userId: null,
        patientId: '005155',
        registrationStatus: null,
        registerData: 1651161600000,
        deptCode: 194,
        deptName: '专家门诊三',
        deptAddress: '专家门诊三',
        registerType: '免挂号费',
        doctorId: '100306',
        doctorScheduleId: '20220421055900',
        doctorTitle: null,
        doctorName: '杨有川',
        hisRegisterId: '20220421312604',
        examinationFee: 0,
        registerFee: 0,
        totalFee: null,
        discountFee: null,
        paidFee: null,
        paidTime: null,
        paymentMethod: null,
        createTime: 1644221332548,
        updateTime: 1644221332548,
      },
    }
  },
  onLoad(options) {
    let data = JSON.parse(decodeURIComponent(options.data))
    this.doctorInfo = data
  },
  methods: {
    onSubmit: debounce(function () {
      this.order()
      // uni.navigateTo({
      //   url: '/pages/registrationInfo/index',
      // })
    }),
    async order() {
      let params = {
        //todo 更换
        doctorScheduleId: '20220421055900',
        // doctorScheduleId: this.doctorInfo.doctorScheduleId,
        //todo 更换
        patientId: '005155',
        //todo 更换
        deptId: '0000000194',
        // deptId: this.doctorInfo.deptId,
        doctorId: this.doctorInfo.doctorId,
        registerData: this.doctorInfo.registerDate,
      }
      // let a = {
      //   code: 10000,
      //   msg: '',
      //   data: {
      //     registrationId: 1,
      //     registrationNo: '0000000001',
      //     userId: null,
      //     patientId: '005155',
      //     registrationStatus: null,
      //     registerData: 1651161600000,
      //     deptCode: 194,
      //     deptName: '专家门诊三',
      //     deptAddress: '专家门诊三',
      //     registerType: '免挂号费',
      //     doctorId: '100306',
      //     doctorScheduleId: '20220421055900',
      //     doctorTitle: null,
      //     doctorName: '杨有川',
      //     hisRegisterId: '20220421312604',
      //     examinationFee: 0,
      //     registerFee: 0,
      //     totalFee: null,
      //     discountFee: null,
      //     paidFee: null,
      //     paidTime: null,
      //     paymentMethod: null,
      //     createTime: 1644221332548,
      //     updateTime: 1644221332548,
      //   },
      // }
      //todo dakai
      // reservationLock(JSON.stringify(params)).then((data) => {
      //   if (data.data.length > 0) {
      //     this.orderList = data.data
      //   }
      // })
    },
    onOpen(val) {
      this.show = true
    },
    onClose(val) {
      this.show = false
    },
  },
}
</script>
<style lang="scss">
.item-bottom view {
  margin-top: 30rpx;
  color: rgba(96, 102, 114, 1);
  text {
    margin-right: 20rpx;
  }
}
.payment-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  margin-top: 35rpx;
  .coupon {
    margin-left: 10rpx;
    color: rgba(145, 149, 158, 0.79);
    border-radius: 16rpx;
    border: 1rpx solid rgba(145, 149, 158, 1);
    font-size: 22rpx;
    padding: 5rpx 10rpx;
    line-height: auto;
  }
  view > text {
    margin-right: 20rpx;
  }
}
.payment-footer {
  box-sizing: border-box;
  padding-top: 20rpx;
  text-align: right;
  border-top: 1px solid rgba(245, 246, 248, 1);
  margin-top: 30rpx;
  .price {
    color: rgba(255, 95, 86, 1);
    font-size: 35rpx;
  }
}
.bottom-pay {
  .weicat {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20rpx;
    & image {
      width: 50rpx;
      height: 50rpx;
      margin-right: 15rpx;
    }
    .weicat-item {
      display: flex;
      align-items: center;
    }
  }
}

.submit-box {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>
