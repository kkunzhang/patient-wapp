const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'https://testapi.jiukangguoji.cn/gateway'
    : 'https://testapi.jiukangguoji.cn/gateway'

const config = {
  modalColor: '#5271FF', //弹窗颜色 

  BASE_URL: BASE_URL
}

module.exports = config