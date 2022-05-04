import http from '@api/request.js'
/**
 *  微信小程序登录授权（小程序）
 *  @return {Array}
 */
export const login = (data, code) => {
  return http.post({
    url: `/mem/auth/v1/weChat/applet/auth/${code}`,
    data,
    hideLoading: false
  });
};

/**
 *  微信小程序授权获取手机号（小程序）
 *  @return {Array}
 */
export const phoneLogin = (data, code) => {
  return http.post({
    url: `/mem/auth/v1/weChat/applet/phone/${code}`,
    data,
  });
};
