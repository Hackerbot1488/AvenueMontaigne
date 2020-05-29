/* eslint-disable quotes */
// eslint-disable-next-line no-unused-vars
import firebase from 'firebase/app'

export default {
  state: {
    shoes: [],
    clothes: [],
    accessoires: [],
    productsEdit: [],
    productsAll: {}
  },
  mutations: {
    setShoes (state, shoes) {
      state.shoes = shoes
    },
    setClothes (state, clothes) {
      state.clothes = clothes
    },
    setAccessoires (state, accessoires) {
      state.accessoires = accessoires
    },
    setAll (state, all) {
      state.productsAll = all
    },
    setEdit (state, products) {
      state.productsEdit = products
    },
    addComment (state, data) {
      const idx = state.productsEdit.findIndex(value => value.id === data.productId && value.gender === data.productGender)
      const comment = {
        header: data.header,
        rating: data.rating,
        body: data.body,
        name: data.name,
        date: data.date
      }
      state.productsEdit[idx].comments.ids.push(comment)
      state.productsEdit[idx].comments.value = state.productsEdit[idx].comments.ids.length
    },
    changeRating (state, data) {
      const idx = state.productsEdit.findIndex(value => {
        return value.id === data.productId && value.gender === data.productGender
      })
      state.productsEdit[idx].rating = {
        count: data.ratingCount,
        value: data.ratingValue,
        sum: data.ratingSum
      }
    }
  },
  actions: {
    async fetchAll ({ commit }) {
      try {
        const all = (await firebase.database().ref('/products/').once('value')).val()
        commit('setAll', all)
        commit('setShoes', all.shoes)
        commit('setClothes', all.clothes)
        commit('setAccessoires', all.accessoires)
      } catch (e) {}
    },
    async fetchShoes ({ commit }) {
      try {
        const shoes = (await firebase.database().ref('/products/shoes/').once('value')).val()
        commit('setShoes', shoes)
      } catch (e) {}
    },
    async fetchClothes ({ commit }) {
      try {
        const clothes = (await firebase.database().ref('/products/clothes/').once('value')).val()
        commit('setClothes', clothes)
      } catch (e) {}
    },
    async fetchAccessoires ({ commit }) {
      try {
        const accessoires = (await firebase.database().ref('/products/accessoires/').once('value')).val()
        commit('setAccessoires', accessoires)
      } catch (e) {}
    },
    fetchProducts ({ state }, data) {
      try {
        var products = []
        var product = null
        for (var prod of data) {
          product = state[prod.category][prod.type][prod.brand][prod.id]
          var prodSort = {
            sizes: [],
            isOnSale: null,
            price: null,
            priceWithSale: null,
            commonCount: null,
            description: null,
            new: null,
            images: [],
            ...prod
          }
          Object.keys(product[prod.gender]).forEach(value => {
            // eslint-disable-next-line no-constant-condition
            if (value === 'isOnSale' || value === 'price' || value === 'priceWithSale' || value === 'commonCount') {
              prodSort[value] = product[prod.gender][value]
            } else if (value === 'images') {
              // eslint-disable-next-line dot-notation
              Object.keys(product[prod.gender]['images']).forEach(value => {
                // eslint-disable-next-line dot-notation
                prodSort.images.push(product[prod.gender]['images'][value])
              })
            } else {
              const sizik = {
                size: value,
                // eslint-disable-next-line dot-notation
                count: product[prod.gender][value]['count']
              }
              prodSort.sizes.push(sizik)
            }
          })
          // eslint-disable-next-line dot-notation
          prodSort.description = product['description']
          // eslint-disable-next-line dot-notation
          prodSort.name = product['name']
          // eslint-disable-next-line dot-notation
          prodSort.new = product['new']
          products.push(prodSort)
        }
        return products
      } catch (e) {}
    },
    async fetchAllProd ({ dispatch }) {
      try {
        await dispatch('fetchShoes')
        await dispatch('fetchClothes')
        await dispatch('fetchAccessoires')
      } catch (e) {}
    },
    async fillProducts ({ getters, commit }) {
      /* eslint-disable dot-notation */
      /* eslint-disable no-unused-vars */
      var products = []
      var category = null
      var type = null
      var brand = null
      var id = null
      var gender = null
      var commonCount = null
      var description = null
      var sizes = null
      var count = null
      var price = null
      var isOnSale = null
      var priceWithSale = null
      var isNew = null
      var name = null
      var images = null
      var size = null
      var rating = null
      var comments = null
      const allProds = getters.allProducts
      Object.keys(allProds).forEach(value => {
        if (value !== 'accessoires') {
          category = value
          Object.keys(allProds[category]).forEach(value => {
            type = value
            Object.keys(allProds[category][type]).forEach(value => {
              brand = value
              Object.keys(allProds[category][type][brand]).forEach(value => {
                id = value
                Object.keys(allProds[category][type][brand][id]).forEach(value => {
                  isNew = allProds[category][type][brand][id]['new']
                  description = allProds[category][type][brand][id]['description']
                  name = allProds[category][type][brand][id]['name']
                  if (value === 'female' || value === 'male' || value === 'boys' || value === 'girls') {
                    gender = value
                    sizes = []
                    images = []
                    Object.keys(allProds[category][type][brand][id][gender]).forEach(value => {
                      if (value === 'price' || value === 'priceWithSale' || value === 'isOnSale' || value === 'commonCount') {
                        price = allProds[category][type][brand][id][gender]['price']
                        priceWithSale = allProds[category][type][brand][id][gender]['priceWithSale']
                        isOnSale = allProds[category][type][brand][id][gender]['isOnSale']
                        commonCount = allProds[category][type][brand][id][gender]['commonCount']
                      } else if (value === 'images') {
                        Object.keys(allProds[category][type][brand][id][gender]['images']).forEach(value => {
                          images.push(allProds[category][type][brand][id][gender]['images'][value])
                        })
                      } else if (value === 'rating') {
                        rating = allProds[category][type][brand][id][gender][value]
                      } else if (value === 'comments') {
                        comments = {
                          value: allProds[category][type][brand][id][gender]['comments']['value'],
                          ids: allProds[category][type][brand][id][gender]['comments']['ids'] || []
                        }
                      } else {
                        size = value
                        count = allProds[category][type][brand][id][gender][value]['count']
                        sizes.push({
                          size,
                          count
                        })
                      }
                    })
                    products.push({
                      category,
                      type,
                      brand,
                      id,
                      gender,
                      commonCount,
                      description,
                      sizes,
                      price,
                      isOnSale,
                      priceWithSale,
                      isNew,
                      name,
                      images,
                      rating,
                      comments
                    })
                  }
                })
              })
            })
          })
        }
      })
      commit('setEdit', products)
      return products
    },
    async fetchForMenu ({ getters }, params) {
      const prods = getters.editProducts
      var res = []
      var keep = null
      var keys = Object.keys(params)
      for (var prod of prods) {
        keep = true
        for (var key of keys) {
          if (prod[key] !== params[key]) {
            keep = false
            break
          }
        }
        if (keep) {
          res.push(prod)
        }
      }
      return res
    },
    async nullComments ({ getters }) {
      const nullComs = {
        value: 0
      }
      const products = getters.editProducts
      for (var firstProd of products) {
        await firebase.database().ref(`/products/${firstProd.category}/${firstProd.type}/${firstProd.brand}/${firstProd.id}/${firstProd.gender}/comments`).set(nullComs)
      }
    },
    async addComment ({ dispatch }, data) {
      try {
        const comment = {
          header: data.header,
          rating: data.rating,
          body: data.body,
          name: data.name,
          date: data.date
        }
        let comValue = data.commentIndex
        comValue++
        await firebase.database()
          .ref(`/products/${data.productCategory}/${data.productType}/${data.productBrand}/${data.productId}/${data.productGender}/comments/value/`).set(comValue)

        await firebase.database()
          .ref(`/products/${data.productCategory}/${data.productType}/${data.productBrand}/${data.productId}/${data.productGender}/comments/ids/${data.commentIndex}/`).set(comment)
      } catch (e) { }
    },
    async changeRating ({ dispatch, getters, commit }, data) {
      try {
        const rating = {
          count: data.ratingCount,
          value: data.ratingValue,
          sum: data.ratingSum
        }
        await firebase.database()
          .ref(`/products/${data.productCategory}/${data.productType}/${data.productBrand}/${data.productId}/${data.productGender}/rating/`).set(rating)
      } catch (e) { }
    },
    async replace () {
      const replace = (await firebase.database().ref(`/products/shoes/lowshoes/drmrtnswt/`).once('value')).val()
      await firebase.database().ref(`/products/shoes/lowshoes/drmartens/drmrtnswt/`).set(replace)
    }
  },
  getters: {
    shoes: s => s.shoes,
    clothes: s => s.clothes,
    accessoires: s => s.accessoires,
    allProducts: s => s.productsAll,
    editProducts: s => s.productsEdit
  }
}
