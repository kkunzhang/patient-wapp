import http from '@api/request.js'
/**
 *  查询排班科室
 *  @return {Array}
 */
export const getDept = (data) => {
  return http.get({
    url: '/register/dept',
    data,
  });
};
/**
 *  查询排班医生
 *  @return {Array}
 */
export const getDoctor = (data) => {
  return http.get({
    url: '/register/doctor',
    data,
  });
};
/**
 *  查询号源信息
 *  @return {Array}
 */
export const getReservation = (data) => {
  return http.get({
    url: '/register/reservation',
    data,
    // hideLoading: true
  });
};
/**
 *  挂号生成订单
 *  @return {Array}
 */
export const reservationLock = (data) => {
  return http.post({
    url: '/register/reservation/lock',
    data,
    // hideLoading: true
  });
};
/**
 *  查挂号记录
 *  @return {Array}
 */
export const reservationList = (data) => {
  return http.get({
    url: '/register/reservation/list',
    data,
    // hideLoading: true
  });
};
/**
 *  查挂号记录详情
 *  @return {Array}
 */
export const reservationDetail = (data) => {
  return http.get({
    url: '/register/reservation/details',
    data,
    // hideLoading: true
  });
};

