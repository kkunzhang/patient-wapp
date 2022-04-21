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
    // hideLoading: false
  });
};

