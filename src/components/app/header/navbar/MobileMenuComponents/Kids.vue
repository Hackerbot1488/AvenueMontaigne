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
          дети
          <v-spacer class="spacer-right"></v-spacer>
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="$emit('pushed')"
          :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'kidsAll', isNew:'all', isOnSale:'all'}}"
          >Все модели
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="$emit('pushed')"
          :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'kidsAll', isNew:'all', isOnSale:'true'}}"
          >Распродажа
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="$emit('pushed')"
          :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'kidsAll', isNew:'true', isOnSale:'all'}}"
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
          @click="step = 'boysClothes'"
          >Одежда для мальчиков
          <v-icon right dark>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="step = 'boysShoes'"
          >Обувь для мальчиков
          <v-icon right dark>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="step = 'boysAccessoires'"
          >Аксессуары для мальчиков
          <v-icon right dark>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="step = 'girlsClothes'"
          >Одежда для девочек
          <v-icon right dark>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="step = 'girlsShoes'"
          >Обувь для девочек
          <v-icon right dark>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="step = 'girlsAccessoires'"
          >Аксессуары для девочек
          <v-icon right dark>mdi-chevron-right</v-icon>
        </v-btn>
      </v-list>
    </v-window-item>
    <v-window-item :value="'boysClothes'">
      <BoysClothes @back="step = 'main'" @pushed="$emit('pushed'), step = 'main'"/>
    </v-window-item>
    <v-window-item :value="'boysShoes'">
      <BoysShoes @back="step = 'main'" @pushed="$emit('pushed'), step = 'main'"/>
    </v-window-item>
    <v-window-item :value="'boysAccessoires'">
      <BoysAccessoires @back="step = 'main'" @pushed="$emit('pushed'), step = 'main'"/>
    </v-window-item>
    <v-window-item :value="'girlsClothes'">
      <GirlsClothes @back="step = 'main'" @pushed="$emit('pushed'), step = 'main'"/>
    </v-window-item>
    <v-window-item :value="'girlsShoes'">
      <GirlsShoes @back="step = 'main'" @pushed="$emit('pushed'), step = 'main'"/>
    </v-window-item>
    <v-window-item :value="'girlsAccessoires'">
      <GirlsAccessoires @back="step = 'main'" @pushed="$emit('pushed'), step = 'main'"/>
    </v-window-item>
  </v-window>
</template>

<script>
import BoysShoes from './BoysComponents/BoysShoes'
import BoysClothes from './BoysComponents/BoysClothes'
import BoysAccessoires from './BoysComponents/BoysAccessoires'
import GirlsShoes from './GirlsComponents/GirlsShoes'
import GirlsClothes from './GirlsComponents/GirlsClothes'
import GirlsAccessoires from './GirlsComponents/GirlsAccessoires'
export default {
  name: 'Men',
  data () {
    return {
      step: 'main'
    }
  },
  components: {
    BoysShoes,
    BoysClothes,
    BoysAccessoires,
    GirlsShoes,
    GirlsClothes,
    GirlsAccessoires
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/MobileMenu.scss"

</style>
