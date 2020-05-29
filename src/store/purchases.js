// eslint-disable-next-line no-unused-vars
import firebase from 'firebase/app'
// eslint-disable-next-line no-unused-vars
import randomKey from '@/utils/randomString.js'
export default {
  actions: {
    async makePurchase ({ dispatch, getters, commit }) {
      const products = getters.user.bag
      let price = 0
      let count = 0
      products.forEach(product => {
        delete product.commonCount
        delete product.loadingDelete
        delete product.loadingFavorite
        delete product.sizes
        delete product.sizesAll
        product.feedback = false
        price += product.priceWithSale
        count++
      })
      const purchase = {
        price,
        count,
        products,
        date: new Date().toString()
      }
      const uId = await dispatch('getUid')
      const key = randomKey(10)
      commit('addPurchase', {
        ...purchase,
        pId: key
      })
      try {
        await firebase.database().ref(`/users/${uId}/purchases/${key}/`).set({
          ...purchase,
          pId: key
        })
        await dispatch('clearBag')
      } catch (e) { }
    },
    async changeStatus ({ dispatch, commit }, data) {
      try {
        const uid = await dispatch('getUid')
        const stat = {
          index: data.index,
          purchaseId: data.purchaseId
        }
        const localComment = {
          header: data.header,
          rating: data.rating,
          body: data.body,
          name: data.name,
          date: data.date,
          productId: data.productId,
          productGender: data.gender
        }
        const comment = {
          commentIndex: data.newCommentValue,
          ...localComment,
          productId: data.productId,
          productCategory: data.category,
          productType: data.type,
          productBrand: data.brand,
          productGender: data.gender
        }
        const rating = {
          productId: data.productId,
          productCategory: data.category,
          productType: data.type,
          productBrand: data.brand,
          productGender: data.gender,
          ratingSum: data.ratingSum,
          ratingValue: data.ratingValue,
          ratingCount: data.ratingCount
        }
        await firebase.database().ref(`/users/${uid}/purchases/${data.purchaseId}/products/${data.index}/feedback/`).set(true)
        commit('changeStatus', stat)
        await dispatch('addComment', comment)
        commit('addComment', localComment)
        await dispatch('changeRating', rating)
        commit('changeRating', rating)
      } catch (e) { }
    }
  }
}
