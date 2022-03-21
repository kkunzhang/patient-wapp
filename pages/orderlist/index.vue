<template>
    <view style="width: 100%; overflow-x: hidden">
        <van-nav-bar title="订单确认" custom-class="nav-bar" title-class="nav-bar-title" :border="false" fixed placeholder left-arrow @click-left="back" />
        <view class="message">
            请在
            <text class="time">29:58</text>
            内完成支付。超时订单自动取消。
        </view>
        <view class="centent">
            <view class="item-top">
                <view class="img">
                    <image src="../../images/11111222.png.jfif"></image>
                </view>
                <view class="item-top-right">
                    <view class="doctit">
                        <text class="docker">王医生</text>
                        <text>神经内科</text>
                        <text>主任医师</text>
                    </view>
                    <view>北京协和医院</view>
                </view>
            </view>

            <view class="item-bottom">
                <view>
                    <text>订单名称</text>
                    <text>远程会诊-视频问诊</text>
                </view>
                <view>
                    <text>就诊患者</text>
                    <text>赵云</text>
                </view>
                <view>
                    <text>参会医生</text>
                    <text>张围军</text>
                    <text>李小凡</text>
                </view>
            </view>
        </view>
        <view class="centent">
            <view style="font-size: large">支付信息</view>
            <!-- <van-cell title="支付信息"  border="false"  size="large" /> -->
            <view class="payment_item">
                <view>
                    <text>订单总额</text>
                    <text>￥30.00</text>
                </view>
                <view class="card-item" @tap="showFun">
                    <text>查看明细</text>
                    <image class="imgurl" src="/static/images/right.png"></image>
                </view>
            </view>

            <view class="payment_item">
                <view>
                    <text>医保报销</text>
                    <text v-if="lever == true">-￥5.00</text>
                    <text v-if="lever === false">就诊人未绑定医保卡</text>
                </view>
                <navigator class="card-item">
                    <image class="imgurl" src="/static/images/right.png"></image>
                </navigator>
            </view>
            <view class="payment_item">
                <view>
                    <text>优惠券</text>
                    <text>未使用</text>
                    <text class="wuyouhui">无可用券</text>
                </view>
                <navigator class="card-item">
                    <image class="imgurl" src="/static/images/right.png"></image>
                </navigator>
            </view>

            <view class="payment-footer">
                <view>
                    应付
                    <text class="price">￥25.00</text>
                </view>
            </view>
        </view>
        <view class="centent">
            <view>支付方式</view>
            <view class="weicat">
                <view class="weicat-item">
                    <image src="/static/images/weixinzhifu.png"></image>
                    <text>微信支付</text>
                </view>
                <view>
                    <van-radio-group :value="radio" @change="onChange">
                        <van-radio name="1" checked-color="#07c160" icon-size="24px"></van-radio>
                    </van-radio-group>
                </view>
            </view>
        </view>
        <van-submit-bar custom-class="total" button-class="bott" price-class="priceclas" bar-class="bar" :price="2500" button-text="去支付" @submit="onSubmit" />

        <van-action-sheet class="open" :close-on-click-overlay="true" :safe-area-inset-bottom="true" @close="onClose" :show="show" title="订单明细">
            <view class="centent" style="height: 280rpx">
                <view class="info-come">
                    <view class="info-img">
                        <image src="../../images/11111222.png.jfif"></image>
                    </view>
                    <view>
                        <view>
                            王医生
                            <text style="margin-left: 10rpx">神经内科</text>
                        </view>
                        <view>北京协和医院</view>
                    </view>
                </view>
                <view class="info-foot">
                    <text>远程会诊</text>
                    <text class="ppricce">￥120.00</text>
                </view>
            </view>
            <view class="centent" style="height: 280rpx">
                <view class="info-come">
                    <view class="info-img">
                        <image src="../../images/11111222.png.jfif"></image>
                    </view>
                    <view>
                        <view>
                            王医生
                            <text style="margin-left: 10rpx">神经内科</text>
                            <text style="margin-left: 10rpx">主任医师</text>
                        </view>
                        <view>北京协和医院</view>
                    </view>
                </view>
                <view class="info-foot">
                    <text>远程会诊</text>
                    <text class="ppricce">￥120.00</text>
                </view>
            </view>

            <view class="centent" style="height: 280rpx">
                <view class="info-come">
                    <view class="info-img">
                        <image src="../../images/11111222.png.jfif"></image>
                    </view>
                    <view>
                        <view>
                            王医生
                            <text style="margin-left: 10rpx">神经内科</text>
                            <text style="margin-left: 10rpx">主任医师</text>
                        </view>
                        <view>北京协和医院</view>
                    </view>
                </view>
                <view class="info-foot">
                    <text>远程会诊</text>
                    <text class="ppricce">￥120.00</text>
                </view>
            </view>
            <view class="centent" style="height: 280rpx">
                <view class="info-come">
                    <view class="info-img">
                        <image src="../../images/11111222.png.jfif"></image>
                    </view>
                    <view>
                        <view>
                            王医生
                            <text style="margin-left: 10rpx">神经内科</text>
                            <text style="margin-left: 10rpx">主任医师</text>
                        </view>
                        <view>北京协和医院</view>
                    </view>
                </view>
                <view class="info-foot">
                    <text>远程会诊</text>
                    <text class="ppricce">￥120.00</text>
                </view>
            </view>
        </van-action-sheet>
    </view>
</template>

<script>
import vanNavBar from '@vant/weapp/nav-bar/index';
import vanImage from '@vant/weapp/image/index';
import vanIcon from '@vant/weapp/icon/index';
import vanCard from '@vant/weapp/card/index';
import vanCountDown from '@vant/weapp/count-down/index';
import vanCell from '@vant/weapp/cell/index';
import vanCellGroup from '@vant/weapp/cell-group/index';
import vanRadio from '@vant/weapp/radio/index';
import vanRadioGroup from '@vant/weapp/radio-group/index';
import vanSubmitBar from '@vant/weapp/submit-bar/index';
import vanActionSheet from '@vant/weapp/action-sheet/index';
// pages/user/index.js
export default {
    components: {
        vanNavBar,
        vanImage,
        vanIcon,
        vanCard,
        vanCountDown,
        vanCell,
        vanCellGroup,
        vanRadio,
        vanRadioGroup,
        vanSubmitBar,
        vanActionSheet
    },
    data() {
        return {
            radio: '1',
            show: false,
            lever: true
        };
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {},
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {},
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {},
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {},
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {},
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {},
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {},
    methods: {
        onSubmit() {
            console.log('跳转去支付');
        },

        back() {
            uni.navigateBack({
                url: '/pages/onlinepayment/index'
            });
        },

        onChange(event) {
            console.log(event);
            this.setData({
                radio: event.detail
            });
        },

        showFun() {
            this.setData({
                show: true
            });
            console.log(11);
        },

        onClose() {
            this.setData({
                show: false
            });
        }
    }
};
</script>
<style>
@import './index.css';
</style>
