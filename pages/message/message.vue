<template>
  <view>
    <!-- 医生号源信息 -->
    <view v-for="(item, index) in info" :key="index">
      <uni-card class="my-uni-card" :border="false">
        <view class="doctor-card">
          <view class="doctor-card-pic">
            <!-- src="/static/images/doc.png" -->
            <!-- :src="item.image"  -->
            <u-avatar shape="square" size="60" :src="item.image"></u-avatar>
            <view class="card-message">
              <view>
                <text>{{ item.name }}</text>
                <text>{{ item.title }}</text>
              </view>
              <view style="margin-left: 4rpx"> {{ item.departName }} </view>
              <view style="margin-left: 4rpx"> {{ item.hospitalName }} </view>
            </view>
          </view>
          <view class="card-num uni-lastmsg">
            <view>擅长：{{ item.special }}</view>
          </view>
        </view>
      </uni-card>
    </view>
  </view>
</template>  
<script>
import { throttle } from '@utils/utils'
export default {
  data() {
    return {
      info: [],
      params: {
        cityCode: '',
        deptCode: '',
        page: 1,
        keyword: '',
        sort: 0,
        caseCode: '',
      },
      pageSize: 20,
      header: {
        Authorization: 'Bearer 4733a2eb-0723-41ef-bfa2-2ade373a37c0',
      },
      leftData: [],
      rightData: [],
      flag: false,
    }
  },
  components: {},
  methods: {
    getData() {
      uni.request({
        url: 'https://api.jiukangguoji.cn/search/v2/recommend-doctor/list',
        data: this.params,
        header: this.header,
        method: 'POST',
        success: (response) => {
          uni.hideLoading()
          console.log(this.params)
          this.info = [...this.info, ...response.data.data]
        },
        fail: (error) => {
          uni.hideLoading()
        },
        complete: () => {},
      })
    },

    onReachBottom: throttle(function () {
      console.log('触底请求下一页')
      uni.showLoading({
        title: '加载中...',
        mask: true,
      })
      let timer = setTimeout(() => {
        if (this.info.length < this.params.page * this.pageSize) {
          console.log(this.info.length)
          return (this.flag = true)
        } else {
          this.params.page++
          this.getData()
        }
      }, 2000)
    }),
  },
  onLoad() {
    uni.showLoading({
      title: '加载中...',
      mask: true,
    })
    this.getData()
  },
}
</script>
<style>
</style>
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
      margin-top: 10rpx;
      text:nth-child(2) {
        margin: 12rpx;
        color: #333;
        font-size: $uni-font-size-h2;
      }
      text:first-child {
        font-size: $uni-font-size-h1;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: black;
      }
      .uni-lastmsg {
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1; //可设置显示的行数
        line-clamp: 2;
        -webkit-box-orient: vertical;
        margin: 4rpx;
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

.center-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .card-item-add {
    display: flex;
    text {
      font-size: $uni-font-size-h1;
      color: #333333;
      font-weight: 500;
      margin-right: 30rpx;
    }
    view {
      font-size: $uni-font-size-h3;
    }
  }
  .fir-card-top {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rpx;
    text {
      margin-right: 30rpx;
      font-size: $uni-font-size-h3;
    }
  }
}
.card-user-info {
  margin: 20rpx;
  padding: 8rpx 60rpx;
  border-radius: 20rpx;
  overflow: hidden;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  background-color: #fff;
  flex: 1;
  border: 2rpx solid #dcdcdc;
  // height: 140rpx;
  line-height: 62rpx;
}
</style>