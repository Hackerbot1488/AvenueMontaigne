<template>
  <div class="wrap-bag">
    <div class="wrap-wrap-products">
      <div class="wrap-products">
        <h4 style="padding-left:8px;">Избранное</h4>
        <p v-if="!favorite.length" style="padding-left:8px;padding-top:20px;">В избранном пока нет товаров.</p>
        <div class="product" v-for="item in favorite" :key="item.fId">
          <div class="wrap-product">
            <div class="wrap-image">
              <router-link :to="{name: 'ProductInfo', params:{id:item.id, gender:item.gender}}" class="content-link">
                <img :src="item.images[0]" />
              </router-link>
            </div>
            <div class="wrap-options">
              <div class="wrap-buttons-names">
                <div class="wrap-product-info">
                  <div class="product-info">
                    <router-link :to="{name: 'ProductInfo', params:{id: item.id, gender: item.gender}}" class="content-link">
                      <p class="product-name">{{item.name}}</p>
                    </router-link>
                    <p class="product-type">{{$defenition(item.gender, item.type)}}</p>
                    <p class="product-type">Размер: {{item.size}}</p>
                  </div>
                  <div class="mobile-price">
                    <div>
                      <p>{{item.priceWithSale | Currency}}</p>
                    </div>
                    <div v-if="item.isOnSale">
                      <p class="without-sale">{{item.price | Currency}}</p>
                    </div>
                  </div>
                </div>
                <div class="list-buttons desktop-buttons">
                  <v-btn
                    @click="deleteProduct(item)"
                    rounded
                    outlined
                    style="color:red;"
                    depressed
                    :loading="item.loadingDelete"
                    width="120px"
                  >Удалить
                  </v-btn>
                  <v-btn
                    rounded
                    outlined
                    style="color:black;margin-left:20px;"
                    depressed
                    :loading="item.loadingCart"
                    @click="addToCart(item)"
                    width="148px"
                  >В корзину
                  </v-btn>
                </div>
              </div>
              <div class="wrap-price">
                <div>
                  <p>{{item.priceWithSale | Currency}}</p>
                </div>
                <div v-if="item.isOnSale">
                  <p class="without-sale">{{item.price | Currency}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="list-buttons mobile-buttons">
            <v-btn
              @click="deleteProduct(item)"
              rounded
              outlined
              style="color:red;"
              class="mobile-button"
              depressed
              :loading="item.loadingDelete"
            >Удалить
            </v-btn>
            <v-btn
              rounded
              outlined
              class="mobile-button"
              style="color:black;margin-left:20px;"
              @click="addToCart(item)"
              depressed
              :loading="item.loadingCart"
            >В корзину
            </v-btn>
                </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Favorite',
  metaInfo: {
    title: 'Избранное'
  },
  data () {
    return {
      favorite: [],
      prods: []
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    this.favorite = this.$store.getters.favorite
    this.prods = this.$store.getters.editProducts
    this.favorite.forEach(product => {
      product.loadingDelete = false
      product.loadingCart = false
    })
  },
  computed: {
  },
  methods: {
    async deleteProduct (product) {
      product.loadingDelete = true
      await this.$store.dispatch('deleteFavorite', product.fId)
      product.loadingDelete = false
    },
    async addToCart (product) {
      product.loadingCart = true
      await this.$store.dispatch('add', product)
      await this.$store.dispatch('deleteFavorite', product.fId)
      product.loadingCart = false
    }
  },
  beforeDestroy () {
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss" scoped>
.wrap-bag {
  display: flex;
  margin-bottom: 100px;
  padding: 40px 0;
  height: 100%;
  width: fit-content;
  margin-left: calc((100% - 650px)/2);
  margin-right: calc((100% - 650px)/2);
}
.wrap-form {
  margin-left: 20px;
}
.wrap-wrap-products {
  h4 {
    font-size: 22px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    margin:0;
  }
  display: flex;
}
.wrap-products {
  display: flex;
  flex-direction: column;
  width: 650px;
}
.product {
  display: flex;
  padding: 24px 8px;
  border-bottom: 1px  solid #ccc;
  width: 650px;
}
.wrap-product {
  width: 650px;
  display: flex;
}
.wrap-image {
  margin-right: 30px;
}
img {
  width: 150px;
  height: 150px;
}
.wrap-options {
  display: flex;
  flex: 1;
}
.wrap-buttons-names {
  display: flex;
  flex-direction: column;
  width: fit-content;
  p {
    margin-top: 0;
    padding-top: 0;
    color: #8d8d8d;
    font-size: 14px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  }
}
.submit-button {
  margin: 10px 0px;
  color: white;
}
.two-divs {
  display: flex;
  padding: 0 12px 8px;
  span {
    padding: 0 8px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    color: #111111;
    font-weight: 500;
  }
}
.product-type {
  font-size: 14px;
  width: fit-content;
}
.header-form {
  padding: 0 20px;
}
.span-price {
  flex:1;
}
.wrap-price {
  flex: 1;
  display: flex;
  flex-direction: column;
  div {
    flex: 1;
    max-height: 28px;
    p {
      /* margin-top: 3px; */
      margin-top: 0px;
      margin-bottom: 5px;
      float: right;
    }
  }
}
.mobile-price {
  display: none;
  flex-direction: column;
  p {
    color: #111111;
    /* margin-top: 3px; */
    margin-top: 0px;
    margin-bottom: 5px;
    float: right;
  }
}
.without-sale {
  text-decoration: line-through;
}
.content-link {
  cursor: pointer;
  text-decoration: none;
  width: fit-content;
  p {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    color: #111111;
  }
}
.list-buttons {
  font-size: 14px;
  margin-top:10px;
}
.desktop-buttons {
  display: flex;
}
.mobile-buttons {
  display: none;
}
.product-name {
  font-size:16px;
  color:#111111;
  margin-bottom: 8px;
}
.product-info {
  display: flex;
  flex-direction: column;
  width: fit-content;
}
.wrap-product-info {
  display: flex;
}
.mobile-button {
  width: calc((100% - 20px)/2);
}
@media (max-width: 651px) {
  .wrap-wrap-products {
    flex-direction: column-reverse;
  }
  .wrap-form {
    margin-left: 0px;
    // padding: 0 160px;
  }
  .wrap-products {
    padding: 0px 15px;
  }
  .wrap-bag {
    width: 100%;
    margin-left: 0px;
  }
  .wrap-form {
    width: 100%;
  }
  .wrap-products {
    width: 100%;
  }
  .wrap-wrap-products {
    width: 100%;
    padding: 0px 10px;
  }
  .product {
    width: 100%;
  }
  .wrap-product {
    width: 100%;
  }
}
@media (max-width: 650px) {
  .wrap-price {
    display: none;
  }
  .mobile-price {
    display: flex;
  }
  .wrap-bag {
    margin: 0px;
    width: 100%;
  }
  .wrap-products {
    width: 100%;
    padding: 0 15px;
  }
  .wrap-wrap-products {
    width: 100%;
  }
  .wrap-image {
    margin-right: 15px;
  }
  .wrap-form {
    padding: 0px 10px;
  }
  .product {
    width: 100%;
  }
  .two-divs {
    padding-left: 0px;
    padding-right: 0px;
  }
  .header-form {
    padding: 0px 8px;
  }
  .product {
    flex-direction: column;
  }
  .product-name {
    font-size: 12px;
    margin-bottom: 4px;
  }
  .product-type {
    font-size: 12px !important;
    margin-bottom: 8px;
  }
  .wrap-buttons-names {
    width: 100%; // tot
  }
  .product-info {
    width: 100%;
  }
}
@media (max-width: 520px) {
  .desktop-buttons {
    display: none;
  }
  .mobile-buttons {
    display: flex;
  }
}
@media (max-width: 400px) {
  img {
    width: 100px;
    height: 100px;
  }
}
@media (max-width: 370px) {
  .wrap-product-info {
    flex-direction: column;
    .mobile-price {
      p {
        float: left;
      }
    }
  }
  .product-name {
    margin-top: -4px !important;
  }
}
</style>
