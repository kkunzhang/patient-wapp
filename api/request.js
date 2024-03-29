// import store from '../store/index'
import configInfo from '@/utils/config.js';
/**
 * X-APP-ID 1：医生端  2：患者端
 * X-CLIENT-ID  0：安卓APP 1：苹果APP 2：WAP 3：微信小程序 4：web
 */
export default {
  config: {
    // 请求的公共url
    baseUrl: configInfo.BASE_URL,
    header: {
      // 'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Type': 'application/json',
      'X-APP-ID': '2',
      'X-CLIENT-ID': '3',
    },
    data: {},
    method: 'GET',
    dataType: 'json',
    /* 如设为json，会对返回的数据做一次 JSON.parse */
    responseType: 'text',
    hideLoading: false,
    hideMsg: false,
    success () { },
    fail () { },
    complete () { },
  },
  whiteListRet: [307003, 100000, 10000, 307004, 307006, 307007],
  // 请求拦截器
  interceptor: {
    request: null,
    response: null,
  },
  request (options) {
    if (!options) {
      options = {};
    }
    const hideLoading = options.hideLoading || false; // 是否显示 loading
    if (!hideLoading) {
      uni.showLoading({
        title: '加载中...',
        mask: true,
      });
    }
    options.baseUrl = options.baseUrl || this.config.baseUrl;
    options.dataType = options.dataType || this.config.dataType;
    options.url = options.baseUrl + options.url;
    options.data = options.data || {};
    options.method = options.method || this.config.method;
    console.log(options);
    // #ifdef MP-WEIXIN
    if (options.url.indexOf('/mem/auth/') < 0) {
      const token = uni.getStorageSync('token'); // 登录鉴权获得的 token
      this.config.header.Authorization = 'bearer ' + token;
      console.log(token);
    } else {
      this.config.header.Authorization = '';
    }
    // #endif
    // #ifdef H5
    this.config.header.Authorization =
      'bearer ' + 'd7274696-df28-45c9-a327-002c8163a797';
    // #endif
    console.log(this.config.header);
    // 基于 Promise 的网络请求
    return new Promise((resolve, reject) => {
      uni.request({
        url: options.url,
        data: options.data,
        header: this.config.header,
        method: options.method,
        success: (response) => {
          console.log(response);
          if (!hideLoading) uni.hideLoading();
          let res = response.data;
          if (this.whiteListRet.includes(res.code)) {
            resolve(res);
          } else {
            // 返回值非 200，强制显示提示信息
            if (res.errCode) {
              this.showToast(res, parseInt(res.errCode));
            } else if (res.code) {
              this.showToast(res, res.code);
            } else {
              this.showToast(res);
            }
          }
        },
        fail: (error) => {
          if (!hideLoading) uni.hideLoading();
          console.log(error);
          if (error && error.response) {
            reject(error.response);
            this.showToast(error.response);
          }
        },
        complete: () => {
        },
      });
    });
  },
  // get请求
  get (options = {}) {
    options.method = 'GET';
    return this.request(options);
  },
  // post请求
  post (options = {}) {
    options.method = 'POST';
    return this.request(options);
  },
  // put请求
  put (options = {}) {
    options.method = 'PUT';
    return this.request(options);
  },
  // delete请求
  delete (options = {}) {
    options.method = 'DELETE';
    return this.request(options);
  },
  showToast (error, errorCode) {
    console.log(error, errorCode);
    if (errorCode) {
      if (errorCode == 401) {
        uni.redirectTo({
          url: '/pages/login/login',
        });
        return
      }
      if (process.env.NODE_ENV === 'development') {
        uni.showModal({
          title: '错误信息',
          content: error.msg,
          showCancel: false,
          complete: function () {
            setTimeout(function () {
              uni.hideToast();
            }, 1000);
          },
        });
      } else if (process.env.NODE_ENV === 'production') {
        uni.showToast({
          title: error.msg,
          icon: 'none',
          duration: 2000,
          complete: function () {
            setTimeout(function () {
              uni.hideToast();
            }, 2000);
          },
        });
      }
    } else {
      uni.showModal({
        title: '接口报错',
        content: JSON.stringify(error),
        showCancel: false,
        complete: function () { },
      });
    }
    return null;
  },
};
