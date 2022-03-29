<template>
  <view>
    <card
      :isFull="true"
      @onClick="order"
      :isShow="false"
      :isShowOther="true"
    ></card>
    <uni-card :isFull="true" :border="false">
      <view>
        <text style="font-size: 22px; color: black; font-weight: 500"
          >擅长：</text
        >
        <text
          >对高血压，冠心病，心力衰歇，心律失常，心肌病，心血管危重症等疾病诊治及抢救有较高的造诣</text
        >
      </view>
      <view style="margin-top: 20px">
        <text style="font-size: 22px; color: black; font-weight: 500"
          >简介：</text
        >
        <text
          >从事胸外科临床、科研、教学及保健工作25余年，具有丰富的临床工作经验和严谨的工作作风，讲究工作效率和工作质量，有强烈的敬业精神和良好的职业道德。擅长肺部肿瘤、纵隔肿瘤、食管良、恶性肿瘤及贲门恶性肿瘤和良性病变等的诊断与外科治疗，能胜任胸外科的高难度手术，熟练主刀胸外科疾病的各种手术操作，成功进行食管癌、贲门癌、肺癌及纵隔肿瘤等切除手术1500余例。具有组织抢救和处理危重疑难病症的能力，有较强的科研和教学能力，具备本学科的学术带头人水平。率先开展国产电子计算机食管测压的临床应用研究，食管癌和贲门癌切除机械吻合术后重建食管的功能研究，以及负责肺癌患者多原发恶性肿瘤的诊断和外科治疗临床研究，均达到了国内先进水平。</text
        >
      </view>
    </uni-card>
  </view>
</template>

<script>
import card from '@/components/doctor/card.vue'
export default {
  components: {},
  // inster({
  data() {
    return {
      phone: '',
      openid: '',
      unionid: '',
      src: '/static/images/doctor.jpeg',
      user_name: '赵云',
      user_phone: '138****1234',
      userInfo: [
        {
          url: '/static/images/service-notification.png',
          title: '内容 A',
          subTitle: '明天到医院,我看看你的情况',
          extra: '昨天',
          patient: '李逵',
        },
      ],
    }
  },
  components: {
    card,
  },
}
</script>
<style lang="scss">
</style>
