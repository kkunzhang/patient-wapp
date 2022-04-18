
import store from '../store/index'
import config from '@/utils/config.js'
const showToast = (title) => {
  uni.showToast({
    title: title,
    icon: 'none'
  })
}
const showModal = (content) => {
  uni.showModal({
    title: '失败提示',
    content: content,
    showCancel: false,
    success: function (res) {
      return
    }
  })
}
/** 请求接口
 * @method request
 * @param {String} url 接口地址
 * @param {Object} data 接口参数
 * @param {Object} option 接口配置信息，可选
 * @return {Object} Promise
 */
const request = (url, data = {}, option = {}) => {
  console.log(option)
  const hideLoading = option.hideLoading || false // 是否显示 loading
  const hideMsg = option.hideMsg || false // 是否隐藏错误提示
  const method = option.method && (option.method.toUpperCase() || 'GET')	//	小写转大写
  const header = option.header || { 'content-type': 'application/x-www-form-urlencoded' }
  // const token = uni.getStorageSync('token') // 登录鉴权获得的 token
  if (!hideLoading) {
    uni.showLoading({
      title: '加载中...',
      mask: true
    })
  }
  return new Promise((resolve, reject) => {
    uni.request({
      url: config.BASE_URL + url,
      method: method, // 默认 post 请求
      header: {
        // 'Authorization': token,
        ...header,
        'Debug-User': 'of4Qa44Z6ivVljeJSHmG2FhOuYas'
      },
      data: data,
      success: res => { // 服务器成功返回的回调函数
        if (!hideLoading) uni.hideLoading()
        if (res.statusCode === 200) {
          const result = res.data
          if (result.state === 'ok') {
            if (!store.state.isToken) {
              store.commit('toggleIsToken', true)
            }
            return resolve(result)
          }
          if (result.state.includes('TOKEN')) {
            store.commit('toggleIsToken', false)
            uni.removeStorageSync('token')
          }
          reject(result)
          if (!hideMsg) showModal(result.msg)
        } else { // 返回值非 200，强制显示提示信息
          showToast('[' + res.statusCode + '] 系统处理失败')
          reject('[' + res.statusCode + '] 系统处理失败')
        }
      },
      fail: (err) => { // 接口调用失败的回调函数
        if (!hideLoading) uni.hideLoading()
        if (err.errMsg !== 'request:fail abort') {
          showToast('连接超时，请检查您的网络。')
          reject('连接超时，请检查您的网络。')
        }
      }
    })
  })
}
export default request

