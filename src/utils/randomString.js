export default function (length) {
  var res = ''
  var symbols = 'abcdefghijklmnopqwxyz0123456789'
  for (var i = 0; i < length; i++) {
    res += symbols.charAt(Math.floor(Math.random() * symbols.length))
  }
  return res
}
