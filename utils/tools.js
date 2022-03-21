const config = require('./config.js')

const toast = (title, type = 'text') => {
  if (title.length > 15) {
    console.error('toast长度超过15个字符,当前长度为' + title.length)
    return
  }
  var icon = 'none'
  if (type) {
    switch (type) {
      case 'text':
        icon = 'none'
        break
      case 'suc':
        icon = 'success'
        break
      case 'err':
        icon = 'error'
        break
    }
  }
  uni.showToast({
    title,
    icon
  })
};
const confirm = (title, confirmColor) => {
  return new Promise((res, rej) => {
    uni.showModal({
      title,
      cancelColor: '#b6b6b6',
      confirmColor: confirmColor || config.modalColor,
      success: (result) => {
        if (result.cancel) {
          rej(result)
        } else if (result.confirm) {
          res(result)
        }
      }

    })
  })
};
const showModal = (title = '提示', content = '确认执行该操作吗?', cancelText = '取消', confirmText = '确认') => {
  return new Promise(
    function (resolve, reject) {
      uni.showModal({
        title,
        content,
        cancelText,
        confirmText,
        success: res => {
          if (res.confirm) {
            console.log('用户点击确认');
            resolve(true) // 数据处理完成
          } else if (res.cancel) {
            console.log('用户点击取消');
            resolve(false)
            reject
          }
        }
      })
    })
};
const message = (content, confrimText) => {
  return new Promise((res) => {
    uni.showModal({
      title: '提示',
      content,
      showCancel: false,
      confirmColor: config.modalColor,
      success: (result) => {
        res(result)
      }
    })
  })
}
export default {
  toast, confirm, message, showModal
};
