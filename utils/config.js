const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://testapi.jiukangguoji.cn/gateway/his-xfqrmyy'
    : 'http://testapi.jiukangguoji.cn/gateway/his-xfqrmyy'

const config = {
  modalColor: '#5271FF', //弹窗颜色 
  AppID: 'wx456976b4619ff3f7',
  AppKey: 'wx456976b4619ff3f7',
  AppSecret: 'f544d4e449673ed4df5b7a9e264f7aaf',
  BASE_URL: BASE_URL
}

module.exports = config