<template>
  <view class="container">
    <!-- 标题 -->
    <view class="title"><slot>待缴项目查询</slot></view>
    <!-- 就诊人信息卡片 -->
    <view>
      <u-skeleton rows="2" :loading="loading" :animate="true" :title="false">
        <!-- 无默认就诊人 -->
        <add-visiter
          v-if="!patientId"
          :isAdd="false"
          @isShowItemList="isShowItemList"
          >选择就诊人</add-visiter
        >
        <!-- 默认就诊人 -->
        <card-item v-else @openPop="onOpen" :list="defaultPatientList">
        </card-item>
      </u-skeleton>
    </view>

    <!-- 查询按钮 -->
    <view class="button">
      <button type="primary" @click="onClick()">查询</button>
    </view>
    <!-- 描述 -->
    <view class="bt-bottom" v-if="isShowText">
      <span v-html="contentText"> </span>
    </view>
    <!-- 弹窗 -->
    <card-pop
      :isShow="show"
      @closePop="closePop"
      @submitPatientId="submitPatientId"
      :items="patientList"
      :patientId="defaultPatientList.patientId"
    ></card-pop>
  </view>
</template>

<script>
import addVisiter from '@/components/add-visiter/add-visiter.vue'
import cardPop from '@/components/card-pop/card-pop.vue'
import cardItem from '@/components/card-item/card-item.vue'
import { getTenantPatientList } from '@/utils/mixin.js'
export default {
  components: { addVisiter, cardPop, cardItem },
  mixins: [getTenantPatientList],
  data() {
    return {
      show: false,
      contentText: `温馨提示 <br>
      1、仅支持待缴费用的查询。<br>

      2、目前仅支持非医保患者在线缴费，医保患者请到院内自助机或窗口缴费。<br>

      3、目前仅支持挂号、检查、检验、处方和线上服务待缴费用查询和缴费。其他待缴费用请到院内自助机或窗口缴费。<br>

      4、缴费有效期与线下缴费单一致，若在有效期内超时未交费，则查询不到该待缴项目信息。线上服务不受限制。<br>

      5、请注意，待缴明细中若涉及到需要人工划价的项目，请到医院人工窗口划价后再进行缴费<br>`,
    }
  },
  methods: {
    onClick(val) {
      uni.navigateTo({
        url:
          this.href +
          '?data=' +
          encodeURIComponent(JSON.stringify(this.defaultPatientList)),
      })
    },
    isShowItemList(val) {
      if (val) {
        this.show = true
      }
    },
    closePop(val) {
      this.show = false
    },
    onOpen() {
      this.show = true
    },
    submitPatientId(val) {
      if (val) {
        this.defaultPatientList = val
      }
      this.show = false
      this.$tools.toast('操作成功', 'suc')
    },
    //刷新页面
    getPatientListTofresh() {
      this.getTenantPatientList()
    },
  },
  props: {
    href: {
      type: String,
      default: '/pages/onlinepayment/list',
    },
    addFlag: {
      type: Boolean,
      default: false,
    },
    isShowText: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    addFlag: {
      handler(newVal, oldVal) {
        if (newVal) {
          console.log('过来了')
          this.getPatientListTofresh()
        }
      },
      // immediate: true,
    },
  },
}
</script>
<style lang="scss">
.container {
  .title {
    display: flex;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
    font-weight: 700;
    font-style: normal;
    padding: 200rpx 100rpx 20rpx 20rpx;
    font-size: 60rpx;
  }
  .button {
    margin: 22rpx;
    padding-top: 40rpx;
  }
  .bt-bottom {
    text-align: left;
    margin: 22rpx;
    padding-top: 40rpx;
  }
}
</style>
