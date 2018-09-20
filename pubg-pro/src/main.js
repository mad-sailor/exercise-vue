import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.prototype.$http = axios;
Vue.config.productionTip = false

Vue.filter('BigIToTime',function(val){
  var dt = new Date(parseInt(val));
  var y = dt.getFullYear();
  var m = dt.getMonth();
  m = m<10 ? '0'+m : m;
  var d = dt.getDate();
  d = d<10 ? '0'+d : d;
  var h = dt.getHours();
  h = h<10 ? '0'+h : h;
  var mi = dt.getMinutes();
  mi = mi<10 ? '0'+mi : mi;
  var s = dt.getSeconds();
  s = s<10 ? '0'+s : s;
  return y+'-'+m+'-'+d+' '+h+":"+mi+":"+s;
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
