import http from '@api/request.js';
/**
 *  预约挂号支付（小程序）
 *  @return {Array}
 */
export const getPayInfo = (data, code, openid) => {
  return http.post({
    url: `/his-xfqrmyy/pay/wechat/js/${code}/${openid}`,
    data,
  });
};
