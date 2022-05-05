<template>
  <view class="page">
    <sl-filter
      :ref="'slFilter'"
      :topFixed="true"
      :isTransNav="true"
      :navHeight="0"
      :color="titleColor"
      :themeColor="themeColor"
      :menuList="menuList"
      @result="result"
    ></sl-filter>
    <!-- :independence="true" -->
    <!-- 搜索 -->
    <cp-search :isBackground="true" @searchValue="searchValue"></cp-search>
    <!-- todo测试 -->
    <button @click="onClick2()">清缓存</button>
    <!-- 医生号源信息 -->
    <text v-if="info1.length === 0">暂无数据</text>
    <view v-else>
      <view v-for="(item, index) in info1" :key="index">
        <card @onClick="order" :isShow="false" :isShowOther="true"></card>
      </view>
    </view>
  </view>
</template>

<script>
import card from '@/components/doctor/card.vue'
import slFilter from '@/components/sl-filter/sl-filter.vue'

export default {
  data() {
    return {
      info1: [{ id: 1 }, { id: 2 }],
      themeColor: '#000000',
      titleColor: '#000000',
      menuList: [
        {
          title: '科室',
          detailTitle: '请选择科室',
          isMutiple: false,
          key: 'key_1',
          mySl: true,
          detailList: [],
        },
        {
          title: '全国',
          detailTitle: '请选择热门城市',
          key: 'key_2',
          myCity: true,
          isMutiple: false,
          detailList: [],
        },
        {
          title: '排序',
          key: 'key_3',
          isSort: true,
          isMutiple: false,
          detailList: [
            {
              title: '服务次数从多到少',
              value: 'val_3_1',
            },
            {
              title: '好评率高到低',
              value: 'val_3_2',
            },
            {
              title: '价格从高到低',
              value: 'val_3_3',
            },
          ],
        },
        {
          title: '筛选',
          detailTitle: '请选择',
          key: 'key_4',
          isMutiple: false,
          detailList: [
            {
              title: '不限',
              value: '',
            },
            {
              title: '远程门诊',
              value: 'val_2_1',
            },
            {
              title: '远程会诊',
              value: 'val_2_2',
            },
          ],
        },
      ],
    }
  },
  components: {
    slFilter,
    card,
  },
  onLoad() {
    // getApp().globalData.token = '3333'
    // console.log(getApp().globalData.token)
    // uni.navigateTo({
    //   url: '/pages/login/login',
    // })
    var loginRes = this.checkLogin('/pages/doctorList/index', 2)
    // 没有登录成功，返回空
    if (!loginRes) {
      return
    }
  },
  methods: {
    // 搜索
    searchValue(val) {
      this.keyword = val
      // this.getList()
    },
    order(val) {
      console.log(val)
      uni.navigateTo({
        url: '/pages/doctorList/detail',
      })
    },
    async onClick(index, id) {
      this.active = index
    },
    async onClick2(index, id) {
      uni.setStorageSync('nickName', '')
      uni.setStorageSync('avatarUrl', '')
      uni.setStorageSync('phone', '')
      uni.setStorageSync('token', '')
    },
    changeMenuListDetailList() {
      let tempDetailList = [
        {
          title: '不限',
          value: '',
        },
        {
          title: 'new_1',
          value: 'new_1',
        },
        {
          title: 'new_2',
          value: 'new_2',
        },
        {
          title: 'new_3',
          value: 'new_3',
        },
      ]
      this.menuList[0].detailList = tempDetailList
      this.$refs.slFilter.resetMenuList(this.menuList)
    },
    result(val) {
      console.log('filter_result:' + JSON.stringify(val))
      this.filterResult = JSON.stringify(val, null, 2)
    },
  },
}
</script>
<style>
</style>
