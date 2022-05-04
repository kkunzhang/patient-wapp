import http from '@api/request.js'
/**
 *  查询查询待缴费处方
 *  @return {Array}
 */
export const getPayList = (data) => {
  return http.get({
    url: '/his-xfqrmyy/prescription/wait/pay',
    data,
  });
};
/**
 *  查询待缴费处方和明细
 *  @return {Array}
 */
export const getPayDetail = (data) => {
  return http.get({
    url: '/his-xfqrmyy/prescription/detail',
    data,
  });
};
/**
 *  查询号源信息
 *  @return {Array}
 */
export const getReservation = (data) => {
  return http.get({
    url: '/his-xfqrmyy/register/reservation',
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
    url: '/his-xfqrmyy/register/reservation/lock',
    data,
    // hideLoading: true
  });
};
/**
 *  查询处方缴费列表
 *  @return {Array}
 */
export const prescriptionList = (data) => {
  return http.get({
    url: '/his-xfqrmyy/prescription/record/list',
    data,
    // hideLoading: true
  });
};
/**
 *  查询处方缴费详情
 *  @return {Array}
 */
export const prescriptionDetail = (data) => {
  return http.get({
    url: '/his-xfqrmyy/prescription/record/details',
    data,
    // hideLoading: true
  });
};

