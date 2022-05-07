import http from '@api/request.js'
/**
 *  预约挂号支付（小程序）
 *  @return {Array}
 */
export const pay = (data) => {
  return http.POST({
    url: '/his-xfqrmyy/pay/wechat/js',
    data,
  });
};

