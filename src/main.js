import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import 'vue-resize/dist/vue-resize.css'

import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import VueResize from 'vue-resize'


Vue.use(Antd, { size: 'small' })

Vue.use(VueResize)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
