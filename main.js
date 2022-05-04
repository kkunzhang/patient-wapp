
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import uView from '@uni/uview-ui';
import store from './store/index'
import Plugins from '@/utils/plugins.js'
Vue.use(Plugins)
Vue.use(uView);
//阻止 vue 在启动时生成生产提示
if (process.env.NODE_ENV === 'development') {
  Vue.config.productionTip = false
}
App.mpType = 'app'
const app = new Vue({
  ...App,
  store
})
app.$mount()
// #endif
// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp () {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif