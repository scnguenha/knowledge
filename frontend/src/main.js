import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORARIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6IsOBdXJlYSBBbcOhbGlhIiwiZW1haWwiOiJhdXJlYW1hbmdhbmhlbGFAZ21haWwuY29tIiwiYWRtaW4iOiJmYWxzZSIsImlhdCI6MTYwMjA1OTI2OCwiZXhwIjoxNjAyMzE4NDY4fQ.XKkLDj4isqpImz1sgVtB9THdeVsdoKpzu4oFeXrHQuo'

new Vue({
  store, 
  router,
  render: h => h(App)
}).$mount('#app')