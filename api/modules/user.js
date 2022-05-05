import http from '@api/request.js'
/**
 *  添加就诊人
 *  @return {Array}
 */
export const addPatient = (data) => {
  return http.post({
    url: '/mem/tenant/patient/add',
    data,
  });
};
/**
 *  获取就诊人列表
 *  @return {Array}
 */
export const getPatientList = (data) => {
  return http.get({
    url: '/mem/tenant/patient',
    data,
  });
};
/**
 *  添加就诊人发送验证码
 *  @return {Array}
 */
export const sendSms = (data) => {
  return http.post({
    url: '/mem/tenant/patient/add/sms',
    data,
    // hideLoading: false
  });
};

