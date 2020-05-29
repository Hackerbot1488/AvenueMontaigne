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
          Бренды
          <v-spacer class="spacer-right"></v-spacer>
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="$emit('pushed')"
          :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'all', isNew:'all', isOnSale:'all'}}"
          >Все бренды
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="step = 'sportBrands'"
          >Спорт
          <v-icon right dark>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="step = 'streetBrands'"
          >Уличные
          <v-icon right dark>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="step = 'classicBrands'"
          >Классика
          <v-icon right dark>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="step = 'undergroundBrands'"
          >Андерграунд
          <v-icon right dark>mdi-chevron-right</v-icon>
        </v-btn>
      </v-list>
    </v-window-item>
    <v-window-item :value="'sportBrands'">
      <SportBrands @back="step = 'main'" @pushed="$emit('pushed'), step = 'main'" />
    </v-window-item>
    <v-window-item :value="'streetBrands'">
      <StreetBrands @back="step = 'main'" @pushed="$emit('pushed'), step = 'main'"/>
    </v-window-item>
    <v-window-item :value="'classicBrands'">
      <ClassicBrands @back="step = 'main'" @pushed="$emit('pushed'), step = 'main'"/>
    </v-window-item>
    <v-window-item :value="'undergroundBrands'">
      <UndergroundBrands @back="step = 'main'" @pushed="$emit('pushed'), step = 'main'"/>
    </v-window-item>
  </v-window>
</template>

<script>
import SportBrands from './BrandsComponents/SportBrands'
import StreetBrands from './BrandsComponents/StreetBrands'
import ClassicBrands from './BrandsComponents/ClassicBrands'
import UndergroundBrands from './BrandsComponents/UndergroundBrands'
export default {
  name: 'Brands',
  data () {
    return {
      step: 'main'
    }
  },
  components: {
    SportBrands,
    StreetBrands,
    ClassicBrands,
    UndergroundBrands
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/MobileMenu.scss"

</style>
