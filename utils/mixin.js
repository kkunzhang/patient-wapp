import { getPatientList } from '@/api/modules/patientUser';
export const getTenantPatientList = {
  data () {
    return {
      patientId: '',
      defaultPatientList: {},
      hospitalPatientId: '',
      patientList: [
        {
          age: 12,
          isDefault: true,
          name: 'zhangfei',
          patientId: 1234,
          phone: 17610229358,
          sex: '男',
          birthday: '1993-12-01',
          hospitalPatientId: '11',
        },
      ],
      loading: true,
    };
  },
  methods: {
    //获取就诊人列表
    async getTenantPatientList (isloading = false) {

      const params = {};
      const data = await getPatientList(params, isloading);
      if (data.data.records.length > 0) {
        this.patientList = data.data.records;
        this.checkDefaultPatient(data.data.records);
      } else {
        this.initPatient()
        this.loading = false;
      }
      console.log(data);
    },
    //判断默认就诊人
    checkDefaultPatient (data) {
      this.patientId = '';
      data.forEach((element) => {
        if (element.isDefault) {
          this.patientId = element.patientId;
          this.hospitalPatientId = element.hospitalPatientId
          this.defaultPatientList = element;
          return;
        }
      });
      if (!this.patientId) {
        this.patientId = data[0].patientId;
        this.hospitalPatientId = data[0].hospitalPatientId;
        this.defaultPatientList = data[0];
      }
      this.loading = false;
    },
    initPatient () {
      this.patientId = ''
      this.defaultPatientList = {}
      this.hospitalPatientId = ''
      this.patientList = []
    }
  },
  mounted () { },
  created () {
    // if (uni.getStorageSync('phone')) {

    //   console.log('获取就诊人');
    //   this.getTenantPatientList();
    // }
  },
};
