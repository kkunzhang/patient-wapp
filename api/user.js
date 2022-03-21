import request from '../utils/http.js'
module.exports = {
  login: data => {
    return request('/open/wx/maLogin', data, { method: 'POST' })
  },
  payInquiry: data => {
    return request('/patient/payment/payInquiry', data, { method: 'POST' })
  },
  refundForInquiry: data => {
    return request('/patient/payment/refundInquiry', data, { method: 'POST' })
  },
  interviewVerification: (data) => { // 发起问诊前验证
    return request('/patient/inquiry/preCreate', data, { method: 'POST' })
  },
  getDict: data => {
    return request('/open/dict', data, { hideLoading: true })
  },
  createInquiry: data => {
    return request('/patient/inquiry/create', data, { method: 'POST', hideMsg: true })
  },
  getIMSig: (data) => {
    return request('/patient/patient/getIMSig', data, { hideLoading: true, hideMsg: true })
  },
  banner: data => {
    return request('/open/banner', data)
  },
  getOrder: data => { // 问诊状态分页查询
    return request('/patient/inquiry/page', data)
  },
  getDoctorList: data => { // 医生列表
    return request('/open/doctor/paginate', data)
  },
  getMessageCount: data => { // 获取消息计数
    return request('/patient/message/countUnread', data)
  },
  getMessageList: data => { // 获取消息列表
    return request('/patient/message/listMessage', data)
  },
  setViewMessage: data => { // 设置为已读消息
    return request('/patient/message/markReaded', data, { method: 'POST' })
  },
  getVideoSchedule: data => { // 查询视频预约排班表
    return request('/patient/inquiry/queryVideoSchedule', data)
  },
  createFeedback: data => {
    return request('/patient/feedback/create', data, { method: 'POST' })
  },
  getIMHistory: data => { // 查询历史聊天记录
    return request('/patient/inquiry/getChatHistory', data)
  },
  getUserDefaultSetting: data => { // 获取默认用户
    return 222
    // return request('/patient/patient/showActive', data, { hideLoading: true, hideMsg: true })
  },
}
