<template>
  <div class="wrap-results">
    <div class="wrap-header-position">
        <div class="header-position">
          <header class="wall-header">
            <h1 class="header-prods">{{title()}}</h1>
            <div class="wrap-sort">
              <!-- @click="positionSelect($event)" -->
              <v-select
                id="sort"
                :items="sortType"
                v-model="sortValue"
                @change="changedSortType"
                label="Сортировать по"
                color="black"
                outlined
                dense
                flat
                :menu-props="{'nudge-top': -40, 'allow-overflow': true }"
                class="for-sort-select desktop-sort desktop-select"
              >
              </v-select>
            </div>
            <v-btn
              @click="clicked"
              color="black"
              outlined
              depressed
              class="config-button"
            >
              <v-icon dark>mdi-cog-transfer-outline</v-icon>
            </v-btn>
          </header>
        </div>
        <div class="nav-menu"  :class="{'hide-nav-menu': !pressed}">
          <div class="wrap-selects">
            <v-select
              :items="categories"
              v-model="categoriesModel"
              :disabled="paramsSelects.category !== 'all'"
              label="Категория"
              color="black"
              outlined
              dense
              multiple
              class="menu-select desktop-select"
              :menu-props="{'nudge-top': -40, 'allow-overflow': true}"
              @change="changeProducts"
            >
              <template v-slot:selection="{ item, index }">
                  <span v-if="index === 0">{{ item }}</span>
                <span
                  v-if="index === 1"
                >...</span>
              </template>
            </v-select>
            <v-select
              :items="types"
              v-model="typesModel"
              :disabled="paramsSelects.type !== 'all'"
              label="Тип"
              color="black"
              outlined
              dense
              multiple
              :menu-props="{'nudge-top': -40, 'allow-overflow': true}"
              class="menu-select desktop-select"
              @change="changeProducts"
            >
              <template v-slot:selection="{ item, index }">
                  <span v-if="index === 0">{{ item }}</span>
                <span
                  v-if="index === 1"
                >...</span>
              </template>
            </v-select>
            <v-select
              :items="brands"
              v-model="brandsModel"
              :disabled="paramsSelects.brand !== 'all'"
              label="Бренд"
              color="black"
              outlined
              dense
              multiple
              :menu-props="{'nudge-top': -40, 'allow-overflow': true}"
              class="menu-select desktop-select"
              @change="changeProducts"
            >
              <template v-slot:selection="{ item, index }">
                  <span v-if="index === 0">{{ item }}</span>
                <span
                  v-if="index === 1"
                >...</span>
              </template>
            </v-select>
            <v-btn
              outlined
              :disabled="paramsSelects.isNew !== 'all'"
              height="40px"
              width="145px"
              :class="{'btn-active' : newsBool, 'btn-disabled' : !newsBool}"
              @change="changeProducts"
              @click="newsClick"
            >
              Новинки
            </v-btn>
          </div>
          <div class="wrap-selects">
            <v-select
              :items="genders"
              v-model="gendersModel"
              :disabled="paramsSelects.gender !== 'all'"
              label="Пол"
              color="black"
              outlined
              multiple
              dense
              :menu-props="{'nudge-top': -40, 'allow-overflow': true}"
              @change="changeProducts"
              class="menu-select desktop-select"
            >
              <template v-slot:selection="{ item, index }">
                  <span v-if="index === 0">{{ item }}</span>
                <span
                  v-if="index === 1"
                >...</span>
              </template>
            </v-select>
            <v-select
              :items="sizesShoes"
              v-model="sizesShoesModel"
              :disabled="!(paramsSelects.category === 'shoes' || paramsSelects.category === 'all' || paramsSelects.category === 'newModelShoes')"
              label="Размер обуви"
              color="black"
              outlined
              dense
              multiple
              :menu-props="{'nudge-top': -40, 'allow-overflow': true}"
              class="menu-select desktop-select"
              @change="changeProducts"
            >
              <template v-slot:selection="{ item, index }">
                  <span v-if="index === 0">{{ item }}</span>
                <span
                  v-if="index > 0 && index < 3"
                >,{{ item }}</span>
                <span v-if="index === 3">...</span>
              </template>
            </v-select>
            <v-select
              :items="sizesClothes"
              v-model="sizesClothesModel"
              :disabled="!(paramsSelects.category === 'clothes' || paramsSelects.category === 'all' || paramsSelects.category === 'newModelClothes')"
              label="Размер одежды"
              color="black"
              outlined
              dense
              multiple
              :menu-props="{'nudge-top': -40, 'allow-overflow': true}"
              class="menu-select desktop-select"
              @change="changeProducts"
            >
              <template v-slot:selection="{ item, index }">
                  <span v-if="index < 3">{{ item }},</span>
                <span
                  v-if="index === 3"
                >...</span>
              </template>
            </v-select>
            <v-btn
              outlined
              :disabled="paramsSelects.isOnSale !== 'all'"
              height="40px"
              width="145px"
              :class="{ 'btn-active' : saleBool, 'btn-disabled' : !saleBool }"
              @click="saleClick"
            >
              Распродажа
            </v-btn>
          </div>
        </div>
    </div>
    <v-navigation-drawer
      v-if="screenWidth < 1144"
      temporary
      fixed
      v-model="pressed"
      class="left-menu"
      width="220"
    >
      <v-list class="mobile-list" dense aria-orientation="column">
        <div class="wrap-list-element">
          <v-select
            id="sortMobile"
            :items="sortType"
            v-model="sortValue"
            @change="changedSortType"
            label="Сортировать по"
            color="black"
            outlined
            flat
            hide-details
            dense
            :menu-props="{'nudge-top': -40, 'allow-overflow': true}"
            class="list-element"
          >
          </v-select>
        </div>
        <div class="wrap-list-element">
          <v-select
            :items="categories"
            v-model="categoriesModel"
            :disabled="paramsSelects.category !== 'all'"
            label="Категория"
            color="black"
            outlined
            dense
            hide-details
            multiple
            :menu-props="{'nudge-top': -40, 'allow-overflow': true}"
            class="list-element"
            @change="changeProducts"
          >
            <template v-slot:selection="{ item, index }">
                <span v-if="index === 0">{{ item }}</span>
              <span
                v-if="index === 1"
              >...</span>
            </template>
          </v-select>
        </div>
        <div class="wrap-list-element">
          <v-select
            :items="types"
            v-model="typesModel"
            :disabled="paramsSelects.type !== 'all'"
            label="Тип"
            color="black"
            outlined
            hide-details
            dense
            multiple
            :menu-props="{'nudge-top': -40, 'allow-overflow': true}"
            class="list-element"
            @change="changeProducts"
          >
            <template v-slot:selection="{ item, index }">
                <span v-if="index === 0">{{ item }}</span>
              <span
                v-if="index === 1"
              >...</span>
            </template>
          </v-select>
        </div>
        <div class="wrap-list-element">
          <v-select
            :items="brands"
            v-model="brandsModel"
            :disabled="paramsSelects.brand !== 'all'"
            label="Бренд"
            color="black"
            outlined
            hide-details
            dense
            multiple
            :menu-props="{'nudge-top': -40, 'allow-overflow': true}"
            class="list-element"
            @change="changeProducts"
          >
            <template v-slot:selection="{ item, index }">
                <span v-if="index === 0">{{ item }}</span>
              <span
                v-if="index === 1"
              >...</span>
            </template>
          </v-select>
        </div>
        <div class="wrap-list-element">
          <v-select
            :items="genders"
            v-model="gendersModel"
            :disabled="paramsSelects.gender !== 'all'"
            label="Пол"
            color="black"
            outlined
            hide-details
            multiple
            dense
            :menu-props="{'nudge-top': -40, 'allow-overflow': true}"
            @change="changeProducts"
            class="list-element"
          >
            <template v-slot:selection="{ item, index }">
                <span v-if="index === 0">{{ item }}</span>
              <span
                v-if="index === 1"
              >...</span>
            </template>
          </v-select>
        </div>
        <div class="wrap-list-element">
          <v-select
            :items="sizesShoes"
            v-model="sizesShoesModel"
            :disabled="!(paramsSelects.category === 'shoes' || paramsSelects.category === 'all' || paramsSelects.category === 'newModelShoes')"
            label="Размер обуви"
            color="black"
            outlined
            dense
            hide-details
            multiple
            :menu-props="{'nudge-top': -40, 'allow-overflow': true}"
            class="list-element"
            @change="changeProducts"
          >
            <template v-slot:selection="{ item, index }">
                <span v-if="index === 0">{{ item }}</span>
              <span
                v-if="index > 0 && index < 3"
              >,{{ item }}</span>
              <span v-if="index === 3">...</span>
            </template>
          </v-select>
        </div>
        <div class="wrap-list-element">
          <v-select
            :items="sizesClothes"
            v-model="sizesClothesModel"
            :disabled="!(paramsSelects.category === 'clothes' || paramsSelects.category === 'all' || paramsSelects.category === 'newModelClothes')"
            label="Размер одежды"
            color="black"
            outlined
            dense
            hide-details
            multiple
            :menu-props="{'nudge-top': -40, 'allow-overflow': true}"
            class="list-element"
            @change="changeProducts"
          >
            <template v-slot:selection="{ item, index }">
                <span v-if="index < 3">{{ item }},</span>
              <span
                v-if="index === 3"
              >...</span>
            </template>
          </v-select>
        </div>
        <div class="wrap-list-element">
          <v-btn
            outlined
            :disabled="paramsSelects.isOnSale !== 'all'"
            class="list-element"
            :class="{ 'btn-active' : saleBool, 'btn-disabled' : !saleBool }"
            @click="saleClick"
          >
            Распродажа
          </v-btn>
        </div>
        <div class="wrap-list-element" style="margin-top: 7px;">
          <v-btn
            outlined
            :disabled="paramsSelects.isNew !== 'all'"
            class="list-element"
            :class="{'btn-active' : newsBool, 'btn-disabled' : !newsBool}"
            @change="changeProducts"
            @click="newsClick"
          >
            Новинки
          </v-btn>
        </div>
      </v-list>
    </v-navigation-drawer>
    <div class="wall-header-offset"></div>
    <div class="wrap-product-container">
      <div v-if="!datak.length" class="empty-results">По вашему запросу ничего не найдено.</div>
      <div v-else class="wrap-products">
        <div v-if="screenWidth > 1000" v-infinite-scroll="loadMore" class="wrap-three-prod" infinite-scroll-disabled="busy" infinite-scroll-distance="8">
          <div class="three-prod" v-for="(item, index) in this.$treepleArr(datak, 3)" :key="index">
            <Product v-for="(it, index) in item" :key="it.id + index" :product="{...it, right: index === 2 ? true : false}" />
          </div>
        </div>
        <div v-else v-infinite-scroll="loadMore" class="wrap-three-prod" infinite-scroll-disabled="busy" infinite-scroll-distance="8">
          <div class="three-prod" v-for="(item, index) in this.$treepleArr(datak, 2)" :key="index">
            <Product v-for="(it, index) in item" :key="it.id + index" :product="{...it, right: index === 1 ? true : false}" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable dot-notation */
