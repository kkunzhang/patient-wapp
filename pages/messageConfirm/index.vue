<template>
  <view>
    <!--顶部卡片 -->
    <card :isShow="false"></card>
    <!--添加就诊人 -->
    <view>
      <add-visiter></add-visiter>
      <!-- 已有就诊人，非第一次添加 -->
      <card-item @openPop="onOpen"> </card-item>
    </view>
    <!-- 订单名称 -->
    <uni-card>
      <view class="item-bottom">
        <view>
          <text>订单名称</text>
          <text>远程会诊-视频问诊</text>
        </view>
        <view>
          <text>就诊患者</text>
          <text>赵云</text>
        </view>
        <view>
          <text>参会医生</text>
          <text>张围军</text>
          <text>李小凡</text>
        </view>
      </view>
    </uni-card>
    <!-- 支付信息 -->
    <uni-card>
      <view style="font-size: large">支付信息</view>
      <view class="payment-item">
        <view>
          <text>订单总额</text>
          <text>￥30.00</text>
        </view>
      </view>
      <view class="payment-item">
        <view>
          <text>医保报销</text>
          <text v-if="lever == true">-￥5.00</text>
          <text v-if="lever === false">就诊人未绑定医保卡</text>
        </view>
      </view>
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
          <text class="price">￥25.00</text>
        </view>
      </view>
    </uni-card>
    <!-- 支付方式 -->
    <uni-card class="bottom-pay">
      <view>支付方式</view>
      <view class="weicat">
        <view class="weicat-item">
          <image src="/static/images/weixinzhifu.png"></image>
          <text>微信支付1</text>
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
export default {
  components: { card, cardPop, cardItem, addVisiter },
  data() {
    return {
      show: false,
      lever: true,
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  methods: {
    onSubmit() {
      console.log('跳转去支付')
      uni.navigateTo({
        url: '/pages/registrationInfo/index',
      })
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
