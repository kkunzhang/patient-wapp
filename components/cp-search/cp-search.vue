<template>
  <view>
    <view :class="[isBackground == true ? 'search_11' : '']">
      <uni-search-bar
        @confirm="search"
        :focus="false"
        v-model="searchValue"
        @input="input"
        @cancel="cancel"
        @clear="clear"
        clearButton="auto"
        :bg-color="bgColor"
        cancelButton="none"
        :placeholder="placeholder"
      ></uni-search-bar>
    </view>
  </view>
</template>

<script>
// 搜索
export default {
  name: 'search',
  data() {
    return {
      searchValue: '',
      search_11: '',
    }
  },
  props: {
    isBackground: {
      type: Boolean,
      default: false,
    },
    bgColor: {
      type: String,
      default: '#FFFFFF',
    },
    placeholder: {
      type: String,
      default: '输入科室、医生姓名搜医生',
    },
  },
  methods: {
    search(res) {
      // uni.showToast({
      //   title: '搜索：' + res.value,
      //   icon: 'none'
      // })
    },
    input(res) {
      console.log('----input:', res)
      this.$emit('searchValue', res)
    },
    clear(res) {
      // this.$emit('cancelSearch', '')
      // uni.showToast({
      //   title: 'clear事件，输入值为：' + res.value,
      //   icon: 'none'
      // })
    },
    cancel(res) {
      // uni.showToast({
      //   title: '点击取消，输入值为：' + res.value,
      //   icon: 'none'
      // })
    },
  },
}
</script>
<style lang="scss">
.search_11 {
  background-color: #fff;
}
</style>