import arrSelects from '@/utils/arraysForSelects.js'
import ruEn from '@/utils/ruToEn.js'
import enRu from '@/utils/enToRu.js'
import Product from '@/components/app/product-container/Product'
export default {
  name: 'ProductContainer',
  metainfo: {
    title: 'Товары'
  },
  data: () => ({
    pressed: false,
    arr: [],
    products: [],
    conditions: {},
    paramsSelects: {},
    datak: [],
    busy: false,
    count: 0,
    sortType: ['цене вверх', 'цене вниз', 'имени'],
    newsBool: false,
    newsValue: 'all',
    saleBool: false,
    saleValue: 'all',
    sortValue: '',
    genders: [],
    categories: [],
    sizesClothes: [],
    sizesShoes: [],
    types: [],
    brands: [],
    gendersModel: null,
    categoriesModel: null,
    sizesClothesModel: null,
    sizesShoesModel: null,
    typesModel: null,
    brandsModel: null,
    interval: null,
    screenWidth: window.outerWidth
  }),
  methods: {
    clicked () {
      this.pressed = !this.pressed
    },
    loadMore: function () {
      if (this.arr.length > 0) {
        this.busy = true
        setTimeout(() => {
          for (var i = 0, j = 8; i < j && this.arr.length > 0; i++) {
            this.datak.push(this.arr[0])
            this.arr.splice(0, 1)
          }
          this.busy = false
        }, 10)
      }
    },
    changedSortType () {
      if (this.sortValue === 'цене вверх') {
        var i = null
        var newDatak = null
        var len = this.datak.length
        if (this.datak.length === this.products.length) {
          this.datak.sort((a, b) => a.priceWithSale - b.priceWithSale)
          this.products.sort((a, b) => a.priceWithSale - b.priceWithSale)
        } else {
          len = this.datak.length
          newDatak = []
          this.products.sort((a, b) => a.priceWithSale - b.priceWithSale)
          for (i = 0; i < len; i++) {
            newDatak.push(this.products[i])
          }
          this.arr = this.products.slice()
          this.arr.splice(0, len)
        }
      } else if (this.sortValue === 'цене вниз') {
        if (this.datak.length === this.products.length) {
          this.datak.sort((a, b) => a.priceWithSale - b.priceWithSale).reverse()
          this.products.sort((a, b) => a.priceWithSale - b.priceWithSale).reverse()
        } else {
          len = this.datak.length
          newDatak = []
          this.products.sort((a, b) => a.priceWithSale - b.priceWithSale).reverse()
          for (i = 0; i < len; i++) {
            newDatak.push(this.products[i])
          }
          this.arr = this.products.slice()
          this.arr.splice(0, len)
        }
      } else if (this.sortValue === 'имени') {
        var sortStr = function (a, b) {
          if (a > b) {
            return 1
          } else if (a < b) {
            return -1
          } else {
            return 0
          }
        }
        if (this.datak.length === this.products.length) {
          this.datak.sort((a, b) => sortStr(a.name, b.name))
          this.products.sort((a, b) => sortStr(a.name, b.name))
        } else {
          len = this.datak.length
          newDatak = []
          this.products.sort((a, b) => sortStr(a.name, b.name))
          for (i = 0; i < len; i++) {
            newDatak.push(this.products[i])
          }
          this.arr = this.products.slice()
          this.arr.splice(0, len)
        }
      }
    },
    saleClick () {
      this.saleBool = !this.saleBool
      this.saleValue = this.saleBool ? true : 'all'
      this.changeProducts()
    },
    newsClick () {
      this.newsBool = !this.newsBool
      this.newsValue = this.newsBool ? true : 'all'
      this.changeProducts()
    },
    changeProducts () {
      var newProds = this.products.slice()
      var res = []
      if (this.categoriesModel && this.categoriesModel.length > 0 && this.categoriesModel.length < this.categories.length) {
        newProds.forEach((value, index) => {
          if (this.categoriesModel.includes(enRu[value.category])) {
            res.push(newProds[index])
          }
        })
        newProds = res.slice()
        res = []
      }
      if (this.typesModel && this.typesModel.length > 0 && this.typesModel.length < this.types.length) {
        newProds.forEach((value, index) => {
          if (this.typesModel.includes(enRu[value.type])) {
            res.push(newProds[index])
          }
        })
        newProds = res.slice()
        res = []
      }
      if (this.brandsModel && this.brandsModel.length > 0 && this.brandsModel.length < this.brands.length) {
        newProds.forEach((value, index) => {
          if (this.brandsModel.includes(enRu[value.brand])) {
            res.push(newProds[index])
          }
        })
        newProds = res.slice()
        res = []
      }
      if (this.gendersModel && this.gendersModel.length > 0 && this.gendersModel.length < this.genders.length) {
        newProds.forEach((value, index) => {
          if (this.gendersModel.includes(enRu[value.gender])) {
            res.push(newProds[index])
          }
        })
        newProds = res.slice()
        res = []
      }
      if (this.sizesShoesModel && this.sizesShoesModel.length > 0 && this.sizesShoesModel.length < this.sizesShoes.length) {
        newProds.forEach((value, index) => {
          if (value.category === 'shoes') {
            var sizes = value.sizes
            /* var have = false */
            for (var size of sizes) {
              if (this.sizesShoesModel.includes(size.size) && size.count > 0) {
                res.push(newProds[index])
                break
              }
            }
          }
        })
        for (var prod of newProds) {
          if (prod.category === 'clothes') {
            res.push(prod)
          }
        }
        newProds = res.slice()
        res = []
      }
      if (this.sizesClothesModel && this.sizesClothesModel.length > 0 && this.sizesClothesModel.length < this.sizesClothes.length) {
        newProds.forEach((value, index) => {
          if (value.category === 'clothes') {
            var sizes = value.sizes
            /* var have = false */
            for (var size of sizes) {
              if (this.sizesClothesModel.includes(size.size) && size.count > 0) {
                res.push(newProds[index])
                break
              }
            }
          }
        })
        for (prod of newProds) {
          if (prod.category === 'shoes') {
            res.push(prod)
          }
        }
        newProds = res.slice()
        res = []
      }
      if (this.saleValue === true) {
        newProds.forEach((value, index) => {
          if (value.isOnSale) {
            res.push(newProds[index])
          }
        })
        newProds = res.slice()
        res = []
      }
      if (this.newsValue === true) {
        newProds.forEach((value, index) => {
          if (value.isNew) {
            res.push(newProds[index])
          }
        })
        newProds = res.slice()
        res = []
      }
      this.datak = []
      for (var i = 0; i < 24 && i < newProds.length; i++) {
        this.datak.push(newProds[i])
      }
      this.arr = newProds.slice()
      this.arr.splice(0, this.datak.length)
    },
    title () {
      var res = ''
      if (this.paramsSelects.type !== 'all') {
        res += ' ' + enRu[this.paramsSelects.type]
      } else if (this.paramsSelects.category !== 'all') {
        res += enRu[this.paramsSelects.category]
      }
      if (this.paramsSelects.brand !== 'all') {
        res += ' ' + enRu[this.paramsSelects.brand]
      }
      if (this.paramsSelects.gender !== 'all') {
        res += ' ' + enRu[this.paramsSelects.gender]
      }
      if (this.paramsSelects.isOnSale === true) {
        res += ' Распродажа'
      } else if (this.paramsSelects.isNew === true) {
        res += ' Новинки'
      }
      if (res === '') {
        res = 'Все товары'
      }
      if (res.includes('undefined')) {
        res = 'Ничего не найдено'
      }
      return res
    },
    positionSelect (event) {
      /* console.log(event.target)
      const select = event.target.closest('.desktop-select')
      const rect = select.getBoundingClientRect()
      const bottom = rect.bottom
      console.log(select)
      console.log(rect) */
      /* if (this.screenWidth > 1128) { getBoundingClientRect
        console.log(event.target.closest('.desktop-sort'))
      } else {
        console.log(event.target.closest('.list-element'))
      } */
    }
  },
  components: {
    Product
  },
  computed: {
    Pressed: () => this.pressed,
    btnText () {
      if (this.pressed) {
        return 'Показать фильтры'
      } else {
        return 'Скрыть фильтры'
      }
    },
    wWidth () {
      return this.screenWidth
    }
  },
  async mounted () {
    var params = this.$route.params
    this.paramsSelects = this.$route.params
    Object.keys(params).forEach(value => {
      if (params[value] !== 'all') {
        if (params[value] === 'true' || params[value] === 'false') {
          params[value] = !!params[value]
        }
        this.conditions[value] = params[value]
      }
    })
    if (this.conditions.category === 'newModelShoes' || this.conditions.category === 'newModelClothes') {
      var newModelConditions = {
        id: this.conditions.isOnSale
      }
      if (this.conditions.gender === 'adults') {
        this.products.push(...(await this.$store.dispatch('fetchForMenu', {
          ...newModelConditions,
          gender: 'male'
        })))
        this.products.push(...(await this.$store.dispatch('fetchForMenu', {
          ...newModelConditions,
          gender: 'female'
        })))
      } else if (this.conditions.gender === 'kidsAll') {
        this.products.push(...(await this.$store.dispatch('fetchForMenu', {
          ...newModelConditions,
          gender: 'boys'
        })))
        this.products.push(...(await this.$store.dispatch('fetchForMenu', {
          ...newModelConditions,
          gender: 'girls'
        })))
      } else {
        this.products.push(...(await this.$store.dispatch('fetchForMenu', newModelConditions)))
      }
      if (this.paramsSelects.category === 'all') {
        this.categories = ['Обувь', 'Одежда', 'Аксессуары']
        this.categoriesModel = []
      }
      if (this.paramsSelects.type === 'all') {
        this.types = arrSelects[`${this.paramsSelects.category}-${this.paramsSelects.gender}`]
        this.typesModel = []
      }
      if (this.paramsSelects.brand === 'all') {
        this.brands = arrSelects['brands-all']
        this.brandsModel = []
      }
      if (this.paramsSelects.gender === 'all') {
        this.genders = ['Мужчины', 'Женщины', 'Мальчики', 'Девочки']
        this.gendersModel = []
      } else if (this.paramsSelects.gender === 'kidsAll') {
        this.genders = ['Мальчики', 'Девочки']
        this.gendersModel = []
      } else if (this.paramsSelects.gender === 'adults') {
        this.genders = ['Мужчины', 'Женщины']
        this.gendersModel = []
      }
      if (this.paramsSelects.category === 'shoes' || this.paramsSelects.category === 'all' || this.paramsSelects.category === 'newModelShoes') {
        this.sizesShoes = arrSelects[`${this.paramsSelects.gender}-shoes`]
        this.sizesShoesModel = []
      }
      if (this.paramsSelects.category === 'clothes' || this.paramsSelects.category === 'all') {
        this.sizesClothes = arrSelects[`${this.paramsSelects.gender}-clothes`]
        this.sizesClothesModel = []
      }
    } else {
      this.products = await this.$store.dispatch('fetchForMenu', this.conditions)
      if (this.paramsSelects.category === 'all') {
        this.categories = ['Обувь', 'Одежда', 'Аксессуары']
        this.categoriesModel = []
      }
      if (this.paramsSelects.type === 'all') {
        this.types = arrSelects[`${this.paramsSelects.category}-${this.paramsSelects.gender}`]
        this.typesModel = []
      }
      if (this.paramsSelects.brand === 'all') {
        this.brands = arrSelects['brands-all']
        this.brandsModel = []
      }
      if (this.paramsSelects.gender === 'all') {
        this.genders = ['Мужчины', 'Женщины', 'Мальчики', 'Девочки']
        this.gendersModel = []
      } else if (this.paramsSelects.gender === 'kidsAll') {
        this.genders = ['Мальчики', 'Девочки']
        this.gendersModel = []
      } else if (this.paramsSelects.gender === 'adults') {
        this.genders = ['Мужчины', 'Женщины']
        this.gendersModel = []
      }
      if (this.paramsSelects.category === 'shoes' || this.paramsSelects.category === 'all') {
        this.sizesShoes = arrSelects[`${this.paramsSelects.gender}-shoes`]
        this.sizesShoesModel = []
      }
      if (this.paramsSelects.category === 'clothes' || this.paramsSelects.category === 'all') {
        this.sizesClothes = arrSelects[`${this.paramsSelects.gender}-clothes`]
        this.sizesClothesModel = []
      }
    }
    this.arr = this.products.slice()
    for (var j = 0; j < this.products.length && j < 24; j++) {
      this.datak.push(this.products[j])
    }
    this.arr.splice(0, this.datak.length)
    this.interval = setInterval(() => {
      this.screenWidth = window.outerWidth
    }, 100)
  },
  beforeDestroy () {
    clearInterval(this.interval)
  }
}
</script>
<style lang="scss" scoped>
.wrap-results {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
}
.wrap-header-position {
  z-index: 5;
  position:sticky;
  top:107px;
  height:69.2px;
  background-color: white;
}
.header-position {
  top:107px;
  position: sticky;
  z-index: 5;
  width: 100%;
  background-color: white;
}
.menu-select {
  max-height:36px;
  max-width:200px;
  margin-right:5px;
}
.empty-results {
  text-align: center;
  width:100%;
  font-size:30px;
  font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;
}
.wall-header-offset {
  display: block;
  height: 18px;
}
.wall-header {
  margin: 0 48px;
  background: rgb(255, 255, 255);
  display: flex;
  flex-wrap: wrap;
  -webkit-box-align: center;
  align-items: center;
  max-width: 1432.2px;
  /* width: 100%; */
}
.wrap-three-prod {
  min-width: 100%;
}
.nav-menu {
  position: sticky;
  /* top:176.28px; */
  top: 169.6px;
  z-index: 4;
  transition: all 300ms ease 0s;
  margin-top: -1.5px;
  padding: 5px 48px 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.hide-nav-menu {
  transform: translateY(-115px);
}
.wrap-sort {
  margin-bottom:5px;
  margin-right:5px;
}
.wrap-product-container {
  display: flex;
  height: 100%;
  margin-top: 10px;
  min-width: 100%;
}
.config-button {
  height: 40px !important;
  float: right;
}
.wrap-products {
  flex: 1;
  margin: 0px 48px;
  display: flex;
  flex-direction: column;
  max-width: 1432.2px;
  width: 100%;
}
.three-prod {
  display: flex;
  width: 100%;
  margin-bottom: 25px;
}
ul {
  list-style: none;
  margin: 0;
}
li {
  padding-left: 10px;
}
.btn-active {
  color:white;
  background-color: black;
}
.btn-disabled {
  color:black;
}
.wrap-selects {
  display: flex;
  margin-bottom: 5px;
}
.header-prods {
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 24px;
  font-weight: 500;
  margin: 18px 0 18px;
  flex:1;
  /* width: 100%; */
}
.margin-menu-select {
  margin-top:40px !important;
}
.for-select {
  max-height:36px;
  max-width:200px;
  margin-right:5px;
}
.for-sort-select {
  max-height:36px;
  max-width:200px;
}
.desktop-sort {
  display: block;
}
.left-menu {
  display: none;
  height: 100%;
  top: 48px !important;
  -webkit-box-shadow: 0 !important;
  box-shadow: none !important;
}
.mobile-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 10px 0px 10px;
}
.wrap-list-element {
  margin-top: 10px;
}
.list-element {
  width: 100%;
  max-height: 36px;
  max-width: 200px;
}
@media (min-width: 1519.3px) {
  .wall-header {
    margin: 0 calc((100% - 1432.2px)/2);
  }
  .wrap-products {
    margin: 0 calc((100% - 1432.2px)/2);
  }
  .nav-menu {
    padding: 5px calc((100% - 1432.2px)/2) 20px;
  }
}
@media (max-width: 1262.73px) {
  .wrap-header-position, .header-position {
    top: 48px;
  }
}
@media (max-width: 1128px) {
  .nav-menu {
    display: none;
  }
  .desktop-sort {
    display: none;
  }
  .left-menu {
    display: block;
  }
}
@media (max-width: 1000px) {
  .wall-header {
    margin: 0 20px;
  }
  .wrap-products {
    margin: 0px;
  }
}
</style>
