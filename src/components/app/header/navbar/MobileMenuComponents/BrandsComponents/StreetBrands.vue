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
      Уличные
      <v-spacer class="spacer-right"></v-spacer>
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'all', type:'all', brand:'vans', gender:'all', isNew:'all', isOnSale:'all'}}"
      >Vans
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'all', type:'all', brand:'palace', gender:'all', isNew:'all', isOnSale:'all'}}"
      >Palace
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'all', type:'all', brand:'supreme', gender:'all', isNew:'all', isOnSale:'all'}}"
      >Supreme
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'all', type:'all', brand:'stoneisland', gender:'all', isNew:'all', isOnSale:'all'}}"
      >Stone Island
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'all', type:'all', brand:'thenorthface', gender:'all', isNew:'all', isOnSale:'all'}}"
      >The North Face
    </v-btn>
  </v-list>
</template>

<script>
export default {
  name: 'StreetBrands'
}
</script>

<style lang="scss" scoped>
@import "@/styles/MobileMenu.scss"

</style>
