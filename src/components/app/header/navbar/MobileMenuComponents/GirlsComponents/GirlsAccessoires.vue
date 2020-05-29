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
      Аксессуары для девочек
      <v-spacer class="spacer-right"></v-spacer>
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'accessoires', type:'headresses', brand:'all', gender:'girls', isNew:'all', isOnSale:'all'}}"
      >Головные уборы
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'accessoires', type:'glasses', brand:'all', gender:'girls', isNew:'all', isOnSale:'all'}}"
      >Очки
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'accessoires', type:'backpacks', brand:'all', gender:'girls', isNew:'all', isOnSale:'all'}}"
      >Рюкзаки
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'accessoires', type:'bags', brand:'all', gender:'girls', isNew:'all', isOnSale:'all'}}"
      >Сумки
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'accessoires', type:'all', brand:'all', gender:'girls', isNew:'all', isOnSale:'all'}}"
      >Все модели
    </v-btn>
  </v-list>
</template>

<script>
export default {
  name: 'GirlsAccessoires'
}
</script>

<style lang="scss" scoped>
@import "@/styles/MobileMenu.scss"

</style>
