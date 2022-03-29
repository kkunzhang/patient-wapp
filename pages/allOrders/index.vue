<template>
  <view>
    <u-tabs
      :list="tabBars"
      lineWidth="30"
      lineColor="#f56c6c"
      :activeStyle="{
        color: '#303133',
        fontWeight: 'bold',
        transform: 'scale(1.05)',
      }"
      :inactiveStyle="{
        color: '#606266',
        transform: 'scale(1)',
      }"
      itemStyle="padding-left: 20px; padding-right: 20px; height: 44px;"
      >111
    </u-tabs>
    <payCard :list="info"></payCard>
  </view>
</template>

<script>
import payCard from '@/components/payCard/payCard.vue'
export default {
  components: { payCard },
  data() {
    return {
      info: [{ id: 1 }, { id: 2 }],
      tabBars: [
        {
          name: '全部',
          id: 'guanzhu',
        },
        {
          name: '待支付',
          id: 'tuijian',
        },
        {
          name: '服务中',
          id: 'tiyu',
        },
        {
          name: '已完成',
          id: 'redian',
        },
        {
          name: '待评价',
          id: 'caijing',
        },
      ],
    }
  },
}
</script>