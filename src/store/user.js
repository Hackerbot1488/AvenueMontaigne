import firebase from 'firebase/app'
export default {
  state: {
    user: {}
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    clearUser (state) {
      state.user = {}
    },
    fromAnon (state) {
      state.user.anonim = false
    },
    clearBag (state) {
      state.user.bag = []
    },
    deleteBag (state, dbId) {
      state.user.bag.splice(state.user.bag.findIndex(p => p.dbId === dbId), 1)
    },
    addBag (state, product) {
      state.user.bag.push(product)
    },
    incCountBag (state, iter) {
      if (iter !== undefined && iter !== null) {
        state.user.bag[iter].count++
      }
      state.user.countThings++
    },
    decCountBag (state, count) {
      state.user.countThings -= count
    },
    addPurchase (state, purchase) {
      state.user.purchases.push(purchase)
    },
    changeStatus (state, data) {
      const pIdx = state.user.purchases.findIndex(value => value.pId === data.purchaseId)
      state.user.purchases[pIdx].products[data.index].feedback = true
    },
    addFavorite (state, favorite) {
      state.user.favorite.push(favorite)
    },
    deleteFavorite (state, fId) {
      state.user.favorite.splice(state.user.favorite.findIndex(p => p.fId === fId), 1)
    }
  },
  actions: {
    async fetchUser ({ dispatch, commit }) {
      try {
        const userBag = []
        const userPurchases = []
        const userFavorite = []
        const uid = await dispatch('getUid')
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
    async updateUser ({ dispatch, commit, getters }, toUpdate) {
      try {
        const uid = await dispatch('getUid')
        const updateData = { ...getters.user, ...toUpdate }
        await firebase.database().ref(`/users/${uid}/`).update(updateData)
        commit('setUser', updateData)
      } catch (e) { }
    }
  },
  getters: {
    user: s => s.user,
    bag: s => s.user.bag,
    purchases: s => s.user.purchases,
    favorite: s => s.user.favorite
  }
}
