export default {
  install (Vue, options) {
    Vue.prototype.$treepleArr = function (array, number) {
      var res = []
      for (var j = 0; j < Math.ceil(array.length / number); j++) {
        var temp = []
        for (var i = 0; i < number; i++) {
          if (array[j * number + i] === undefined) {
            break
          } else {
            temp.push(array[j * number + i])
          }
        }
        if (temp.length) {
          res.push(temp)
        }
      }
      return res
    }
  }
}
