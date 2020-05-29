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
      Спорт
      <v-spacer class="spacer-right"></v-spacer>
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'all', type:'all', brand:'nike', gender:'all', isNew:'all', isOnSale:'all'}}"
      >Nike
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'all', type:'all', brand:'reebok', gender:'all', isNew:'all', isOnSale:'all'}}"
      >Reebok
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'all', type:'all', brand:'adidas', gender:'all', isNew:'all', isOnSale:'all'}}"
      >Adidas
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'all', type:'all', brand:'jordan', gender:'all', isNew:'all', isOnSale:'all'}}"
      >Jordan
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'all', type:'all', brand:'puma', gender:'all', isNew:'all', isOnSale:'all'}}"
      >Puma
    </v-btn>
  </v-list>
</template>

<script>
export default {
  name: 'SportBrands'
}
</script>

<style lang="scss" scoped>
@import "@/styles/MobileMenu.scss"

</style>
