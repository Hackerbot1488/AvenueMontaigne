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
          Распродажа
          <v-spacer class="spacer-right"></v-spacer>
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="$emit('pushed')"
          :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'all', isNew:'all', isOnSale: true}}"
          >Все модели
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="$emit('pushed')"
          to="/develop"
          >популярное
        </v-btn>
        <!-- <v-btn
          block
          depressed
          class="nav-button"
          >последний шанс
        </v-btn> -->
        <v-btn
          block
          depressed
          class="nav-button"
          @click="step = 'menSale'"
          >Распродажа для мужчин
          <v-icon right dark>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="step = 'womenSale'"
          >Распродажа для женщин
          <v-icon right dark>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="step = 'kidsSale'"
          >Распродажа для детей
          <v-icon right dark>mdi-chevron-right</v-icon>
        </v-btn>
      </v-list>
    </v-window-item>
    <v-window-item :value="'menSale'">
      <MenSale @back="step = 'main'" @pushed="$emit('pushed'), step = 'main'"/>
    </v-window-item>
    <v-window-item :value="'womenSale'">
      <WomenSale @back="step = 'main'" @pushed="$emit('pushed'), step = 'main'"/>
    </v-window-item>
    <v-window-item :value="'kidsSale'">
      <KidsSale @back="step = 'main'" @pushed="$emit('pushed'), step = 'main'"/>
    </v-window-item>
  </v-window>
</template>

<script>
import MenSale from './SaleComponents/MenSale'
import WomenSale from './SaleComponents/WomenSale'
import KidsSale from './SaleComponents/KidsSale'
export default {
  name: 'Sale',
  data () {
    return {
      step: 'main'
    }
  },
  components: {
    MenSale,
    WomenSale,
    KidsSale
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/MobileMenu.scss"
</style>
