<template>
  <view>
    <!-- 医生号源信息 -->
    <uni-card :isFull="isFull" class="my-uni-card" :border="false">
      <view class="doctor-card">
        <view class="doctor-card-pic">
          <u-avatar :src="avatar" size="70"></u-avatar>
          <view class="card-message">
            <view>
              <text>{{ info.doctorName }}</text>
              <text>{{ info.doctorTitle }}</text>
              <text>{{ info.deptName }}</text>
            </view>
            <!-- <view class="uni-lastmsg"> 擅长：{{ doctorSkill }} </view> -->
            <view class="message-tips" v-if="isShowOther">
              <view>好评率 98%</view>
              <view>已服务 123</view>
              <view>平均响应 慢</view>
            </view>
          </view>
        </view>
        <view class="card-num" v-if="isShow">
          <view>剩余号源：{{ info.regLeaveCount }} </view>
          <view v-if="info.toatlFee">￥{{ info.toatlFee }}</view>
          <view v-else>免费</view>
          <view>
            <button
              v-if="info.regLeaveCount > 0"
              class="mini-btn"
              @click="onClick('order')"
              type="primary"
              size="mini"
            >
              预约
            </button>
            <button
              v-else
              class="mini-btn"
              @click="onClick('order')"
              type="primary"
              size="mini"
              :disabled="true"
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
import { debounce } from '@utils/utils'
export default {
  data() {
    return {
      isDisabled: false,
    }
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
    info: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {
    onClick: debounce(function (val) {
      if (val == 'order') {
      } else {
      }
      this.$emit('onClick', this.info)
    }),
  },
}
</script>
<style lang="scss">
.doctor-card {
  .doctor-card-pic {
    display: flex;
    align-items: center;
    margin-top: 20rpx;
    .card-message {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      justify-content: space-evenly;
      margin-left: 20rpx;
      margin-top: 10rpx;
      text {
        margin: 4rpx;
        color: #333;
        font-size: 45rpx;
      }
      text:first-child {
        font-size: 45rpx;
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
        margin-top: 6rpx;
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
      margin-top: 25rpx;
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