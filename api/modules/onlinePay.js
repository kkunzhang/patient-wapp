import http from '@api/request.js'
/**
 *  查询查询待缴费处方
 *  @return {Array}
 */
export const getPayList = (data) => {
  return http.get({
    url: '/prescription/wait/pay',
    data,
  });
};
/**
 *  查询待缴费处方和明细
 *  @return {Array}
 */
export const getPayDetail = (data) => {
  return http.get({
    url: '/prescription/detail',
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

