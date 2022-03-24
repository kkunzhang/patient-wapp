<script>
export default {
  onLaunch: function () {
    console.warn(
      '当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！'
    )
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style lang="scss">
/*每个页面公共css */
@import '@/uni_modules/uni-scss/index.scss';
/* #ifndef APP-NVUE */
@import '@/static/customicons.css';
@import '@/uni_modules/uview-ui/index.scss';
// 设置整个项目的背景色
page {
  background-color: #f5f5f5;
}
// .my-uni-card {
//   margin: 10px !important;
//   padding: 0px 10px !important;
//   border-radius: 10px !important;
//   border: 1px solid #fff !important;
// }
.gl:before {
  content: ' ';
  display: inline-block;
  height: 20rpx;
  width: 20rpx;
  border-width: 0 0 4rpx 4rpx;
  // border-color: #000;
  border-style: solid;
  -webkit-transform: matrix(-0.71, 0.71, 0.71, 0.71, 0, 0);
  transform: matrix(-0.71, 0.71, 0.71, 0.71, 0, 0);
}
/* #endif */
.example-info {
  font-size: 14px;
  color: #333;
  padding: 10px;
}
</style>
