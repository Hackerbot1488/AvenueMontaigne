<template>
  <v-list v-if="anonim" dense aria-orientation="column" class="list-controls">
    <v-btn
      block
      depressed
      class="nav-button mark-button back-button first-button"
      @click="$emit('back')"
      >
      <v-icon left dark >mdi-chevron-left</v-icon>
      <v-spacer></v-spacer>
      профиль
      <v-spacer class="spacer-right"></v-spacer>
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      to="/login"
      >Войти
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="$emit('pushed')"
      to="/register"
      >Зарегистрироваться
    </v-btn>
  </v-list>
  <v-list v-else dense aria-orientation="column" class="list-controls">
    <v-btn
      block
      depressed
      class="nav-button mark-button back-button first-button"
      @click="$emit('back')"
      >
      <v-icon left dark >mdi-chevron-left</v-icon>
      <v-spacer></v-spacer>
      профиль
      <v-spacer class="spacer-right"></v-spacer>
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      to="/favorite"
      @click="$emit('pushed')"
      >Избранное
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      to="/develop"
      @click="$emit('pushed')"
      >Статус заказа
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      to="/develop"
      @click="$emit('pushed')"
      >Помощь
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      to="/develop"
      @click="$emit('pushed')"
      >возврат
    </v-btn>
    <v-btn
      block
      depressed
      class="nav-button"
      @click="logoutHandler, $emit('pushed')"
      >выйти
    </v-btn>
  </v-list>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Profile',
  data () {
    return {
      anonim: null
    }
  },
  computed: {
    ...mapGetters(['user']),
    userOk () {
      return this.user
    }
  },
  methods: {
    async logoutHandler () {
      await this.$store.dispatch('logout')
      await this.$store.dispatch('loginAnonim')
      this.$router.push('/')
    }
  },
  watch: {
    userOk () {
      this.anonim = this.userOk.anonim
    }
  },
  mounted () {
    this.anonim = this.user.anonim
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/MobileMenu.scss"
</style>
