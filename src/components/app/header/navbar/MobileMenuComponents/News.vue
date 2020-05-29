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
          новинки
          <v-spacer class="spacer-right"></v-spacer>
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="$emit('pushed')"
          :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'all', isNew:true, isOnSale:'all'}}"
          >Все новинки
          <!-- <v-icon right dark>mdi-chevron-right</v-icon> -->
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="step = 'menNews'"
          >Новинки для мужчин
          <v-icon right dark>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="step = 'womenNews'"
          >Новинки для женщин
          <v-icon right dark>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="step = 'kidsNews'"
          >Новинки для детей
          <v-icon right dark>mdi-chevron-right</v-icon>
        </v-btn>
      </v-list>
    </v-window-item>
    <v-window-item :value="'menNews'">
      <MenNews @back="step = 'main'" @pushed="$emit('pushed'), step = 'main'"/>
    </v-window-item>
    <v-window-item :value="'womenNews'">
      <WomenNews @back="step = 'main'" @pushed="$emit('pushed'), step = 'main'"/>
    </v-window-item>
    <v-window-item :value="'kidsNews'">
      <KidsNews @back="step = 'main'" @pushed="$emit('pushed'), step = 'main'"/>
    </v-window-item>
  </v-window>
</template>

<script>
import MenNews from './NewsComponents/MenNews'
import WomenNews from './NewsComponents/WomenNews'
import KidsNews from './NewsComponents/KidsNews'
export default {
  data () {
    return {
      step: 'main'
    }
  },
  components: {
    MenNews,
    WomenNews,
    KidsNews
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/MobileMenu.scss"

</style>
