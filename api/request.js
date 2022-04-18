// import store from '../store/index'
import configInfo from '@/utils/config.js'
export default {
  config: {
    // 请求的公共url
    baseUrl: configInfo.BASE_URL,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded',
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
    console.log(options)
    // const token = uni.getStorageSync('token') // 登录鉴权获得的 token
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
    let requestType = options.url.split('/');
    let typeVal = requestType[requestType.length - 1];
    if (typeVal !== 'apiLogin') {
      // this.config.header.Authorization = 'Bearer ' + token;
      this.config.header.Authorization = 'Basic ' + token;
    } else {
      delete this.config.header.Authorization;
    }
    // 基于 Promise 的网络请求
    return new Promise((resolve, reject) => {
      uni.request({
        url: options.url,
        data: options.data,
        header: this.config.header,
        method: options.method,
        success: (response) => {
          let res = response.data;
          if (res.code === 200) {
            resolve(res)
          } else { // 返回值非 200，强制显示提示信息
            showToast('[' + res.code + '] 系统处理失败')
            reject('[' + res.code + '] 系统处理失败')
          }
        },
        fail: (error) => {
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
  showToast (error) {
    let errorMsg = '';
    if (error) {
      switch (error.status) {
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
        });
      } else if (process.env.NODE_ENV === 'production') {
        uni.showToast({
          title: errorMsg,
          icon: 'none',
          duration: 4000,
          complete: function () {
            setTimeout(function () {
              uni.hideToast();
            }, 3000);
          },
        });
      }
    }
    return null;
  },

};
