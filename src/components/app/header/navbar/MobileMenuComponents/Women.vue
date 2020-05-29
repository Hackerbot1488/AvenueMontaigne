<template>
  <v-window v-model="step">
    <v-window-item :value="'main'">
      <v-list dense aria-orientation="column" class="list-controls">
        <v-btn
          block
          depressed
          class="nav-button mark-button back-button first-button"
          @click="$emit('back')"
          >
          <v-icon left dark >mdi-chevron-left</v-icon>
          <v-spacer></v-spacer>
          Женщины
          <v-spacer class="spacer-right"></v-spacer>
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="$emit('pushed')"
          :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}"
          >Все модели
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="$emit('pushed')"
          :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'female', isNew:'all', isOnSale:'true'}}"
          >Распродажа
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="$emit('pushed')"
          :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'female', isNew:'true', isOnSale:'all'}}"
          >Новинки
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="$emit('pushed')"
          to="/develop"
          >Образы
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="step = 'womenClothes'"
          >Одежда
          <v-icon right dark>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="step = 'womenShoes'"
          >Обувь
          <v-icon right dark>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="step = 'womenAccessoires'"
          >Аксессуары
          <v-icon right dark>mdi-chevron-right</v-icon>
        </v-btn>
      </v-list>
    </v-window-item>
    <v-window-item :value="'womenClothes'">
      <WomenClothes @back="step = 'main'" @pushed="$emit('pushed'), step = 'main'"/>
    </v-window-item>
    <v-window-item :value="'womenShoes'">
      <WomenShoes @back="step = 'main'" @pushed="$emit('pushed'), step = 'main'"/>
    </v-window-item>
    <v-window-item :value="'womenAccessoires'">
      <WomenAccessoires @back="step = 'main'" @pushed="$emit('pushed'), step = 'main'"/>
    </v-window-item>
  </v-window>
</template>

<script>
import WomenShoes from './WomenComponents/WomenShoes'
import WomenClothes from './WomenComponents/WomenClothes'
import WomenAccessoires from './WomenComponents/WomenAccessoires'
export default {
  name: 'Women',
  data () {
    return {
      step: 'main'
    }
  },
  components: {
    WomenShoes,
    WomenClothes,
    WomenAccessoires
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/MobileMenu.scss"

</style>
