<template>
  <v-list dense aria-orientation="column" class="list-controls">
    <v-btn
      block
      depressed
      class="nav-button mark-button back-button first-button"
      @click="$emit('back')"
      >
      <v-icon left dark >mdi-chevron-left</v-icon>
      <v-spacer></v-spacer>
      Андерграунд
      <v-spacer class="spacer-right"></v-spacer>
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'all', type:'all', brand:'assc', gender:'all', isNew:'all', isOnSale:'all'}}"
      >Anti Social Social Club
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'all', type:'all', brand:'sputnik', gender:'all', isNew:'all', isOnSale:'all'}}"
      >СПУТНИК1985
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'all', type:'all', brand:'batnorton', gender:'all', isNew:'all', isOnSale:'all'}}"
      >Bat Norton
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'all', type:'all', brand:'unost', gender:'all', isNew:'all', isOnSale:'all'}}"
      >ЮНОСТЬ
    </v-btn>
  </v-list>
</template>

<script>
export default {
  name: 'UndergroundBrands'
}
</script>

<style lang="scss" scoped>
@import "@/styles/MobileMenu.scss"

</style>
