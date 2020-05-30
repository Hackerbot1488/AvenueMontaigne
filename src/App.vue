<template>
  <div id="app" style="height:100vh;">
      <div class="wrap-loader" v-if="loading">
        <Loader  />
      </div>
      <v-app id="v-application" v-else>
        <div class="Main-layout">
          <div id="header-container">
            <header>
              <HeaderContainer />
            </header>
          </div>
          <div id="main-container">
            <main>
              <router-view :key="key" />
            </main>
          </div>
          <div id="foonter-container">
            <footer>
              <FooterContainer />
            </footer>
          </div>
          <div class="bottom-padding" v-if="inBag"></div>
        </div>
      </v-app>
  </div>
</template>

<script>
import HeaderContainer from '@/components/app/header/Header-container'
import FooterContainer from '@/components/app/footer/Footer-container'
export default {
  name: 'App',
  metaInfo: {
    title: 'Avenue Montaigne'
  },
  components: {
    HeaderContainer,
    FooterContainer
  },

  data: () => ({
    loading: true,
    key: 0
  }),
  computed: {
    path () {
      return this.$route.params
    },
    inBag () {
      return this.$route.name === 'Bag'
    }
  },
  watch: {
    path () {
      var str = this.path
      if (Object.keys(str).length !== 0) {
        this.key++
      }
    }
  },
  async mounted () {
    var uid = await this.$store.dispatch('getUid')
    if (uid) {
      await this.$store.dispatch('fetchUser')
    } else {
      await this.$store.dispatch('loginAnonim')
      uid = await this.$store.dispatch('getUid')
    }
    await this.$store.dispatch('fetchAll')
    // await this.$store.dispatch('fetchAllProd')
    await this.$store.dispatch('fillProducts')
    this.loading = false
  }
}
</script>

<style lang="scss" scoped>
.Main-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}
#header-container {
  flex:0 0 auto;
  flex-basis: 40px;
  /* margin-top:-20px; */
}
.bottom-padding {
  display: none;
  width: 100%;
  background-color: white;
  /* height: 10vh; */
  height: 74px;
}
#main-container {
  flex: 1 0 auto;
}
#foonter-conntainer {
  flex:0 0 auto;
  width: 100%;
}
.wrap-loader {
  padding: calc((100vh - 72px)/2) calc((100vw - 72px)/2);
}
@media (min-width: 1262.74px) {
  #header-container {
    flex-basis: 108px;
  }
}
@media (max-width: 1040px) {
  .bottom-padding {
    display: block;
  }
}
</style>
