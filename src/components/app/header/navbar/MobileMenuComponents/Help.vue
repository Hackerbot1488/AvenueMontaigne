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
      помощь
      <v-spacer class="spacer-right"></v-spacer>
    </v-btn>
    <v-btn
      block
      depressed
      @click="$emit('pushed')"
      to="/develop"
      class="nav-button"
      >Статус заказа
    </v-btn>
    <v-btn
      block
      depressed
      @click="$emit('pushed')"
      to="/develop"
      class="nav-button"
      >Отправка и доставка
    </v-btn>
    <v-btn
      block
      depressed
      @click="$emit('pushed')"
      to="/develop"
      class="nav-button"
      >возврат
    </v-btn>
    <v-btn
      block
      depressed
      @click="$emit('pushed')"
      to="/develop"
      class="nav-button"
      >Связаться с нами
    </v-btn>
  </v-list>
</template>

<script>
export default {
  name: 'Help'
}
</script>

<style lang="scss" scoped>
@import "@/styles/MobileMenu.scss"
</style>
