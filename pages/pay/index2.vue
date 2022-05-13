<template>
  <view class="content">
    <view class="con-list">
      <view
        class="con-item"
        v-for="(item, index) in conList"
        :key="index"
        :style="{ backgroundColor: item.bgColor }"
      >
        {{ item.name }}
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      conList: [
        { id: 1, name: '第一', bgColor: '#D1AFFB' },
        { id: 2, name: '第二', bgColor: '#FFDEB1' },
        { id: 3, name: '第三', bgColor: '#D1AFFB' },
        { id: 4, name: '第四', bgColor: '#FFDEB1' },
        { id: 5, name: '第五', bgColor: '#D1AFFB' },
        { id: 6, name: '第六', bgColor: '#FFDEB1' },
        { id: 7, name: '第七', bgColor: '#FFDEB1' },
        { id: 8, name: '第八', bgColor: '#D1AFFB' },
      ],
    }
  },
  onLoad() {},
  methods: {},
}
</script>

<style>
.con-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 100rpx;
}
.con-item {
  width: 30%;
  height: 100rpx;
  text-align: center;
  line-height: 100rpx;
  color: rgb(83, 74, 74);
  margin-bottom: 20rpx;
}
.con-list::after {
  content: '';
  width: 30%;
}
</style>
