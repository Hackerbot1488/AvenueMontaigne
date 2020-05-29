import Vue from 'vue'
import Vuex from 'vuex'
import products from './products.js'
import auth from './auth.js'
import user from './user.js'
import bag from './bag.js'
import images from './images.js'
import purchases from './purchases.js'
import favorite from './favorite.js'
import firebase from 'firebase/app'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async setPers () {
      await firebase.auth().setPersistence('local')
    }
  },
  modules: {
    products,
    auth,
    user,
    images,
    bag,
    purchases,
    favorite
  }
})
