<template>
  <view>
    <u-popup
      :show="show"
      mode="bottom"
      :closeable="true"
      @close="close"
      closeIconPos="top-left"
      :safeAreaInsetBottom="true"
    >
      <view class="center" :style="{ height: height + 65 + 'px' }">
        <!-- 循环 -->
        <view v-for="(item, index) in items" :key="index">
          <view
            class="card-user-info"
            :style="{
              backgroundColor: item.patientId == patientId ? color : colorOther,
            }"
          >
            <!-- :style="{ backgroundColor: index === current ? color : colorOther }" -->
            <view class="center-item">
              <!-- 卡片文字 -->

              <view>
                <view class="card-item-add">
                  <text>{{ item.name }}</text>
                  <view>{{ item.phone }}</view>
                </view>
                <view class="fir-card-top">
                  <text>{{ item.sex }} </text>
                  <text>{{ item.age }} 岁 </text>
                  <text>{{ item.birthday }} </text>
                </view>
              </view>

              <!-- 选中按钮 -->
              <radio-group @change="radioChange">
                <label class="uni-list-cell uni-list-cell-pd">
                  <view class="radio-right">
                    <radio
                      :value="item.patientId.toString()"
                      :checked="item.patientId == patientId"
                    />
                    <!-- :checked="index === current" -->
                  </view>
                </label>
              </radio-group>
              <!-- 选中按钮结束 -->
            </view>
          </view>
        </view>
        <add-visiter v-if="isShowAdd"></add-visiter>
      </view>
      <cp-button @onSubmit="onSubmit">提交</cp-button>
    </u-popup>
  </view>
</template>
<script>
import addVisiter from '@/components/add-visiter/add-visiter.vue'
export default {
  components: { addVisiter },
  data() {
    return {
      height: null, //获取的状态栏高度
      color: 'skyblue',
      colorOther: '#f2f2f2',
      value: 0,
      current: 1,
      show: false,
      defaultPatientList: [],
    }
  },
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    isShowAdd: {
      type: Boolean,
      default: true,
    },
    items: {
      type: Array,
      default() {
        return []
      },
    },
    patientId: {
      type: Number,
      default() {
        return 0
      },
    },
  },
  watch: {
    isShow: {
      handler(newVal, oldVal) {
        this.show = newVal
      },
    },
  },
  methods: {
    radioChange(evt) {
      console.log(evt)
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].patientId == evt.detail.value) {
          this.current = i
          this.patientId = evt.detail.value
          this.defaultPatientList = this.items[i]
          console.log(evt.detail)

          break
        }
      }
    },
    close() {
      this.$emit('closePop', 0)
    },
    onSubmit() {
      if (this.defaultPatientList.length == 0) {
        this.defaultPatientList = this.items[0]
      }

      this.$emit('submitPatientId', this.defaultPatientList)
    },
  },
}
</script>
<style lang="scss">
.center {
  margin-bottom: 100%;
  margin-top: 60rpx;
  .center-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .card-item-add {
      display: flex;
      text {
        font-size: $uni-font-size-h1;
        color: #333333;
        font-weight: 500;
        margin-right: 30rpx;
      }
      view {
        font-size: $uni-font-size-h3;
      }
    }
    .fir-card-top {
      display: flex;
      flex-wrap: wrap;
      margin-top: 1rpx;
      text {
        margin-right: 30rpx;
        font-size: $uni-font-size-h3;
      }
    }
  }
  .card-user-info {
    margin: 20rpx;
    padding: 8rpx 60rpx;
    border-radius: 20rpx;
    overflow: hidden;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
      Microsoft YaHei, SimSun, sans-serif;
    background-color: #fff;
    flex: 1;
    border: 2rpx solid #dcdcdc;
    // height: 140rpx;
    line-height: 62rpx;
  }
}

.submit-box {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>