import http from '@api/request.js'
/**
 *  报告查询结果
 *  @return {Array}
 */
export const getReportResult = (data) => {
  return http.get({
    url: '/his-xfqrmyy/report/result',
    data,
  });
};
/**
 *  查询检查报告详情
 *  @return {Array}
 */
export const getReportLisDetail = (data) => {
  return http.get({
    url: '/his-xfqrmyy/report/lis/details',
    data,
  });
};
/**
 *  查询检验报告详情
 *  @return {Array}
 */
export const getReportPacsDetail = (data) => {
  return http.get({
    url: '/his-xfqrmyy/report/pacs/details',
    data,
    // hideLoading: true
  });
};


