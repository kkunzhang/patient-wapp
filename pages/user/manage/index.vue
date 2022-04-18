<template>
  <view>
    <add-visiter></add-visiter>
    <uni-card v-for="(item, index) in navs" :key="index">
      <view class="box-outside-warp">
        <view class="fir-card-top-warp">
          <view class="fir-card-top">
            <view class="fir-card-top-item">
              <uni-title type="h1" color="black" title="赵云"></uni-title>
            </view>
            <view class="fir-card-top-item">
              <uni-tag
                text="已经绑定医保卡"
                type="success"
                :circle="true"
                inverted
              ></uni-tag>
            </view>
            <view class="fir-card-top-item">
              <uni-tag
                text="默认"
                inverted
                type="error"
                :circle="true"
              ></uni-tag>
            </view>
          </view>
          <view class="fir-card-top">
            <text class="sec-card-top-item">男 </text>
            <text class="sec-card-top-item">32 </text>
            <text class="sec-card-top-item">12312312312 </text>
          </view>
        </view>

        <view
          @click="onClick(item, index)"
          v-for="(item, index) in navs"
          :key="index"
        >
          <view class="box-outside" style="margin-top: -40rpx">
            <button class="mini-btn" type="primary" size="mini">
              {{ item.title }}
            </button>
          </view>
        </view>
      </view>
    </uni-card>
  </view>
</template>
<script>
import addVisiter from '@/components/add-visiter/add-visiter.vue'
import { throttle, debounce } from '@utils/utils'
export default {
  components: { addVisiter },
  data() {
    return {
      show: false,
      lever: true,
      navs: [
        {
          icon: 'iconfont icon-ziyuan',
          title: ' 就诊卡 ',
          path: '/static/images/register.png',
        },
        {
          icon: 'iconfont icon-guanyuwomen',
          title: '健康档案',
          path: '/static/images/remote-outpatient.png',
        },
        {
          icon: 'iconfont icon-tupian',
          title: '电子病历',
          path: '/static/images/remote-consultation.png',
        },
        {
          icon: 'iconfont icon-ziyuan',
          title: ' 设为默认 ',
          path: '/static/images/register.png',
        },
        {
          icon: 'iconfont icon-guanyuwomen',
          title: '更改号码',
          path: '/static/images/remote-outpatient.png',
        },
        {
          icon: 'iconfont icon-tupian',
          title: '删除患者',
          path: '/static/images/remote-consultation.png',
        },
      ],
    }
  },
  methods: {
    onClick: throttle(function (item) {
      switch (item.title) {
        case '删除患者':
          this.$tools.showModal('', '确认删除该患者?').then((res) => {
            if (res) {
              console.log('去删除')
            }
          })
          break
        case '更改号码':
          uni.navigateTo({
            url: '/pages/user/manage/changePhone',
          })
          break
        default:
          this.$tools.toast('敬请期待')
      }
      // console.log(index)
      // const flag = await this.$tools.showModal('', '确认删除该患者?')
      // if (flag) {
      //   //  去删除
      //   console.log('去删除')
      // }
    }),
  },
}
</script>
<style lang="scss">
.box-outside-warp {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .fir-card-top-warp {
    display: flex;
    flex-wrap: wrap;
    .fir-card-top {
      display: flex;
      align-items: center;
      .fir-card-top-item {
        margin: 15rpx;
      }
      .sec-card-top-item {
        margin: 15rpx;
        position: relative;
        top: -60rpx;
        font-size: 34rpx;
      }
    }
  }

  .box-outside {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
    padding: 36rpx 0;
    width: 180rpx;
    .mini-btn {
      border-radius: 15px !important;
      // width: 50rpx;
      width: 180rpx;
    }
  }
}
</style>
