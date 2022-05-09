import { getPayInfo } from '@api/modules/pay';
export const toPayMpWeiXin = {
  data() {
    return {};
  },
  methods: {
    // 生成订单并获取支付请求凭证
    async getPayInfo(code = '') {
      let openid = uni.getStorageSync('openId');
      const data = await getPayInfo({}, code, openid);
      console.log(data.data);
      if (data.code == 100000) {
        const flag = await this.pay(data.data);
        return flag;
      } else {
        return false;
      }
    },
    // 调用发起小程序支付
    pay(data) {
      return new Promise(function (resolve, reject) {
        uni.requestPayment({
          provider: 'wxpay',
          appId: data.appId,
          timeStamp: data.timeStamp, //时间戳
          nonceStr: data.nonceStr, //随机字符串
          package: data.wxPackage, //统一下单接口返回的 prepay_id 参数值
          signType: data.signType,
          paySign: data.paySign, //签名内容
          success(res) {
            console.log('success:' + JSON.stringify(res));
            uni.showToast({
              title: '支付成功',
              duration: 3000,
            });
            resolve(true); // 数据处理完成
          },
          fail(err) {
            console.log('fail:' + JSON.stringify(err));
            uni.showToast({
              title: '取消支付',
              duration: 3000,
            });
            resolve(false);
            reject;
          },
        });
      });
    },
  },
  mounted() {},
  created() {},
};
