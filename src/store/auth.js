/* eslint-disable no-useless-catch */
import firebase from 'firebase/app'
export default {
  actions: {
    async login ({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        dispatch('fetchUser') // fetch exist not anon user from db
      } catch (e) {
        throw e
      }
    },
    async loginAnonim ({ dispatch, commit }) {
      try {
        var userBag = []
        const userPurchases = []
        const userFavorite = []
        await firebase.auth().signInAnonymously()
        const uid = await dispatch('getUid')
        if (!((await firebase.database().ref(`/users/${uid}/`).once('value')).val() || null)) {
          await firebase.database().ref(`/users/${uid}/`).set({
            countThings: 0,
            anonim: true,
            name: 'guest'
          })
        }
        const user = (await firebase.database().ref(`/users/${uid}/`).once('value')).val()
        if (user.bag) {
          Object.keys(user.bag).forEach(dbId => {
            userBag.push({
              ...user.bag[dbId],
              dbId
            })
          })
        }
        if (user.purchases) {
          Object.keys(user.purchases).forEach(pId => {
            userPurchases.push({
              ...user.purchases[pId],
              pId
            })
          })
        }
        if (user.favorite) {
          Object.keys(user.favorite).forEach(fId => {
            userFavorite.push({
              ...user.favorite[fId],
              fId
            })
          })
        }
        commit('setUser', {
          countThings: user.countThings,
          anonim: user.anonim,
          bag: user.bag ? userBag : [],
          purchases: user.purchases ? userPurchases : [],
          favorite: user.favorite ? userFavorite : [],
          name: (user.name && user.surname) ? user.name + ' ' + user.surname : 'guest'
        })
      } catch (e) { }
    },
    async logout ({ commit }) {
      await firebase.auth().signOut()
      commit('clearUser')
    },
    async register ({ dispatch, getters, commit }, { email, password, name, surname }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        var userBag = []
        const userPurchases = []
        const userFavorite = []
        const uid = await dispatch('getUid')
        var bag = {}
        const purchases = {}
        const favorite = {}
        if (getters.user.bag.length) {
          for (var prod of getters.user.bag) {
            bag[prod.dbId] = {
              ...prod
            }
          }
        }
        if (getters.user.purchases.length) {
          for (var purchase of getters.user.purchases) {
            purchases[purchase.pId] = {
              ...purchase
            }
          }
        }
        if (getters.user.favorite.length) {
          for (var favor of getters.user.favorite) {
            favorite[favor.fId] = {
              ...favor
            }
          }
        }
        await firebase.database().ref(`/users/${uid}/`).set({
          ...getters.user,
          name,
          surname,
          anonim: false,
          bag,
          purchases,
          favorite
        })
        const user = (await firebase.database().ref(`/users/${uid}/`).once('value')).val()
        if (user.bag) {
          Object.keys(user.bag).forEach(dbId => {
            userBag.push({
              ...user.bag[dbId],
              dbId
            })
          })
        }
        if (user.purchases) {
          Object.keys(user.purchases).forEach(pId => {
            userPurchases.push({
              ...user.purchases[pId],
              pId
            })
          })
        }
        if (user.favorite) {
          Object.keys(user.favorite).forEach(fId => {
            userFavorite.push({
              ...user.favorite[fId],
              fId
            })
          })
        }
        commit('setUser', {
          countThings: user.countThings,
          anonim: false,
          bag: user.bag ? userBag : [],
          purchases: user.purchases ? userPurchases : [],
          favorite: user.favorite ? userFavorite : [],
          name: (user.name && user.surname) ? user.name + ' ' + user.surname : 'guest'
        })
      } catch (e) {
        throw e
      }
    },
    getUid () {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    }
  }
}
