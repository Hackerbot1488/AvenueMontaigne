<template>
  <div class="wrap-bag">
    <div class="wrap-wrap-products">
      <div class="wrap-products">
        <h4 style="padding-left:8px;">Корзина</h4>
        <p v-if="!bag.length" style="padding-left:8px;padding-top:20px;">В корзине пока нет товаров.</p>
        <div class="product" v-for="item in bag" :key="item.dbId">
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
                <div class="list-selects display-selects-high">
                  <v-select
                    :items="item.sizes"
                    label="Размер"
                    v-model="item.size"
                    :value="item.size"
                    @change="changeSize(item.dbId, item.size)"
                    dense
                    :menu-props="{'nudge-top': -40, 'allow-overflow': true}"
                    outlined
                    rounded
                    hide-details
                    color="gray"
                    class="select-default"
                  ></v-select>

                  <v-select
                    :items="countSizes(item.sizesAll.find(s => s.size === item.size).count)"
                    label="Количество"
                    v-model="item.count"
                    :value="item.count"
                    @change="changeCount(item.dbId, item.count)"
                    :menu-props="{'nudge-top': -40, 'allow-overflow': true}"
                    dense
                    outlined
                    rounded
                    hide-details
                    color="black"
                    class="select-default select-right"
                  ></v-select>
                </div>
                <div class="list-buttons">
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
                    @click="addFavorite(item)"
                    rounded
                    outlined
                    style="color:black;margin-left:20px;"
                    depressed
                    :loading="item.loadingFavorite"
                    width="148px"
                  >В избранное
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
          <div class="list-selects display-selects-low">
            <v-select
              :items="item.sizes"
              label="Размер"
              v-model="item.size"
              :value="item.size"
              @change="changeSize(item.dbId, item.size)"
              dense
              :menu-props="{'nudge-top': -40, 'allow-overflow': true}"
              outlined
              rounded
              hide-details
              color="gray"
              class="select-default"
            ></v-select>

            <v-select
              :items="countSizes(item.sizesAll.find(s => s.size === item.size).count)"
              label="Количество"
              @change="changeCount(item.dbId, item.count)"
              :value="item.count"
              :v-model="item.count"
              :menu-props="{'nudge-top': -40, 'allow-overflow': true}"
              dense
              outlined
              rounded
              hide-details
              color="black"
              class="select-default select-right"
            ></v-select>
          </div>
          <v-btn
            rounded
            outlined
            depressed
            color="black"
            height="40"
            block
            @click="changeActiveProduct(item)"
            class="btn-hide-drawer"
          >Ещё</v-btn>
        </div>
      </div>
      <div class="wrap-form">
        <div class="header-form">
          <h4>Сведения</h4>
        </div>
        <div style="margin-top:24px;" class="two-divs">
          <span>Промежуточный итог</span>
          <div class="span-price">
            <span style="float:right;">{{totalPrice | Currency}}</span>
          </div>
        </div>
        <div class="two-divs">
          <span style="padding:0 8px;">Предполагаемая стоимость <br> доставки и обработки</span>
          <div class="span-price">
            <span style="float:right;">{{delivery | Currency}}</span>
          </div>
        </div>
        <div class="two-divs total-price">
          <span>Всего</span>
          <div class="span-price">
            <span style="float:right;font-weight:600;">{{totalPrice + delivery | Currency}}</span>
          </div>
        </div>
        <v-form @submit.prevent="makePurchase" class="form-display">
          <v-btn
            rounded
            block
            depressed
            type="submit"
            height="60px"
            class="submit-button"
            style="background-color:#000;"
            :disabled="!bag.length"
          >
            Оформить заказ
          </v-btn>
        </v-form>
      </div>
    </div>
    <div class="float-btn-wrap">
      <v-form @submit.prevent="makePurchase">
        <v-btn
          rounded
          block
          depressed
          class="submit-button float-btn"
          style="background-color:#000;"
          type="submit"
          :disabled="!bag.length"
        >
          Оформить заказ
        </v-btn>
      </v-form>
    </div>
    <v-navigation-drawer
      class="drawer-btns"
      v-model="drawer"
      temporary
      fixed
      bottom
      height="190"
    >
      <v-list dense aria-orientation="column">
        <v-btn
          rounded
          outlined
          style="color:red;"
          depressed
          block
          height="44"
          class="drawer-button"
          @click="deleteProduct(activeProduct)"
        >Удалить
        </v-btn>
        <v-btn
          rounded
          outlined
          style="color:black;"
          depressed
          block
          height="44"
          class="drawer-button"
          @click="addFavorite(activeProduct)"
        >В избранное
        </v-btn>
        <v-btn
          rounded
          outlined
          block
          height="44"
          @click="drawer = !drawer"
        >Отмена</v-btn>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'Bag',
  metaInfo: {
    title: 'Корзина'
  },
  data () {
    return {
      bag: [],
      count: [1, 2, 3, 4],
      sizes: ['RU48', 'RU50', 'RU40'],
      prods: [],
      changedMenu: false,
      drawer: null,
      activeProduct: null
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    this.bag = this.$store.getters.bag
    this.prods = this.$store.getters.editProducts
    this.bag.forEach(product => {
      product.loadingDelete = false
      product.loadingFavorite = false
      product.sizes = []
      var sizes = this.prods.find(p => p.id === product.id && p.gender === product.gender).sizes
      product.sizesAll = sizes
      sizes.forEach((size, index, array) => {
        if (size.count !== 0) {
          product.sizes.push(size.size)
        }
      })
    })
  },
  computed: {
    totalPrice () {
      return this.bag.reduce((sum, p) => sum + p.priceWithSale * p.count, 0)
    },
    delivery () {
      return this.totalPrice > 7499 ? 0 : this.totalPrice !== 0 ? 750 : 0
    }
  },
  methods: {
    async deleteProduct (product) {
      if (this.drawer) {
        this.drawer = !this.drawer
      }
      product.loadingDelete = true
      await this.$store.dispatch('delete', {
        dbId: product.dbId,
        count: product.count
      })
      product.loadingDelete = false
    },
    async changeSize (dbId, size) {
      await this.$store.dispatch('changeSize', {
        dbId,
        size
      })
    },
    countSizes (count) {
      var counts = []
      if (count >= 5) {
        counts = [1, 2, 3, 4, 5]
      } else {
        for (var i = 1; i <= count; i++) {
          counts.push(i)
        }
      }
      return counts
    },
    async changeCount (dbId, count) {
      await this.$store.dispatch('changeCount', {
        dbId,
        count
      })
    },
    async makePurchase () {
      await this.$store.dispatch('makePurchase')
      this.bag = []
      this.prods = []
    },
    changeActiveProduct (item) {
      this.drawer = !this.drawer
      this.activeProduct = item
    },
    async addFavorite (product) {
      await this.$store.dispatch('addFavorite', product)
      await this.deleteProduct(product)
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
  width: 100%;
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
.total-price {
  border-bottom:1px solid #ccc;
  border-top:1px solid #ccc;
  padding:12px;
  /* width:350px; */
  margin:12px 0 20px;
  span {
    font-size:16px;
  }
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
.v-select__selections {
  width: 100px;
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
.float-btn-wrap {
  display:none;
  position:fixed;
  bottom:0px;
  z-index:6;
  left:0px;
  right:0px;
  background-color:white;
  width:100%;
  padding: 15px;
  height: 74px;
  border-top: 1px solid #ccc;
}
.float-btn {
  height: 44px !important;
  margin: 0px;
}
.form-display {
  display: block;
}
.select-default {
  width:120px;
  /* height:20px; */
}
.select-right {
  width: 148px;
  margin-left:20px;
}
.list-buttons {
  display: flex;
  font-size: 14px;
  /* color: #ccc; */
  margin-top:10px;
}
.list-selects {
  display: flex;
  font-size: 14px;
  color: #ccc;
  flex-direction: row;
}
.product-name {
  font-size:16px;
  color:#111111;
  margin-bottom: 8px;
}
.display-selects-high {
  display: flex;
}
.display-selects-low {
  display: none;
}
.drawer-btns {
  display: none;
  padding: 10px 5px;
}
.btn-hide-drawer {
  display: none;
}
.drawerVisible {
  display: block;
}
.drawer-button {
  margin-bottom: 10px;
}
.product-info {
  display: flex;
  flex-direction: column;
  width: fit-content;
}
.wrap-product-info {
  display: flex;
}
@media (min-width: 1041px) {
  .wrap-bag {
    margin-left: calc((100vw - 1036.8px)/2);
    margin-right: calc((100vw - 1036.8px)/2);
  }
  .total-price {
    width: 350px;
  }
}
@media (max-width: 1040px) {
  .wrap-wrap-products {
    flex-direction: column-reverse;
  }
  .wrap-form {
    margin-left: 0px;
    // padding: 0 160px;
  }
  .wrap-bag {
    margin-left: calc((100vw - 650px)/2);
    margin-right: calc((100vw - 650px)/2);
  }
  .wrap-products {
    padding: 0px 15px;
  }
  .float-btn-wrap {
    display: block;
  }
  .form-display {
    display: none;
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
  .list-buttons {
    display: none;
  }
  .list-selects {
    flex-direction: column;
    padding: 0px;
    margin: 0px;
    height: fit-content;
  }
  .select-default {
    width: 120px;
  }
  .select-right {
    margin-left: 0px;
    margin-top: 10px;
  }
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
  .drawer-btns {
    display: block;
  }
  .btn-hide-drawer {
    display: block;
    margin-top: 10px;
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
@media (max-width: 400px) {
  img {
    width: 100px;
    height: 100px;
  }
  .display-selects-high {
    display: none;
  }
  .display-selects-low {
    margin-top: 10px;
    display: flex;
  }
  .list-selects {
    flex-direction: row;
  }
  .select-default {
    margin-right: 20px;
    width: calc((100% - 20px)/2);
  }
  .select-right {
    margin-right: 0px;
    margin-top: 0px;
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
}
@media (max-width: 323px) {
  .select-default {
    margin-right: 10px;
    width: calc((100% - 10px)/2);
  }
  .select-right {
    margin-right: 0px;
    margin-top: 0px;
  }
}
</style>
