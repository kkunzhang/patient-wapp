// import store from '../store/index'
import configInfo from '@/utils/config.js'
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
  // 请求拦截器
  interceptor: {
    request: null,
    response: null,
  },
  request (options) {
    // todo h5 和小程序端取的值不一样。
    const token = uni.getStorageSync('token') // 登录鉴权获得的 token
    console.log(uni.getStorageSync('token'));
    if (!options) {
      options = {};
    }
    const hideLoading = options.hideLoading || false // 是否显示 loading
    if (!hideLoading) {
      uni.showLoading({
        title: '加载中...',
        mask: true
      })
    }
    options.baseUrl = options.baseUrl || this.config.baseUrl;
    options.dataType = options.dataType || this.config.dataType;
    options.url = options.baseUrl + options.url;
    options.data = options.data || {};
    options.method = options.method || this.config.method;
    console.log(options);
    // #ifdef MP-WEIXIN
    if (options.url.indexOf('/mem/auth/') < 0 && token) {
      this.config.header.Authorization = 'bearer ' + token;
      console.log(token);
    }
    // #endif
    // #ifdef H5
    this.config.header.Authorization = 'bearer ' + '720100d0-de37-4683-a3e8-cd8c5e24cf37';
    // #endif
    // 基于 Promise 的网络请求
    return new Promise((resolve, reject) => {
      uni.request({
        url: options.url,
        data: options.data,
        header: this.config.header,
        method: options.method,
        success: (response) => {
          let res = response.data;
          console.log(res);
          if (res.code === 100000 || res.code === 10000) {
            resolve(res)
          } else { // 返回值非 200，强制显示提示信息
            if (res.errCode) {
              this.showToast(res, parseInt(res.errCode))
            } else if (res.code === 500000) {
              this.showToast(res, res.code)
            } else {
              this.showToast(res)
            }
            reject('[' + res + '] 系统处理失败')
          }
        },
        fail: (error) => {
          console.log(error);
          if (error && error.response) {
            reject(error.response);
            this.showToast(error.response);
          }
        },
        complete: () => {
          if (!hideLoading) uni.hideLoading()
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
    let errorMsg = '';
    console.log(error, errorCode);

    if (errorCode) {
      switch (errorCode) {
        case 400:
          errorMsg = '请求参数错误';
          break;
        case 403:
          errorMsg = '跨域拒绝访问';
          break;
        case 404:
          errorMsg = '很抱歉，资源未找到!';
          break;
        case 504:
          errorMsg = '网络超时';
          break;
        case 502:
          errorMsg = '服务器异常';
          break;
        case 401:
          uni.navigateTo({
            url: '/pages/login/login',
          })
          errorMsg = '未授权，请重新登录';
          break;
        default:
          errorMsg = '请求失败';
          break;
      }
      if (process.env.NODE_ENV === 'development') {
        uni.showModal({
          title: '报错信息',
          content: JSON.stringify(error),
          showCancel: false,
          complete: function () {
            setTimeout(function () {
              uni.hideToast();
              if (errorCode == 401) {
                uni.navigateTo({
                  url: '/pages/login/login',
                })
              }
            }, 1000);
          },
        });
      } else if (process.env.NODE_ENV === 'production') {
        uni.showToast({
          title: errorMsg,
          icon: 'none',
          duration: 4000,
          complete: function () {
            setTimeout(function () {
              uni.hideToast();
              if (errorCode == 401) {
                uni.navigateTo({
                  url: '/pages/login/login',
                })
              }
            }, 1000);
          },
        });
      }
    } else {
      //todo 后期删除
      uni.showModal({
        title: '接口报错',
        content: JSON.stringify(error),
        showCancel: false,
        complete: function () {
        },
      });
    }
    return null;
  },

};
