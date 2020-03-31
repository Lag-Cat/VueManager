// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//import vuex from 'vuex'
import axios from 'axios'
import store from './store/index.js'
// import ECharts from 'vue-echarts'
// import 'echarts/lib/chart/line'


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.config.devtools = true;
// Vue.component('chart', ECharts)
//Vue.use(vuex);
//Vue.use(axios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  components: { App },
  template: '<App/>'
})
