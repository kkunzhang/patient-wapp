<template>
  <view class="content" v-show="ifShow" @click="changeIfShow">
    <canvas
      class="canvas-img"
      :style="{ width: canvasWidth + 'px', height: canvasHeight + 'px' }"
      canvas-id="firstCanvas"
      id="firstCanvas"
      @longpress="canvasGet"
    ></canvas>
  </view>
</template>

<script>
export default {
  name: 'yz-canvas-poster',
  data() {
    return {
      canvasPath: '',
      context: null,
      windowWidth: 0, //屏幕可用宽度
      windowHeight: 0, //屏幕可用高度
      canvasWidth: 0, //图片宽度
      canvasHeight: 0, //图片高度
    }
  },
  props: {
    ifShow: {
      type: Boolean,
      default: false,
    },
    imageBg: {
      type: String,
      default: '',
    },
    myCanvasSize: {
      type: Array,
      default: () => {
        //props传递数据的时候，默认值如果是数组或者对象，应该使用一个函数返回默认值
        return [0.8, 16 / 9] //[0]为画布占屏幕宽度的比例，[1]为背景画布长宽比
      },
    },
    imageHead: {
      type: Array,
      default: () => {
        //props传递数据的时候，默认值如果是数组或者对象，应该使用一个函数返回默认值
        return []
      },
    },
    imageBody: {
      type: Array,
      default: () => {
        //props传递数据的时候，默认值如果是数组或者对象，应该使用一个函数返回默认值
        return []
      },
    },
    textHead: {
      type: Array,
      default: () => {
        //props传递数据的时候，默认值如果是数组或者对象，应该使用一个函数返回默认值
        return []
      },
    },
  },
  created() {
    const res = uni.getSystemInfoSync()
    // console.log('SystemInf', res);
    this.windowHeight = res.windowHeight
    this.windowWidth = res.windowWidth
    this.canvasWidth = this.windowWidth * this.myCanvasSize[0]
    this.canvasHeight = this.canvasWidth * this.myCanvasSize[1]
  },
  methods: {
    init() {
      this.context = uni.createCanvasContext('firstCanvas', this)
      this.context.drawImage(
        this.imageBg,
        0,
        0,
        this.canvasWidth,
        this.canvasHeight
      )
      this.context.drawImage(
        this.imageHead[0],
        this.imageHead[1],
        this.imageHead[2],
        this.imageHead[3],
        this.imageHead[4]
      )
      this.context.drawImage(
        this.imageBody[0],
        this.imageBody[1],
        this.imageBody[2],
        this.imageBody[3],
        this.imageBody[4]
      )
      this.context.setFontSize(this.textHead[4])
      this.context.setTextBaseline('middle')
      this.context.setFillStyle(this.textHead[3])
      this.context.fillText(
        this.textHead[0],
        this.textHead[1],
        this.textHead[2]
      )
      this.context.draw()
      console.log('绘制完成')
    },
    changeIfShow() {
      //触发一个更新事件
      this.$emit('update:ifShow', false)
      console.log('隐藏canvas')
    },
    canvasGet() {
      console.log('下载canvas')
      var that = this
      uni.canvasToTempFilePath(
        {
          canvasId: 'firstCanvas',
          success: function (res) {
            // 在H5平台下，tempFilePath 为 base64
            console.log(res.tempFilePath)
            that.canvasPath = res.tempFilePath
            uni.showModal({
              title: '温馨提示',
              content: '确定将图片保存到本地？',
              // showCancel: false,
              cancelText: '取消',
              confirmText: '确定',
              success: (res) => {
                if (res.confirm) {
                  console.log('用户点击确定')
                  // H5不支持uni.saveImageToPhotosAlbum
                  uni.saveImageToPhotosAlbum({
                    filePath: that.canvasPath,
                    success: function () {
                      console.log('save success')
                      that.changeIfShow()
                      uni.showToast({
                        title: '保存成功',
                        duration: 2000,
                      })
                    },
                  })
                } else if (res.cancel) {
                  console.log('用户点击取消')
                }
              },
              fail: () => {},
              complete: () => {},
            })
          },
          fail: () => {
            console.log('下载失败')
          },
        },
        that
      )
    },
  },
}
</script>

<style>
.content {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 2;
  /* 设置显示层级 */
}
</style>
