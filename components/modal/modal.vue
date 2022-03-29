<template>
  <view>
    <uni-popup ref="kefu" type="center" :mask-click="false" class="kefu">
      <view class="popup">
        <view class="icon-close">
          <uni-icons type="close" size="30" @click="close" color="#fff">
          </uni-icons>
        </view>
        <image
          src="/static/images/doctor.png"
          mode="widthFix"
          class="QRcode"
        ></image>
        <button
          type="warn"
          size="default"
          class="btn-savecode"
          @click="saveQRcode"
        >
          保存图片
        </button>
      </view>
    </uni-popup>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    saveQRcode() {
      uni.getSetting({
        success: (res) => {
          if (res.authSetting['scope.writePhotosAlbum']) {
            //验证用户是否授权可以访问相册
            this.saveQRcodeToPhotosAlbum()
          } else {
            uni.authorize({
              scope: 'scope.writePhotosAlbum',
              success: (res) => {
                console.log('有授权的信息：', res)
                this.saveQRcodeToPhotosAlbum()
              },
              fail: (err) => {
                //取消授权后再获取授权，需手动设置
                uni.showModal({
                  content: '检测到你没打开保存相册权限，是否去设置打开',
                  confirmText: '确认',
                  cancelText: '取消',
                  success(res) {
                    if (res.confirm) {
                      uni.openSetting({
                        success(res) {
                          console.log('授权成功')
                        },
                      })
                    } else {
                      console.log('取消授权')
                    }
                  },
                })
              },
            })
          }
        },
      })
    },
    saveQRcodeToPhotosAlbum() {
      let that = this
      uni.saveImageToPhotosAlbum({
        filePath: 'static/images/showModal/qrcode.png',
        success(res) {
          uni.showToast({
            title: '保存成功',
            icon: 'success',
          })
          that.close()
        },
        fail(err) {
          console.log(err)
        },
      })
    },
  },
  props: {
    // dataList: {
    //   type: Array,
    //   default() {
    //     return {}
    //   },
    // },
  },
  watch: {
    dataList: {
      handler(newVal, oldVal) {
        if (newVal) {
          this.show = true
        }
        console.log(newVal)
      },
      // immediate: true,
    },
  },
}
</script>
<style lang="scss">
/deep/.uni-popup__wrapper.uni-custom.center .uni-popup__wrapper-box {
  background-color: transparent;
  position: relative;
  max-width: 80%;
  max-height: 80%;
  overflow-y: visible;
  .popup {
    width: 100%;
    .icon-close {
      display: block;
      text-align: right;
      margin-right: -60rpx;
    }
    .QRcode {
      width: 450rpx;
      display: block;
    }
    .btn-savecode {
      margin: 20rpx 100rpx;
      border-radius: 50rpx;
      font-size: 30rpx;
    }
  }
}
</style>