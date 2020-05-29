<template>
  <div class="header-bord">
    <header class="header-nav">
      <nav class="nav-header-desktop" v-if="windowWidthValue >= 1262.74">
        <HighSection />
        <LowSection />
      </nav>
      <nav class="nav-header-mobile" v-else>
        <MobileNavbar />
      </nav>
    </header>
    <div class="empty-nav"></div>
  </div>
</template>

<script>
import HighSection from './navbar/High-section'
import LowSection from './navbar/Low-section'
import MobileNavbar from './navbar/MobileNavbar'
export default {
  name: 'Header-container',
  components: {
    HighSection,
    LowSection,
    MobileNavbar
  },
  data () {
    return {
      windowWidthValue: window.innerWidth,
      interval: null
    }
  },
  computed: {
    windowWidth () {
      return this.windowWidthValue
    }
  },
  mounted () {
    this.interval = setInterval(() => {
      this.windowWidthValue = window.innerWidth
    }, 100)
  },
  beforeDestroy () {
    clearInterval(this.interval)
  }
}
</script>

<style scoped lang="scss">
.header-nav
{
  position:fixed;
  top:0;
  width: 100%;
  z-index: 8;
  // height: 40px;
  background-color: #ffffff;
}
.empty-nav
{
  height:48px;
  background-color: #ffffff;
  // height:108px; default
  /* margin-top:-20px; */
}
@media (min-width: 1262.74px) {
  .empty-nav , .header-nav {
    height: 108px;
  }
}
</style>
