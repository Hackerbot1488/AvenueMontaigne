<template>
  <v-window v-model="step">
    <v-window-item :value="'main'">
      <v-list dense aria-orientation="column" class="list-controls">
        <v-btn
          block
          depressed
          class="nav-button mark-button back-button first-button"
          @click="$emit('back')"
          >
          <v-icon left dark >mdi-chevron-left</v-icon>
          <v-spacer></v-spacer>
          мужчины
          <v-spacer class="spacer-right"></v-spacer>
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="$emit('pushed')"
          :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'male', isNew:'all', isOnSale:'all'}}"
          >Все модели
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="$emit('pushed')"
          :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'male', isNew:'all', isOnSale:'true'}}"
          >Распродажа
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="$emit('pushed')"
          :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'male', isNew:'true', isOnSale:'all'}}"
          >новинки
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="$emit('pushed')"
          to="/develop"
          >Образы
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="step = 'menClothes'"
          >Одежда
          <v-icon right dark>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="step = 'menShoes'"
          >Обувь
          <v-icon right dark>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="step = 'menAccessoires'"
          >Аксессуары
          <v-icon right dark>mdi-chevron-right</v-icon>
        </v-btn>
      </v-list>
    </v-window-item>
    <v-window-item :value="'menClothes'">
      <MenClothes @back="step = 'main'" @pushed="$emit('pushed'), step = 'main'"/>
    </v-window-item>
    <v-window-item :value="'menShoes'">
      <MenShoes @back="step = 'main'" @pushed="$emit('pushed'), step = 'main'"/>
    </v-window-item>
    <v-window-item :value="'menAccessoires'">
      <MenAccessoires @back="step = 'main'" @pushed="$emit('pushed'), step = 'main'"/>
    </v-window-item>
  </v-window>
</template>

<script>
import MenShoes from './MenComponents/MenShoes'
import MenClothes from './MenComponents/MenClothes'
import MenAccessoires from './MenComponents/MenAccessoires'
export default {
  name: 'Men',
  data () {
    return {
      step: 'main'
    }
  },
  components: {
    MenShoes,
    MenClothes,
    MenAccessoires
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/MobileMenu.scss"

</style>
