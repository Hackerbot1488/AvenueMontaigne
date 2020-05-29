import defenitions from './defenitions.js'
export default {
  install (Vue, options) {
    Vue.prototype.$defenition = function (gender, type) {
      return defenitions[`${gender}-${type}`] || null
    }
  }
}
