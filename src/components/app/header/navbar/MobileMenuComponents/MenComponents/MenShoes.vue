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
      Обувь
      <v-spacer class="spacer-right"></v-spacer>
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'shoes', type:'snickers', brand:'all', gender:'male', isNew:'all', isOnSale:'all'}}"
      >Кроссовки и кеды
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'shoes', type:'lowshoes', brand:'all', gender:'male', isNew:'all', isOnSale:'all'}}"
      >Туфли
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'shoes', type:'boots', brand:'all', gender:'male', isNew:'all', isOnSale:'all'}}"
      >Ботинки
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'shoes', type:'lofers', brand:'all', gender:'male', isNew:'all', isOnSale:'all'}}"
      >Лофферы
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'shoes', type:'all', brand:'all', gender:'male', isNew:'all', isOnSale:'all'}}"
      >Все модели
    </v-btn>
  </v-list>
</template>

<script>
export default {
  name: 'MenShoes'
}
</script>

<style lang="scss" scoped>
@import "@/styles/MobileMenu.scss"

</style>
