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
      распродажа для детей
      <v-spacer class="spacer-right"></v-spacer>
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'clothes', type:'all', brand:'all', gender:'kidsAll', isNew:'all', isOnSale: true}}"
      >Одежда
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'shoes', type:'all', brand:'all', gender:'kidsAll', isNew:'all', isOnSale: true}}"
      >Обувь
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'accessoires', type:'all', brand:'all', gender:'kidsAll', isNew:'all', isOnSale: true}}"
      >Аксессуары
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'kidsAll', isNew:'all', isOnSale: true}}"
      >Все модели
    </v-btn>
  </v-list>
</template>

<script>
export default {
  name: 'KidsSale'
}
</script>

<style lang="scss" scoped>
@import "@/styles/MobileMenu.scss"
</style>
