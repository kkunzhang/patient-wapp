<template>
  <view>
    <!-- 医生号源信息 -->

    <uni-card class="my-uni-card">
      <view class="doctor-card">
        <view class="doctor-card-pic">
          <u-avatar :src="avatar" size="70"></u-avatar>
          <view class="card-message">
            <view>
              <text>徐景明</text>
              <text>主任医师</text>
              <text>内科</text>
            </view>
            <view class="uni-lastmsg"> 擅长：对高血压，冠心病，心力衰歇… </view>
          </view>
        </view>
        <view class="card-num" v-if="isShow">
          <view>剩余号源：15 </view>
          <view>￥15.00</view>
          <view>
            <button
              class="mini-btn"
              @click="onClick()"
              type="primary"
              size="mini"
            >
              预约
            </button>
          </view>
        </view>
      </view>
    </uni-card>
  </view>
</template>  
<script>
export default {
  data() {
    return {}
  },
  onLoad() {},
  props: {
    avatar: {
      type: String,
      default: '/static/images/doctor.jpeg',
    },
    isShow: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onClick() {
      let item = 'true123'
      console.log(item)

      this.$emit('onClick', item)
    },
  },
}
</script>
<style lang="scss">
.doctor-card {
  .doctor-card-pic {
    display: flex;
    .card-message {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      justify-content: space-evenly;
      margin-left: 20rpx;
      margin-top: 20rpx;
      text {
        margin: 4rpx;
        color: #333;
        font-size: 35rpx;
      }
      text:first-child {
        font-size: 50rpx;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
      }
      .uni-lastmsg {
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; //可设置显示的行数
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
  .card-num {
    display: flex;
    justify-content: space-between;
    margin-top: 45rpx;
    text {
      margin: 4rpx;
    }
    .mini-btn {
      border-radius: 15px !important;
    }
  }
}
</style>