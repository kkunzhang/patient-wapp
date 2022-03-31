<template>
  <view class="container">
    <!--导航栏-->
    <!-- <navbar></navbar> -->
    <!--搜索-->
    <search @searchValue="searchValue"></search>
    <!--轮播图-->
    <my-swiper></my-swiper>
    <!-- <button
      class="sys_btn"
      open-type="getUserInfo"
      lang="zh_CN"
      @getuserinfo="appLoginWx"
    >
      小程序登录授权
    </button> -->
    <!-- 导航区域 -->
    <view class="fast-enter">
      <view
        class="fast-enter-item"
        v-for="(item, index) in navs"
        :key="index"
        @click="onClick(item, index)"
      >
        <image class="bg-img" :src="item.path" />
        <text>{{ item.title }}</text>
      </view>
    </view>

    <!--线上服务-->
    <uni-card>
      <view class="card-title">线上服务</view>
      <view class="box-outside-warp">
        <view
          class="padding-sm"
          @click="onClick(item, index)"
          v-for="(item, index) in navs2"
          :key="index"
        >
          <view class="box-outside">
            <image class="bg-img" :src="item.path" />
            <view class="text-lg box-title">{{ item.title }}</view>
          </view>
        </view>
      </view>
    </uni-card>
    <!-- <view
      v-show="isShow"
      style="margin-top: 100px; width: 400px; height: 400px"
    >
      <image mode="widthFix" src="/static/images/1.jpeg"></image>
    </view> -->
    <!--预约服务-->
    <uni-card>
      <view class="card-title">预约服务</view>
      <view class="box-outside-warp">
        <view
          class="padding-sm"
          @click="onClick(item, index)"
          v-for="(item, index) in navs3"
          :key="index"
        >
          <view class="box-outside">
            <image class="bg-img" :src="item.path" />
            <view class="text-lg box-title">{{ item.title }}</view>
          </view>
        </view>
      </view>
    </uni-card>
    <!--健康学院-->
    <uni-card>
      <view class="card-title">健康学院</view>
      <view class="box-outside-warp">
        <view
          class="padding-sm"
          @click="onClick(item, index)"
          v-for="(item, index) in navs4"
          :key="index"
        >
          <view class="box-outside">
            <image class="bg-img" :src="item.path" />
            <view class="text-lg box-title">{{ item.title }}</view>
          </view>
        </view>
      </view>
    </uni-card>
    <!-- .sync修饰符:当一个子组件改变了一个 prop 的值时，这个变化也会同步到父组件中所绑定。 -->
    <!-- 通过 ref 为子组件赋予一个 ID 引用,访问子组件实例 -->
    <yz-canvas-poster
      ref="mycanvas"
      :myCanvasSize="myCanvasSize"
      :ifShow.sync="ifShow"
      :imageBg="imageBg"
      :imageHead="imageHead"
      :imageBody="imageBody"
      :textHead="textHead"
    >
    </yz-canvas-poster>

    <!-- 探矿 -->
  </view>
</template>

