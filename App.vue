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
  color: #3a3a3a;
}
.item-font-spacing view {
  margin-top: $uni-top;
  color: rgba(96, 102, 114, 1);
  text {
    margin-right: 20rpx;
  }
}
.gl:before {
  content: ' ';
  display: inline-block;
  height: 20rpx;
  width: 20rpx;
  border-width: 0 0 4rpx 4rpx;
  border-style: solid;
  -webkit-transform: matrix(-0.71, 0.71, 0.71, 0.71, 0, 0);
  transform: matrix(-0.71, 0.71, 0.71, 0.71, 0, 0);
}
.price {
  color: rgba(255, 95, 86, 1);
  font-size: 35rpx;
}
/* #endif */
</style>
