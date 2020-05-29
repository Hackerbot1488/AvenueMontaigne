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
      новинки для женщин
      <v-spacer class="spacer-right"></v-spacer>
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'shoes', type:'all', brand:'all', gender:'female', isNew:true, isOnSale:'all'}}"
      >обувь
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'clothes', type:'all', brand:'all', gender:'female', isNew:true, isOnSale:'all'}}"
      >одежда
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'accessoires', type:'all', brand:'all', gender:'female', isNew:true, isOnSale:'all'}}"
      >аксессуары
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'female', isNew:true, isOnSale:'all'}}"
      >все новинки
    </v-btn>
  </v-list>
</template>

<script>
export default {
  name: 'WomenNews'
}
</script>

<style lang="scss" scoped>
@import "@/styles/MobileMenu.scss"

</style>
