<template>
    <section class="nav-low">
      <div class="section-left">
        <router-link to="/">
          <div class="logo-MyRoom">
            <span class="logo">Avenue Montaigne</span>
          </div>
        </router-link>
      </div>
      <div class="section-center">
        <CategoryPanel />
      </div>
      <div class="section-right">
          <SearchElement />
      </div>
    </section>
</template>
<script>
import SearchElement from './SearchElement'
import CategoryPanel from './sub-nav-low/CategoryPanel'
export default {
  name: 'Low-section',
  components: {
    SearchElement,
    CategoryPanel
  }
}
</script>
<style lang="scss" scoped>
.nav-low {
  border-bottom: 0.5px solid #ccc;
  height: 64px;
  min-width: 98.9062%;
  display: flex;
  margin-right: 0;
}
.section-left {
  min-width: 265.11px;
  height: 64px;
  a {
    text-decoration: none;
  }
}
/* .section-left:hover {
  .logo {
    color: brown;
  }
} */
.section-center {
  height: 64px;
  /* flex: 1; */
}
.section-right {
  width: 249.99px;
  height: 64px;
}
.logo-MyRoom {
  padding: 7px 20px 12.2px 20px;
  /* 10.8% 18% */
}
.logo {
  font-size: 30px;
  /* font-size: 1.9747vw; */
  font-family: CyrillicGoth, Arial, Helvetica, sans-serif;
  color: black;
}
</style>
