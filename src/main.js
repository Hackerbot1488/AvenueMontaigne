import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Meta from 'vue-meta'
import firebase from 'firebase/app'
import currencyFilter from '@/filters/currency.filter.js'
import sizesPlugin from '@/utils/sizes.plugin.js'
import defenitionsPlugin from '@/utils/defenitions.plugin.js'
import treepleArrPlugin from '@/utils/treepleArr.plugin.js'
import InfiniteLoading from 'vue-infinite-loading'
import './registerServiceWorker'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import vuetify from './plugins/vuetify'
import Loader from '@/components/app/loader/Loader.vue'
Vue.config.productionTip = false
firebase.initializeApp({
  apiKey: 'AIzaSyD068QMzW_mXS2MK6zUB9L2d-T8MJVzhwY',
  authDomain: 'my-room-website.firebaseapp.com',
  databaseURL: 'https://my-room-website.firebaseio.com',
  projectId: 'my-room-website',
  storageBucket: 'my-room-website.appspot.com',
  messagingSenderId: '630829209919',
  appId: '1:630829209919:web:f2376eb164b2427f795b8a',
  measurementId: 'G-57XDVP5Z04'
})
Vue.use(Meta)
Vue.use(InfiniteLoading)
Vue.use(sizesPlugin)
Vue.use(defenitionsPlugin)
Vue.use(treepleArrPlugin)
Vue.component('Loader', Loader)
Vue.filter('Currency', currencyFilter)

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})
