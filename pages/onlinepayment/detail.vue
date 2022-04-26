<template>
  <view>
    <pay-card :list="info" :isFull="true"></pay-card>

    <card-item :isShowButton="false"> </card-item>

    <card :isShow="false"></card>

    <uni-card class="my-uni-card">
      <view style="margin: 12rpx"
        ><text style="font-size: large">患者主诉: </text
        ><text>
          嗓子疼嗓子疼嗓子疼嗓子疼嗓子疼嗓子疼嗓子疼嗓子疼嗓子疼嗓子疼嗓子疼
        </text></view
      >
      <view style="margin: 12rpx"
        ><text style="font-size: large">症状图片: </text></view
      >
      <view
        style="
          display: flex;
          flex-wrap: wrap;
          align-content: stretch;
          justify-content: space-around
          align-items: flex-end;
        "
      >
        <view v-for="(item, index) in urls" :key="index">
          <view>
            <image
              class="in-img"
              :src="item"
              @click="previewImg(urls, index)"
              model="aspectFill"
            ></image>
          </view>
        </view>
      </view>
    </uni-card>
    <uni-card class="my-uni-card">
      <view style="font-size: large">订单信息</view>
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
    <uni-card class="my-uni-card">
      <view style="font-size: large">结算信息</view>
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

    <view class="submit-box">
      <button type="primary" @click="onSubmit()">确定</button>
    </view>
  </view>
</template>
<script>
import payCard from '@/components/pay-card/pay-card-status.vue'
import cardItem from '@/components/card-item/card-item.vue'
import card from '@/components/doctor/card.vue'

export default {
  components: { card, payCard, cardItem },
  data() {
    return {
      radio: '1',
      show: false,
      lever: true,
      info: [{ id: 1 }],
      urls: [
        '/static/images/outpatient.png',
        '/static/images/consultation.png',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      ],
    }
  },
  methods: {
    onSubmit() {
      console.log('跳转去支付')
      uni.navigateTo({
        url: '/pages/registrationInfo/index',
      })
    },
    onClick() {
      console.log('2222')
      uni.navigateTo({
        url: '/pages/addVisit/index',
      })
    },
    previewImg(item, index) {
      console.log(item, index)
      uni.setStorageSync('currentImgIndex', index) // 当前下标
      uni.setStorageSync('imgPreviewPicList', item) // 当前数组
      uni.navigateTo({
        url: './imgPreview', // 要跳转的预览页
      })
    },
  },
}
</script>
<style lang="scss">
.item-bottom view {
  margin-top: 30rpx;
  color: rgba(96, 102, 114, 1);
}
.item-bottom view text {
  margin-right: 20rpx;
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
}
.payment-item > view > text {
  margin-right: 20rpx;
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

.submit-box {
  width: 100%;
  position: fixed;
  bottom: 0;
}

.in-img {
  width: 150rpx;
  height: 150rpx;
  border-radius: 5px;
  margin-top: 10rpx;
}
</style>
