import http from '@api/request.js'
/**
 *  登陆
 *  @return {Array}
 */
export const login = (data) => {
  return http.post({
    url: '/api/apiLogin',
    data,
    hideLoading: false
  });
};

/**
 *  获取到货单详细
 *  @return {Array}
 */
export const getArriveOrderItem = (data) => {
  return http.get({
    url: '/api/getArriveOrderItem',
    data,
  });
};
