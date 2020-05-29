<template>
  <div style="width:100%;height:100%">
    <div v-if="!Object.keys(product).length" style="text-align:center;">
      <h1>Данного продукта нет в наличии.</h1>
    </div>
    <div v-else class="wrap-product-info">
      <div class="wrap-name-price mobile-price">
        <div class="name">
          <h3>{{product.name}}</h3>
          <h4>{{this.$defenition(product.gender, product.type)}}</h4>
        </div>
        <div class="price">
          <div v-if="product.isOnSale">
            <p class="with-sail">{{product.priceWithSale | Currency}}</p>
            <p class="cross-out">{{product.price | Currency}}</p>
          </div>
          <p class="with-sail" v-else>{{product.priceWithSale | Currency}}</p>
        </div>
      </div>
      <div class="wrap-product-images">
        <div class="product-images"
          v-for="(container, index) in imagesArr"
          :class="{'typ-container' : index === 1}"
          :key="index + 50"
        >
          <div class="image-wrap" :class="{'typ-img' : index === 1}" v-for="(image, index) in container" :key="image + index">
            <v-img
              class="main-img"
              :src="image"
            />
          </div>
        </div>
      </div>
      <div class="mobile-photos">
        <v-carousel
          hide-delimiters
          :show-arrows="false"
          progress
          class="mobile-photo"
          height="100%"
          cycle
          progress-color="#000"
          id="carousel"
        >
          <v-carousel-item
            class="mobile-photo"
            v-for="(image,i) in product.images"
            :key="i"
            :src="image"
          >
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="wrap-product-menu">
        <div class="wrap-name-price desktop-price">
          <div class="name">
            <h4>{{this.$defenition(product.gender, product.type)}}</h4>
            <h3>{{product.name}}</h3>
          </div>
          <div class="price">
            <div v-if="product.isOnSale">
              <p class="with-sail">{{product.priceWithSale | Currency}}</p>
              <p class="cross-out">{{product.price | Currency}}</p>
            </div>
            <p class="with-sail" v-else>{{product.priceWithSale | Currency}}</p>
          </div>
        </div>
        <div class="wrap-form">
          <p :class="{'error-p' : error}">Выбери размер</p>
            <v-form
              @submit.prevent="addProduct"
            >
              <v-btn-toggle
                v-model="selectedSize"
                tile
                group
                class="toggle-group"
              >
                <div class="buttons-wrap">
                  <div class="button-group"
                    v-for="(sizes, index) in sizesArr"
                    :class="{'up-button-group' : index !== 3}"
                    :key="index"
                  >
                    <v-btn
                      v-for="(size,index) in sizes"
                      class="size-button"
                      :key="size + index"
                      :value="size"
                      @click="clicked"
                      outlined
                      active-class="black white--text"
                      :disabled="!product.sizes.find(s => (s.size === size && s.count > 0))"
                      :class="{'left-button' : index === 0, 'error-p' : error}"
                    >
                      {{size}}
                    </v-btn>
                  </div>
                </div>
              </v-btn-toggle>
              <v-btn
                rounded
                block
                depressed
                :loading="loadingCart"
                color="black"
                type="submit"
                class="submit-button user-buttons"
              >
                Добавить в корзину
              </v-btn>
              <v-btn
                rounded
                block
                class="favorite-button user-buttons"
                :loading="loadingFavorite"
                @click="addFavorite"
                outlined
              >
                В избранное
              </v-btn>
            </v-form>
            <v-textarea
              v-if="product.description !== undefined && product.description.length > 10"
              auto-grow
              outlined
              dense
              rows="2"
              class="description-product"
              color="black"
              label="Описание товара"
              rounded
              hide-details
              v-model="product.description"
              readonly
            ></v-textarea>
              <v-dialog v-model="dialog" fullscreen hide-overlay  transition="dialog-bottom-transition" class="dialog-feedback">
                <template v-slot:activator="{ on }">
                  <v-btn
                    :loading="loadProduct"
                    color="black"
                    dark
                    v-on="on"
                    rounded
                    block
                    class="user-buttons"
                  >Отзывы({{commentsCount}})
                  <v-rating
                    :value="rating"
                    readonly
                    background-color="yellow lighten-2"
                    color="yellow"
                    small
                    dense
                  ></v-rating>
                  </v-btn>
                </template>
                <v-card>
                  <v-toolbar dark flat color="black" class="menu-feedback">
                    <v-btn icon dark @click="dialog = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title class="toolbar-title">Отзывы({{commentsCount}})</v-toolbar-title>
                    <v-rating
                      :value="rating"
                      readonly
                      background-color="yellow lighten-2"
                      color="yellow"
                      half-icon="$ratingHalf"
                      medium
                      dense
                    ></v-rating>
                    <!-- <v-spacer></v-spacer> -->
                  </v-toolbar>
                  <div class="wrap-wrap-form-comment">
                    <div class="wrap-form-comment">
                      <FormComment v-if="wrapPurchased === false" @added="pushComment" />
                      <v-divider v-if="wrapPurchased === false"></v-divider>
                      <div class="wrap-comments" v-if="commentsCount">
                        <Comment v-for="(item, index) in comments" :key="index" :comment="item" />
                      </div>
                      <p class="empty-comment" v-else>У этого товара пока что нет отзывов.</p>
                    </div>
                  </div>
                </v-card>
              </v-dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from '@/components/app/feedback/Comment.vue'
