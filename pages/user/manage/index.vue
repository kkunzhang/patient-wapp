<template>
  <view>
    <add-visiter></add-visiter>
    <view v-if="!loading">
      <uni-card v-for="(cardItem, i) in patientList" :key="i">
        <view class="box-outside-warp">
          <!-- 就诊卡片 -->
          <patien-card :list="cardItem"></patien-card>
          <view
            @click="onClick(item, cardItem)"
            v-for="(item, index) in navs"
            :key="index"
          >
            <view class="box-outside" style="margin-top: -40rpx">
              <button class="mini-btn" type="primary" size="mini">
                {{ item.title }}
              </button>
            </view>
          </view>
        </view>
      </uni-card>
    </view>
  </view>
</template>
<script>
import addVisiter from '@/components/add-visiter/add-visiter.vue'
import { throttle } from '@utils/utils'
import { patienCard } from '../components/patien-card.vue'
import { deletePatient, setPatient } from '@/api/modules/patientUser'
import { getTenantPatientList } from '@/utils/mixin.js'
export default {
  components: { addVisiter, patienCard },
  mixins: [getTenantPatientList],
  data() {
    return {
      show: false,
      lever: true,
      navs: [
        {
          icon: 'iconfont icon-ziyuan',
          title: '就诊卡',
          path: '/static/images/register.png',
        },
        {
          icon: 'iconfont icon-guanyuwomen',
          title: '健康档案',
          path: '/static/images/remote-outpatient.png',
        },
        {
          icon: 'iconfont icon-tupian',
          title: '电子病历',
          path: '/static/images/remote-consultation.png',
        },
        {
          icon: 'iconfont icon-ziyuan',
          title: '设为默认',
          path: '/static/images/register.png',
        },
        {
          icon: 'iconfont icon-guanyuwomen',
          title: '更改号码',
          path: '/static/images/remote-outpatient.png',
        },
        {
          icon: 'iconfont icon-tupian',
          title: '删除患者',
          path: '/static/images/remote-consultation.png',
        },
      ],
    }
  },
  methods: {
    onClick: throttle(function (item, cardItem) {
      switch (item.title) {
        case '删除患者':
          this.$tools.showModal('', '确认删除该患者?').then((res) => {
            if (res) {
              this.deletePatient(cardItem.patientId)
            }
          })
          break
        case '更改号码':
          this.editPhone(cardItem)
          break
        case '设为默认':
          if (cardItem.isDefault) {
            this.$tools.message('该就诊人已是默认就诊人', 'suc')
          } else {
            this.$tools.showModal('', '确认设置为默认?').then((res) => {
              if (res) {
                this.setPatient(cardItem.patientId)
              }
            })
          }
          break
        default:
          this.$tools.toast('敬请期待')
      }
    }),
    editPhone(cardItem) {
      uni.navigateTo({
        url: `/pages/user/manage/changePhone?patientId=${cardItem.patientId}`,
      })
    },
    async setPatient(patientId) {
      const data = await setPatient({}, patientId)
      if (data.code == 100000) {
        this.$tools.toast('设置成功', 'suc')
        this.getTenantPatientList()
      }
    },
    async deletePatient(patientId) {
      const data = await deletePatient({}, patientId)
      if (data.code == 100000) {
        this.$tools.toast('删除成功', 'suc')
        this.getTenantPatientList()
      }
    },
  },
}
</script>
<style lang="scss">
.box-outside-warp {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .fir-card-top-warp {
    display: flex;
    flex-wrap: wrap;
    .fir-card-top {
      display: flex;
      align-items: center;
      .fir-card-top-item {
        margin: 15rpx;
      }
      .sec-card-top-item {
        margin: 15rpx 0 15rpx 12rpx;
        position: relative;
        top: -40rpx;
        font-size: 34rpx;
      }
    }
  }

  .box-outside {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
    padding: 36rpx 0;
    width: 180rpx;
    .mini-btn {
      border-radius: 15px !important;
      // width: 50rpx;
      width: 180rpx;
    }
  }
}
</style>

