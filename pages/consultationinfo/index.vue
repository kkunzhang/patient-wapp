<template>
    <block>
        <van-nav-bar title="远程会诊" left-arrow left-text="返回" class="title" border fixed placeholder></van-nav-bar>
        <view class="concent">
            <view class="card">
                <view class="card-title">参会医生</view>
                <view class="card-content">
                    <navigator class="card-content-item">
                        <van-image class="icon" width="96rpx" height="96rpx" fit="cover" src="/images/11111222.png.jfif" />
                        <text>胡医生</text>
                    </navigator>
                </view>
            </view>
        </view>
    </block>
</template>

<script>
import vanNavBar from '@vant/weapp/nav-bar/index';
import vanImage from '@vant/weapp/image/index';
// pages/message/index.js
export default {
    components: {
        vanNavBar,
        vanImage
    },
    data() {
        return {};
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
    methods: {}
};
</script>
<style>
@import './index.css';
</style>
