// eslint-disable-next-line no-unused-vars
import firebase from 'firebase/app'
// eslint-disable-next-line no-unused-vars
import randomKey from '@/utils/randomString.js'
export default {
  actions: {
    async addFavorite ({ dispatch, commit, getters }, fav) {
      const favorites = getters.favorite
      var have = false
      favorites.forEach(item => {
        if (item.id === fav.id && item.size === fav.size && item.gender === fav.gender) {
          have = true
        }
      })
      if (have) {
        return 0
      }
      try {
        const uId = await dispatch('getUid')
        const fId = randomKey(10)
        delete fav.loadingDelete
        delete fav.loadingFavorite
        delete fav.sizes
        delete fav.sizesAll
        delete fav.comments
        delete fav.rating
        await firebase.database().ref(`/users/${uId}/favorite/${fId}/`).set({
          ...fav,
          fId
        })
        commit('addFavorite', {
          ...fav,
          fId
        })
      } catch (e) {}
    },
    async deleteFavorite ({ dispatch, commit, getters }, fId) {
      const favorites = getters.favorite
      var have = false
      favorites.forEach(item => {
        if (item.fId === fId) {
          have = true
        }
      })
      if (!have) {
        return 0
      }
      try {
        const uId = await dispatch('getUid')
        await firebase.database().ref(`/users/${uId}/favorite/${fId}/`).set(null)
        commit('deleteFavorite', fId)
      } catch (e) {}
    }
  }
}
