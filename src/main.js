import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueSweetalert2 from 'vue-sweetalert2';
const moment = require('moment')
require('moment/locale/pt')

import Print from 'vue-print-nb'

// import VueHtml2Canvas from 'vue-html2canvas';
// Vue.use(VueHtml2Canvas);
Vue.use(Print);
Vue.use(VueSweetalert2);
Vue.use(require('vue-moment'), {
  moment
});


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
