import http from '@api/request.js'
/**
 *  申请退款
 *  @return {Array}
 */
export const toRefundApply = (registrationNo) => {
  return http.post({
    url: `/his-xfqrmyy/register/reservation/refund/apply/${registrationNo}`,
  });
};
/**
 *  退款订单
 *  @return {Array}
 */
export const getrefundsList = (data) => {
  return http.get({
    url: '/his-xfqrmyy/refunds',
    data,
  });
};
/**
 *  退款详情
 *  @return {Array}
 */
export const refundsDetail = (applyNo) => {
  return http.get({
    url: `/his-xfqrmyy/refunds/${applyNo}`,
  });
};
