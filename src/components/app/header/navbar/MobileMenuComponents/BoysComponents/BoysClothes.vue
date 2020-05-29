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
      Одежда для мальчиков
      <v-spacer class="spacer-right"></v-spacer>
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'clothes', type:'jackets', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"
      >Верхняя одежда
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'clothes', type:'pants', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"
      >Брюки
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'clothes', type:'jeans', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"
      >Джинсы
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'clothes', type:'hoodies', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"
      >Худи
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'clothes', type:'sweatshots', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"
      >Свитшоты
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'clothes', type:'longslivs', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"
      >Лонгсливы
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'clothes', type:'shirts', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"
      >Рубашки
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'clothes', type:'t-shirts', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"
      >Футболки
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'clothes', type:'shorts', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"
      >Шорты
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'clothes', type:'socks', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"
      >Носки
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      :to="{name: 'Products', params:{category:'clothes', type:'all', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"
      >Все модели
    </v-btn>
  </v-list>
</template>

<script>
export default {
  name: 'BoysClothes'
}
</script>

<style lang="scss" scoped>
@import "@/styles/MobileMenu.scss"

</style>
