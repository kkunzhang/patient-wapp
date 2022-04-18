<template>
  <view>
    <!-- 医生号源信息 -->
    <uni-card :isFull="isFull" class="my-uni-card" :border="false">
      <view class="doctor-card">
        <view class="doctor-card-pic" @click="onClick('detail')">
          <u-avatar :src="avatar" size="70"></u-avatar>
          <view class="card-message">
            <view>
              <text>徐景明</text>
              <text>主任医师</text>
              <text>内科</text>
            </view>
            <view class="uni-lastmsg"> 中国人民解放军总医院 301 医院 </view>

            <view class="uni-lastmsg">
              擅长：对高血压，冠心病，心力衰歇冠心病，心力衰歇冠心病，心力衰歇冠心病，心力衰歇冠心病，心力衰歇冠心病，心力衰歇冠心病，心力衰歇冠心病，心力衰歇
            </view>
            <view class="message-tips" v-if="isShowOther">
              <view>好评率 98%</view>
              <view>已服务 123</view>
              <view>平均响应 慢</view>
            </view>
          </view>
        </view>
        <view class="card-num" v-if="isShow">
          <view>剩余号源：15 </view>
          <view>￥15.00</view>
          <view>
            <button
              class="mini-btn"
              @click="onClick('order')"
              type="primary"
              size="mini"
            >
              预约
            </button>
          </view>
        </view>
        <view class="card-num" v-if="isShowOther">
          <view>远程门诊 ￥15.00</view>
          <view>远程门诊 ￥15.00</view>
          <view>远程门诊 ￥15.00</view>
        </view>
        <view class="card-num" v-if="isShowOther">
          <view>远程门诊 ￥15.00</view>
          <view>远程门诊 ￥15.00</view>
          <view>远程门诊 ￥15.00</view>
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
    isFull: {
      type: Boolean,
      default: false,
    },
    isShowOther: {
      type: Boolean,
      default: false,
    },
    
  },
  methods: {
    onClick(val) {
      let item
      if (val == 'order') {
        item = 'true123'
        console.log(item)
      } else {
        item = 'vvv'
        console.log(item)
      }
      this.$emit('onClick', item)
    },
  },
}
</script>
<style lang="scss">
.doctor-card {
  .doctor-card-pic {
    display: flex;
    align-items: center;
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
        -webkit-line-clamp: 2; //可设置显示的行数
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .message-tips {
        margin-top: 20rpx;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .card-num {
    display: flex;
    justify-content: space-between;
    &:nth-child(2) {
      margin-top: 45rpx;
    }
    text {
      margin: 4rpx;
    }
    .mini-btn {
      border-radius: 15px !important;
    }
  }
}
</style>