<script>
import search from '@/components/search/search.vue'
import mySwiper from '@/components/swiper/mySwiper.vue'
import modal from '@/components/modal/modal.vue'
import { getUserDefaultSetting } from '@api/user'
export default {
  components: {
    search,
    mySwiper,
    modal,
  },
  data() {
    return {
      isShow: false,
      isShowIndexModal: false,
      indexBackgroundImage: '/static/images/logo@2x.png',
      navs: [
        {
          id: 1,
          icon: 'iconfont icon-ziyuan',
          title: '预约挂号',
          path: '/static/images/appintment.png',
        },
        {
          id: 2,
          icon: 'iconfont icon-guanyuwomen',
          title: '在线缴费',
          path: '/static/images/payment.png',
        },
        {
          id: 3,
          icon: 'iconfont icon-tupian',
          title: '报告查询',
          path: '/static/images/report.png',
        },
        {
          id: 5,
          icon: 'iconfont icon-shipin',
          title: '云药房',
          path: '/static/images/drugstore.png',
        },
      ],
      navs2: [
        {
          id: 6,
          icon: 'iconfont icon-ziyuan',
          title: '远程门诊',
          path: '/static/images/outpatient.png',
        },
        {
          id: 6,
          icon: 'iconfont icon-guanyuwomen',
          title: '远程会诊',
          path: '/static/images/consultation.png',
        },
        {
          id: 4,
          icon: 'iconfont icon-tupian',
          title: '全国医生',
          path: '/static/images/doctor.png',
        },
        {
          icon: 'iconfont icon-shipin',
          title: '复诊续方',
          path: '/static/images/followup.png',
        },
      ],
      navs3: [
        {
          icon: 'iconfont icon-ziyuan',
          title: '预约检查',
          path: '/static/images/inspect.png',
        },
        {
          icon: 'iconfont icon-guanyuwomen',
          title: '预约检验',
          path: '/static/images/examine.png',
        },
        {
          icon: 'iconfont icon-tupian',
          title: '预约体检',
          path: '/static/images/physical.png',
        },
        {
          icon: 'iconfont icon-shipin',
          title: '预约手术',
          path: '/static/images/operation.png',
        },
        {
          icon: 'iconfont icon-shipin',
          title: '预约住院',
          path: '/static/images/hospitalization.png',
        },
        {
          icon: 'iconfont icon-shipin',
          title: '预约转诊',
          path: '/static/images/referral.png',
        },
      ],
      navs4: [
        {
          icon: 'iconfont icon-ziyuan',
          title: '医学综合',
          path: '/static/images/synthetical.png',
        },
        {
          icon: 'iconfont icon-guanyuwomen',
          title: '医生空间',
          path: '/static/images/space.png',
        },
        {
          icon: 'iconfont icon-tupian',
          title: '医学常识',
          path: '/static/images/commonknowledge.png',
        },
        {
          icon: 'iconfont icon-shipin',
          title: '培训报名',
          path: '/static/images/trainning.png',
        },
      ],
      //弹出二维码
      ifShow: false,
      myCanvasSize: [0.8, 16 / 9], //[0]为画布占屏幕宽度的比例，[1]为背景画布长宽比
      imageBg: '', //canvas背景图
      imageHead: [],
      imageBody: [],
      textHead: [],
      canvasHight: 0,
      canvasWidth: 0,
    }
  },
  methods: {
    // 搜索
    searchValue(val) {
      this.keyword = val
      this.getList()
    },
    canvasShow() {
      //打印下面日志手机端控制台会报错，但不影响运行，原因未明。
      // console.log('mycanvas', this.$refs.mycanvas);

      //获取画布的尺寸大小
      this.canvasHight = this.$refs.mycanvas.canvasHeight
      this.canvasWidth = this.$refs.mycanvas.canvasWidth

      // 如下，以canvasHight、canvasWidth为单位进行计算，达到动态布局以适应不同尺寸的手机
      this.imageBg = '/static/images/bg.jpg'
      this.imageHead = [
        '/static/images/logo@2x.png',
        this.canvasWidth * 0.16 - 20,
        this.canvasHight * 0.08 - 20,
        40,
        40,
      ]
      this.imageBody = [
        '/static/images/myQR.jpg',
        this.canvasWidth * 0.5 - 60,
        this.canvasHight * 0.48,
        120,
        120,
      ]
      this.textHead = [
        '你好',
        this.canvasWidth * 0.16 + 28,
        this.canvasHight * 0.08,
        'black',
        '20',
      ]

      //canvas的父级如果被隐藏,canvas的width、height则都为0;
      //当父元素出现，canvas的高度也就有了，但是canvas并不会绘制显示。动态修改 canvas 大小后需要重新绘制;
      this.ifShow = true // 显示画布

      //解决方法：可以将绘制方法写在异步方法中;
      //同时要注意组件的生命周期，确保实例挂载成功之后再执行,一般延时50ms（经验值，与硬件处理速度有关）执行即可。
      let tempTimeOut = setTimeout(() => {
        this.$refs.mycanvas.init() //绘制画布
        clearTimeout(tempTimeOut)
      }, 50)
    },
    // 获取列表
    async getArriveOrderItem() {
      const params = {
        arrive_order_id: this.arrive_order_id,
      }
      const data = await this.$api.getArriveOrderItem(params)
      this.list = data.results
    },
    appLoginWx() {
      // #ifdef MP-WEIXIN
      uni.getProvider({
        service: 'oauth',
        success: function (res) {
          if (~res.provider.indexOf('weixin')) {
            uni.login({
              provider: 'weixin',
              success: (res2) => {
                uni.getUserInfo({
                  provider: 'weixin',
                  success: (info) => {
                    //这里请求接口
                    console.log(res2)
                    console.log(info)
                  },
                  fail: () => {
                    uni.showToast({ title: '微信登录授权失败', icon: 'none' })
                  },
                })
              },
              fail: () => {
                uni.showToast({ title: '微信登录授权失败', icon: 'none' })
              },
            })
          } else {
            uni.showToast({
              title: '请先安装微信或升级版本',
              icon: 'none',
            })
          }
        },
      })
      //#endif
    },
    onClick(item, index) {
      console.log(item)
      switch (item.id) {
        case 1:
          uni.navigateTo({
            url: '/pages/registration/index',
          })
          break
        case 2:
          uni.navigateTo({
            url: '/pages/onlinepayment/index',
          })
          break
        case 3:
          uni.navigateTo({
            url: '/pages/seeReport/index',
          })
          break
        case 4:
          uni.navigateTo({
            url: '/pages/doctorList/index',
          })
          break
        case 6:
          this.canvasShow()

          break
        default:
          console.log(item.id)
          uni.navigateTo({
            url: '/pages/registration/index',
          })
      }

      // this.isShow = !this.isShow
      // this.$tools.toast('回答已删除',"suc")
      // this.$tools.message('回答已删除', 'suc')
      // this.$tools.toast('回答已删除', 'suc')
    },
    // 获取订单列表
    getorderlist() {
      // loading提示框
      uni.showLoading({
        title: '加载中',
      })
      setTimeout(function () {
        uni.hideLoading()
        orderlist({
          page: 1,
          orderStatus: 40,
        }).then((res) => {
          console.log('订单res', res)
        })
      }, 800)
    },
    toHandlePopModal(val) {
      conosle.log(val)
    },
    // 预约挂号
    appointment() {
      appointment({}).then((res) => {
        console.log(res)
      })
    },

    // 查询订单状态
    orderstatus() {
      orderstatus({
        orderNo: '4',
      }).then((res) => {
        console.log('订单状态', res)
      })
    },

    // 用户-退款单列表
    refundorder() {
      refundorder({
        page: 1,
        refundStatus: '',
      }).then((res) => {
        console.log('退款单列表', res)
      })
    },
    getDoctorList() {
      getDoctorList({
        serviceType: '05',
        memberCode: globalData.uid,
        page: 1,
        pageSize: '10',
      }).then((res) => {
        console.log('医生列表', res)
      })
    },
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.isShowIndexModal = this.$store.state.showIndexModal
    const context = this

    // getUserDefaultSetting()
    //       .then(({ obj }) => {
    //         if (!obj) {
    //           uni.showModal({
    //             title: '温馨提示',
    //             content: '系统未检测到您的绑定信息，是否立即前往绑定？',
    //             success: function (res) {
    //               if (res.confirm) {
    //                 context.$Router.replaceAll({
    //                   name: 'AddUser',
    //                   query: { hasUser: true },
    //                 })
    //               }
    //             },
    //           })
    //         }
    //         this.updateUserInfo(obj)
    //         uni.setStorageSync('userInfo', obj)
    //       })
    //       .catch((err) => {
    //         const context = this
    //         if (err.state.includes('TOKEN')) {
    //           uni.showModal({
    //             title: '温馨提示',
    //             content: '您当前的授权信息已过期，是否重新授权。',
    //             success: function (res) {
    //               if (res.confirm) {
    //                 context.$Router.replaceAll({ name: 'login' })
    //               }
    //             },
    //           })
    //         }
    //       })

    // this.addDoctorList(this.pages)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('2222')
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
}
</script>
<style lang="scss">
.container {
  .top-nav {
    margin-top: 60rpx;
  }
  .home-nav {
    display: flex;
  }
  .home-nav-title {
    display: flex;
    align-content: space-around;
    flex-wrap: wrap;
    margin-left: 32rpx;
    font-size: 1rem;
  }
  .fast-enter {
    margin: 20rpx 20rpx 0rpx 20rpx;
    display: flex;
    justify-content: space-between;
    .fast-enter-item {
      width: 22vw;
      // height: calc(20vw - 60rpx);
      background-color: white;
      border-radius: 20rpx;
      text-align: center;
      padding-top: 10rpx;
      box-shadow: 0 2rpx 6rpx rgba(0, 0, 0, 0.12),
        0 2rpx 4rpx rgba(0, 0, 0, 0.24);
      .bg-img {
        width: 50rpx;
        height: 50rpx;
      }
      text {
        display: block;
        font-weight: 500;
      }
    }
  }
  .card-title {
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    font-size: 36rpx;
    padding: 0rpx 10rpx;
    border-left: 12rpx solid #18bc37;
  }
  .box-outside-warp {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .box-outside {
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      align-items: center;
      margin-top: 10rpx;
      padding: 16rpx;
      .bg-img {
        width: 100rpx;
        height: 100rpx;
      }
      .box-title {
        padding-bottom: 20rpx;
      }
    }
  }
}
</style>
