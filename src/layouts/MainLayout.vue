<template>
  <div class="Main-layout">
    <div id="header-container">
      <header>
        <HeaderContainer />
      </header>
    </div>
    <div id="main-container">
      <main>
        <MainContainer />
      </main>
    </div>
    <div id="footer-container">
      <footer>
        <FooterContainer />
      </footer>
    </div>
  </div>
</template>

<script>
import HeaderContainer from '@/components/app/header/Header-container'
import FooterContainer from '@/components/app/footer/Footer-container'
import MainContainer from '@/components/app/main/Main-container'
export default {
  name: 'main-layout',
  components: {
    HeaderContainer,
    FooterContainer,
    MainContainer
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
  flex-basis: 108px;
  margin-top:-20px;
}
#main-container {
  flex: 1 0 auto;
}
#footer-conntainer {
  flex:0 0 auto;
}

</style>
