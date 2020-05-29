<template>
  <div style="border-bottom:0.5px solid #ccc">
    <v-app-bar
      color="white"
      dark
      dense
      flat
    >

      <router-link to="/" class="nav-link">
        <v-toolbar-title color="black" class="logo-title">Avenue Montaigne</v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <v-btn icon ripple>
        <v-icon color="black">mdi-magnify</v-icon>
      </v-btn>

      <router-link to="/bag" class="nav-link">
        <v-btn icon ripple>
          <v-icon color="black">mdi-cart</v-icon>
        </v-btn>
      </router-link>

      <v-btn icon ripple @click="drawer = !drawer">
        <v-icon color="black">mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      temporary
      fixed
      right
      v-model="drawer"
      class="right-menu"
      width="290"
    >
      <MobileMenu @close="drawer = !drawer"/>
    </v-navigation-drawer>
  </div>
</template>

<script>
import MobileMenu from './MobileMenu'
export default {
  name: 'MobileNavbar',
  data () {
    return {
      drawer: null
    }
  },
  components: {
    MobileMenu
  },
  computed: {
    anonim () {
      return this.$store.getters.user.anonim
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-link, .nav-link:hover {
  text-decoration: none ;
  color: black;
}
.logo-title {
  font-family: 'CyrillicGoth', 'Cyrillic Goth';
}
.right-menu {
  display: none;
  height: calc(100vh - 48px) !important;
  // height: calc(100vh) !important;
  top: 48px !important;
  -webkit-box-shadow: 0 !important;
  box-shadow: none !important;
}
@media (max-width: 1262.74px) {
  .right-menu {
    display: block;
  }
}
@media (max-width: 360px) {
  .logo-title {
    font-size: 16px;
  }
}
@media (max-width: 280px) {
  .logo-title {
    font-size: 12px;
  }
}
</style>
