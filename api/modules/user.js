import http from '@api/request.js'
/**
 *  添加就诊人
 *  @return {Array}
 */
export const add = (data) => {
  return http.post({
    url: '/patient/add',
    data,
  });
};
/**
 *  删除就诊人
 *  @return {Array}
 */
export const patientDel = (data) => {
  return http.post({
    url: '/patient/delete',
    data,
  });
};
/**
 *  修改就诊人
 *  @return {Array}
 */
export const update = (data) => {
  return http.post({
    url: '/patient/update',
    data,
    // hideLoading: false
  });
};
