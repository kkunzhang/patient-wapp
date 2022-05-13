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
export const getPatientList = (data, isLoading = true) => {
  return http.get({
    url: '/mem/tenant/patient',
    data,
    hideLoading: isLoading
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
/**
 *  设置默认就诊人
 *  @return {Array}
 */
export const setPatient = (data, patientId) => {
  return http.post({
    url: `/mem/tenant/patient/default/${patientId}`,
    data,
  });
};

/**
 *  修改就诊人手机号
 *  @return {Array}
 */
export const editPatientMobile = (data, patientId) => {
  return http.post({
    url: `/mem/tenant/patient/mobile/${patientId}`,
    data,
  });
};
/**
 *  删除就诊人
 *  @return {Array}
 */
export const deletePatient = (data, patientId) => {
  return http.delete({
    url: `/mem/tenant/patient/${patientId}`,
    data,
  });
};


