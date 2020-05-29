import firebase from 'firebase/app'
import randomKey from '@/utils/randomString.js'
export default {
  mutations: {
  },
  actions: {
    async add ({ state, dispatch, commit, getters }, product) {
      try {
        var have = false
        var key = randomKey(10)
        var iter = 0
        var uId = await dispatch('getUid')
        var bag = getters.user.bag
        if (!bag) {
          state.user.bag = []
          bag = getters.user.bag
        }
        if (bag.length > 0) {
          for (var prod of bag) {
            if (prod.id === product.id && prod.gender === product.gender && prod.size === product.size) {
              var dbId = getters.user.bag[iter].dbId
              commit('incCountBag', iter)
              await firebase.database().ref(`/users/${uId}/countThings`).set(getters.user.countThings)
              var count = getters.user.bag[iter].count
              await firebase.database().ref(`/users/${uId}/bag/${dbId}/count`).set(count)
              have = true
              break
            }
            iter++
          }
        }
        if (!have) {
          await firebase.database().ref(`/users/${uId}/bag/${key}/`).set({
            ...product,
            count: 1
          })
          commit('incCountBag')
          await firebase.database().ref(`/users/${uId}/countThings`).set(getters.user.countThings)
          commit('addBag', {
            dbId: key,
            ...product,
            count: 1
          })
        }
      } catch (e) { }
    },
    async delete ({ commit, dispatch, getters }, { dbId, count }) {
      var uId = await dispatch('getUid')
      await firebase.database().ref(`/users/${uId}/bag/${dbId}/`).set({})
      commit('deleteBag', dbId)
      commit('decCountBag', count)
      await firebase.database().ref(`/users/${uId}/countThings`).set(getters.user.countThings)
    },
    async deleteSome (state, arr) {
      // do something
    },
    async clearBag ({ dispatch, commit }) {
      var uId = await dispatch('getUid')
      firebase.database().ref(`/users/${uId}/bag/`).set({})
      commit('clearBag')
    },
    async changeSize ({ dispatch }, { dbId, size }) {
      var uId = await dispatch('getUid')
      await firebase.database().ref(`/users/${uId}/bag/${dbId}/size/`).set(size)
    },
    async changeCount ({ dispatch }, { dbId, count }) {
      try {
        var uId = await dispatch('getUid')
        await firebase.database().ref(`/users/${uId}/bag/${dbId}/count/`).set(count)
      } catch (e) { }
    }
  }
  // if product id male size === product in bag than increase
}
