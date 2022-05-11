import tools from '@/utils/tools';
import validate from '@/utils/ys-validate.js'

export default {
  install (Vue) {
    Vue.prototype.$tools = tools;
    Vue.prototype.$validate = validate
    /**
     *  封装全局登录函数,目前后端的接口格式限制
     * @param {跳转路径} backpage
     * @param {跳转方式} backtype
     * @returns
     */
    Vue.prototype.checkLogin = function (backpage, backtype) {
      var nickName = uni.getStorageSync('nickName');
      var avatarUrl = uni.getStorageSync('avatarUrl');
      var phone = uni.getStorageSync('phone');
      if (nickName == '') {
        uni.redirectTo({
          url:
            '/pages/login/login?backpage=' + backpage + '&backtype=' + backtype,
        });
        return false;
      }
      if (phone == '') {
        uni.redirectTo({
          url:
            '/pages/login/loginPhone?backpage=' +
            backpage +
            '&backtype=' +
            backtype,
        });
        return false;
      }
      return [phone, nickName, avatarUrl];
    };
    // Vue.prototype.$utils = { //全局方法
    //   getUrlParam: function (name) { //获取url中的参数
    //     var reg = new RegExp('(^|&?)' + name + '=([^&]*)(&|$)', 'i');
    //     var r = window.location.href.substr(1).match(reg);
    //     if (r != null) {
    //       return decodeURI(r[2]);
    //     }
    //     return undefined;
    //   }
    // }
  },
};
