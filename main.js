
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import uView from '@uni/uview-ui';
import tools from '@/utils/tools'
import store from './store/index'
Vue.prototype.$tools = tools
Vue.use(uView);
if (process.env.NODE_ENV === 'development') {
  Vue.config.productionTip = false
}
// 封装全局登录函数
Vue.prototype.checkLogin = function (backpage, backtype) {
  var uid = uni.getStorageSync('uid');
  var nickName = uni.getStorageSync('nickName');
  var avatarUrl = uni.getStorageSync('avatarUrl');
  var regtime = uni.getStorageSync('regtime');
  var phone = uni.getStorageSync('phone');
  if (uid == '') {
    uni.redirectTo({ url: '/pages/login/login?backpage=' + backpage + '&backtype=' + backtype });
    return false;
  }
  if (phone == '') {
    uni.redirectTo({ url: '/pages/login/loginPhone?backpage=' + backpage + '&backtype=' + backtype });
    return false;
  }
  // 登录成功、已经登录返回数组 [用户 id, 用户随机码, 用户昵称, 用户表情]
  return [uid, nickName, avatarUrl, regtime];
}
App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp () {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif