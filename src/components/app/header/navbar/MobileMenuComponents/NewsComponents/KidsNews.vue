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
      новинки для детей
      <v-spacer class="spacer-right"></v-spacer>
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'clothes', type:'all', brand:'all', gender:'boys', isNew:true, isOnSale:'all'}}"
      >одежда для мальчиков
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'shoes', type:'all', brand:'all', gender:'boys', isNew:true, isOnSale:'all'}}"
      >обувь для мальчиков
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'clothes', type:'all', brand:'all', gender:'girls', isNew:true, isOnSale:'all'}}"
      >одежда для девочек
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'shoes', type:'all', brand:'all', gender:'girls', isNew:true, isOnSale:'all'}}"
      >обувь для девочек
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'kidsAll', isNew:true, isOnSale:'all'}}"
    >все модели
    </v-btn>
  </v-list>
</template>

<script>
export default {
  name: 'KidsNews'
}
</script>

<style lang="scss" scoped>
@import "@/styles/MobileMenu.scss"

</style>
