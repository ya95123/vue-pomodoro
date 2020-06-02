import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheck, faPen, faTimes, faUndo, faSave, faPlay, faPause, faStepForward } from '@fortawesome/free-solid-svg-icons'
// 表格編輯套件(這樣的寫法可以在全域使用)
import draggable from 'vuedraggable'
// 引用字體
import 'noto-sans-tc/noto_sans_tc_regular/css.css'
import './style/style.stylus'
// GA分析
import VueGtag from 'vue-gtag'

Vue.component('draggable', draggable)
library.add(faCheck, faPen, faTimes, faUndo, faSave, faPlay, faPause, faStepForward)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
// GA分析 UA-168247584-1
// Vue.use(VueGtag, {
//   config: {
//     id: 'UA-168247584-1',
//     params: {
//       send_page_view: false
//     }
//   }
// })
Vue.use(VueGtag, {
  config: { id: 'UA-168247584-1' }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
