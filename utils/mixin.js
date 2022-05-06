import { getPatientList } from '@/api/modules/patientUser'
export const getTenantPatientList = {
  data () {
    return {
      patientId: '',
      defaultPatientList: [],
      patientList: [
        {
          age: 12,
          isDefault: true,
          name: 'zhangfei',
          patientId: 1234,
          phone: 17610229358,
          sex: '男',
          birthday: '1993-12-01',
        },
        {
          age: 12,
          isDefault: false,
          name: 'wangpeng',
          patientId: 2,
          phone: 112312312312,
          sex: 1,
        },
      ],
      loading: true,
    };
  },
  methods: {
    //获取就诊人列表
    async getTenantPatientList () {
      const params = {}
      const data = await getPatientList(params)
      if (data.data.records) {
        this.patientList = data.data.records
        this.checkDefaultPatient(data.data.records)
      }
      console.log(data)
    },
    //判断默认就诊人
    checkDefaultPatient (data) {
      this.patientId = ''
      data.forEach((element) => {
        if (element.isDefault) {
          this.patientId = element.patientId
          this.defaultPatientList = element
          return
        }
      })
      if (!this.patientId) {
        this.patientId = data[0].patientId
        this.defaultPatientList = data[0]
      }
      this.loading = false
    },
  },
  mounted () {
  },
  created () {
    this.getTenantPatientList()
  },
};