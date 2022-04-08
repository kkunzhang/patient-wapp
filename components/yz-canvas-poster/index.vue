<template>
  <view>
    <!-- 弹出框 -->
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
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
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
  onReachBottom: function () {},
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {
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
  },
}
</script>
<style less="scss">
.holder {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.tips {
  color: #ccc;
  font-size: 22px;
  padding-top: 30px;
}
</style>
