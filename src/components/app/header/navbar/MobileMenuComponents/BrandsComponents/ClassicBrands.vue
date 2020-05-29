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
      Классика
      <v-spacer class="spacer-right"></v-spacer>
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'all', type:'all', brand:'gucci', gender:'all', isNew:'all', isOnSale:'all'}}"
      >Gucci
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'all', type:'all', brand:'louisvuetton', gender:'all', isNew:'all', isOnSale:'all'}}"
      >Louis Vuetton
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'all', type:'all', brand:'calvinklein', gender:'all', isNew:'all', isOnSale:'all'}}"
      >Calvin Klein
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'all', type:'all', brand:'channel', gender:'all', isNew:'all', isOnSale:'all'}}"
      >Channel
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'all', type:'all', brand:'ralphlauren', gender:'all', isNew:'all', isOnSale:'all'}}"
      >Ralph Lauren
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'all', type:'all', brand:'wrangler', gender:'all', isNew:'all', isOnSale:'all'}}"
      >Wrangler
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'all', type:'all', brand:'levis', gender:'all', isNew:'all', isOnSale:'all'}}"
      >Levis
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'all', type:'all', brand:'drmartens', gender:'all', isNew:'all', isOnSale:'all'}}"
      >Dr Martens
    </v-btn>
  </v-list>
</template>

<script>
export default {
  name: 'ClassicBrands'
}
</script>

<style lang="scss" scoped>
@import "@/styles/MobileMenu.scss"

</style>
