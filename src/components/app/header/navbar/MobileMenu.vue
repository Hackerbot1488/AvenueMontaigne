<template>
  <v-window v-model="step" >
    <v-window-item :value="'main'">
      <v-list dense aria-orientation="column" class="list-controls">
        <v-btn
          block
          depressed
          class="nav-button first-button"
          @click="step = 'profile'"
          >
          <v-icon left dark>mdi-account</v-icon>
          Профиль
          <v-spacer></v-spacer>
          <v-icon right dark>mdi-chevron-right</v-icon>
          </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="step = 'news'"
          >Новинки
          <v-icon right dark>mdi-chevron-right</v-icon>
          </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="step = 'men'"
          >Мужчины
          <v-icon right dark>mdi-chevron-right</v-icon>
          </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="step = 'women'"
          >Женщины
          <v-icon right dark>mdi-chevron-right</v-icon>
          </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="step = 'kids'"
          >Дети
          <v-icon right dark>mdi-chevron-right</v-icon>
          </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="step = 'brands'"
          >Бренды
          <v-icon right dark>mdi-chevron-right</v-icon>
          </v-btn>
        <v-btn
          block
          depressed
          class="nav-button"
          @click="step = 'sale'"
          >Распродажа
          <v-icon right dark>mdi-chevron-right</v-icon>
          </v-btn>
        <v-btn
          block
          depressed
          class="nav-button mark-button"
          @click="step = 'help'"
          >Помощь
          <v-icon right dark>mdi-chevron-right</v-icon>
          </v-btn>
      </v-list>
    </v-window-item>
    <v-window-item :value="'profile'">
      <Profile @back="step = 'main'" @pushed="step = 'main', $emit('close')" />
      </v-window-item>
    <v-window-item :value="'news'">
      <News @back="step = 'main'" @pushed="step = 'main'" />
      </v-window-item>
    <v-window-item :value="'men'">
      <Men @back="step = 'main'" @pushed="step = 'main'" />
      </v-window-item>
    <v-window-item :value="'women'">
      <Women @back="step = 'main'" @pushed="step = 'main'" />
      </v-window-item>
    <v-window-item :value="'kids'">
      <Kids @back="step = 'main'" @pushed="step = 'main'" />
      </v-window-item>
    <v-window-item :value="'brands'">
      <Brands @back="step = 'main'" @pushed="step = 'main'" />
      </v-window-item>
    <v-window-item :value="'sale'">
      <Sale @back="step = 'main'" @pushed="step = 'main'" />
      </v-window-item>
    <v-window-item :value="'help'">
      <Help @back="step = 'main'" @pushed="step = 'main'" />
      </v-window-item>
  </v-window>
</template>

<script>
import Profile from './MobileMenuComponents/Profile'
import News from './MobileMenuComponents/News'
import Men from './MobileMenuComponents/Men'
import Women from './MobileMenuComponents/Women'
import Kids from './MobileMenuComponents/Kids'
import Brands from './MobileMenuComponents/Brands'
import Sale from './MobileMenuComponents/Sale'
import Help from './MobileMenuComponents/Help'
export default {
  name: 'MobileMenu',
  components: {
    Profile,
    News,
    Men,
    Women,
    Kids,
    Brands,
    Sale,
    Help
  },
  data () {
    return {
      step: 'main'
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/MobileMenu.scss"
</style>