import FormComment from '@/components/app/feedback/FormComment.vue'
export default {
  name: 'ProductInfo',
  props: {
    productFrom: {
      type: Object,
      default: null
    }
  },
  components: {
    Comment,
    FormComment
  },
  metaInfo: {
    title: 'Avenue Montaigne'
  },
  data () {
    return {
      conditions: {},
      imagesArr: [],
      sizesArr: [],
      product: {},
      selectedSize: undefined,
      error: false,
      loadingCart: false,
      loadingFavorite: false,
      comment: {},
      dialog: false,
      loadProduct: true,
      purchased: null
    }
  },
  computed: {
    wrapPurchased () {
      return this.purchased
    },
    rating () {
      if (Object.keys(this.product).length) {
        return this.product.rating.sum > 0 ? this.product.rating.sum / this.product.rating.count : 0
      } else {
        return 0
      }
    },
    commentsCount () {
      if (Object.keys(this.product).length) {
        return this.product.comments.value
      } else {
        return 0
      }
    },
    comments () {
      if (Object.keys(this.product).length) {
        return this.product.comments.ids
      } else {
        return []
      }
    }
  },
  methods: {
    async addProduct () {
      if (!this.selectedSize) {
        this.error = true
        return
      }
      this.loadingCart = true
      var size = this.selectedSize
      var sizes = []
      await this.$store.dispatch('add', {
        ...this.product,
        size,
        sizes
      })
      this.selectedSize = undefined
      this.loadingCart = false
    },
    async addFavorite () {
      if (!this.selectedSize) {
        this.error = true
        return
      }
      this.loadingFavorite = true
      var size = this.selectedSize
      await this.$store.dispatch('addFavorite', {
        ...this.product,
        size
      })
      this.selectedSize = undefined
      this.loadingFavorite = false
    },
    clicked () {
      if (this.error) {
        this.error = false
      }
    },
    prepareComment (index, purchaseId, productId) {
      this.comment.index = index
      this.comment.purchaseId = purchaseId
      this.comment.productId = productId
    },
    async pushComment (comment) {
      const ratingCount = ++this.product.rating.count
      const ratingSum = this.product.rating.sum + comment.rating
      const ratingValue = ratingSum / ratingCount
      const dataComment = {
        ...this.comment,
        ...comment,
        category: this.product.category,
        type: this.product.type,
        brand: this.product.brand,
        gender: this.product.gender,
        ratingCount,
        ratingSum,
        ratingValue,
        newCommentValue: this.product.comments.value
      }
      // доделать с рейтингом
      await this.$store.dispatch('changeStatus', dataComment)
      this.product = (await this.$store.dispatch('fetchForMenu', this.conditions))[0]
      this.toggleForm()
    },
    async toggleForm () {
      const purchases = this.$store.getters.purchases
      this.purchased = null
      if (!purchases) {
        return this.purchased
      }
      for (const purchase of purchases) {
        const products = purchase.products
        for (let i = 0; i < products.length; i++) {
          if (products[i].id === this.product.id) {
            if (products[i].feedback) {
              this.purchased = true
            } else {
              this.purchased = false
              this.prepareComment(i, purchase.pId, products[i].id)
              break
            }
          }
        }
        if (this.purchased === false) {
          break
        }
      }
      return this.purchased
    }
  },
  async mounted () {
    window.scrollTo(0, 0)
    if (!this.productFrom) {
      this.conditions = this.$route.params
      this.product = (await this.$store.dispatch('fetchForMenu', this.conditions))[0]
    } else {
      this.product = this.productFrom
    }
    this.toggleForm()
    this.loadProduct = false
    const imgs = this.product.images
    for (var i = 0; i < 3; i += 2) {
      const arr = []
      for (var j = 0; j < 2; j++) {
        if (imgs[j + i]) {
          arr.push(imgs[j + i])
        }
      }
      if (arr.length) {
        this.imagesArr.push(arr)
      }
    }
    this.sizesArr = this.$sizes(this.product.category, this.product.gender)
  },
  beforeDestroy () {
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss" scoped>
.wrap-product-info {
  display: flex;
  flex-direction: row;
  margin: 40px calc((100% - 1368px)/2);
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  p {
    font-size: 16px;
  }
}
.toggle-group {
  width: 100%;
}
.desktop-price {
  display: block;
}
.mobile-price {
  display: none !important;
}
.wrap-product-images {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.description-product {
  cursor: default;
  display:block;
  flex:0 !important;
  margin-bottom: 10px;
}
.dialog-feedback {
  z-index:101;
}
.menu-feedback {
  position:sticky;
  top:0;
  z-index:102;
}
.wrap-form-comment {
  display:flex;
  flex-direction:column;
}
.wrap-wrap-form-comment {
  display:flex;
  flex-direction:column;
  align-items:center;
}
.toolbar-title {
  margin-right:1rem;
}
.product-images {
  display: flex;
  margin-bottom: 10px;
}
.empty-comment {
  align-self:center;
  margin-top: 20px;
}
.wrap-product-menu {
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  width: 340px;
}
.main-img {
  width: 469px;
  height: 469px;
}
.typ-img {
  margin-right: 0 !important;
}
.typ-container {
  margin-bottom:0;
}
img {
  cursor:pointer;
}
.wrap-name-price {
  display: flex;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  margin-bottom: 50px;
}
.caritem {
  width:0px;
  height:0px;
}
.name {
  flex: 1;
  h4 {
    margin: 3px 0 10px 0;
  }
  h3 {
    font-weight: 700;
    margin: 0;
  }
}
.price {
  flex: 0;
  p {
    margin: 0;
  }
}
.cross-out {
  text-decoration: line-through;
}
.wrap-form {
  flex: 1;
}
.buttons-wrap {
  display: flex;
  flex-direction: column;
}
.button-group {
  display: flex;
  flex-direction: row;
}
.user-buttons {
  height: 60px !important;
}
.left-button {
  margin-right: 5px;
}
.up-button-group {
  margin-bottom: 5px;
}
.size-button {
  width: 168.1px;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
}
.submit-button {
  margin: 10px 0px;
  color: white;
}
.submit-button:hover {
  opacity: 0.75;
}
.favorite-button {
  color: black;
  margin-bottom: 15px;
}
.favorite-button:hover {
  opacity: 0.75;
}
.with-sail {
  margin-top:-3px;
  float: right;
}
.error-p {
  color: red;
}
.error-form {
  border: 1.5px solid red;
  border-radius: 6px;
}
.mobile-photos {
  display: none;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
}
.mobile-photo {
  height: 100% !important;
  /* min-height: 200px; */
  min-height: calc(100vw - 40px);
  background-color: #f3f3f3;
}
.mobile-carousel {
  height: 100% !important;
}
.image-wrap {
  max-width: 469px;
  max-height: 469px;
  margin-right: 10px;
  background-color: #f3f3f3;
}
@media (max-width: 1408px) {
  .wrap-product-info {
    margin: 20px;
  }
  .wrap-product-menu {
    margin-left: calc(100% - 1288px);
  }
}
@media (max-width: 1364px) {
  .wrap-product-menu {
    margin-left: 20px;
  }
  .wrap-product-images {
    width: calc(100% - 360px);
  }
  .image-wrap {
    width: calc((100% - 10px)/2);
  }
  .main-img {
    width: 100%;
    height: 100%;
    max-width: 469px;
    max-height: 469px;
  }
}
@media (max-width: 1000px) {
  .wrap-product-info {
    flex-direction: column;
  }
  .wrap-product-images {
    width: 100%;
  }
  .desktop-price {
    display: none;
  }
  .mobile-price {
    display: flex !important;
  }
  .wrap-product-menu {
    margin-left: 0px;
    width: 100%;
  }
  .buttons-wrap {
    width: 100%;
  }
  .button-group {
    width: 100%;
  }
  .size-button {
    width: calc((100% - 5px)/2);
  }
  .wrap-name-price {
    margin: 0px;
  }
  .with-sail {
    margin-top: 2px;
  }
  .image-wrap {
    min-width: calc((100vw - 50px)/2);
    min-height: calc((100vw - 50px)/2);
  }
}
@media (max-width: 600px) {
  .mobile-photos {
    display: block;
  }
  .wrap-product-images {
    display: none;
  }
  .user-buttons {
    height: 48px !important;
  }
}
</style>
