import firebase from 'firebase/app'
export default {
  state: {
    images: []
  },
  actions: {
    async fetchImages () {
      var storageRef = firebase.storage().ref()
      storageRef.child('/products/shoes/snickers/jordan/jwnz03/female/баскетбольная-обувь-jordan-why-not-zer0-3-9VT80b (4).jpg').getDownloadURL().then(function (url) {
        // `url` is the download URL for 'images/stars.jpg'
        // Or inserted into an <img> element:
      }).catch(error => console.log(error))
    }
  }
}
