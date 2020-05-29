import sizes from './sizes.js'
export default {
  install (Vue, options) {
    Vue.prototype.$sizes = function (category, gender) {
      return sizes[`${category}-${gender}`] || null
    }
  }
}
