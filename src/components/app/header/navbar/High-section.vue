<template>
  <div>
    <section class="nav-high">
      <ul class="ul-links" style="min-width:241.5px;">
        <!-- <li class="li-left"><img src="@/assets/images/logo/nike.svg"/></li>
        <li class="li-left"><img src="@/assets/images/logo/adidas.svg"/></li>
        <li class="li-left"><img src="@/assets/images/logo/jordan.svg"/></li> -->
      </ul>
      <div class="ul-center"></div>
      <ul class="ul-links">
        <li class="li-right" v-if="key" :key="key + Math.random()">
          <router-link to="/login" class="link-nav-high"><span class="join-span">Присоединиться/Войти</span></router-link>
        </li>
        <li class="li-drop" v-else><DropProfile /></li>
        <li class="li-drop"><DropHelp /></li>
        <li class="li-right">
          <router-link to="/bag" class="link-nav-high"><img src="@/assets/images/icons/shopping-bag.svg" /></router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import DropHelp from './DropHelp'
import DropProfile from './DropProfile'
import { mapGetters } from 'vuex'
export default {
  name: 'High-Section',
  data () {
    return {
      key: false
    }
  },
  components: {
    DropHelp,
    DropProfile
  },
  computed: {
    ...mapGetters(['user']),
    userOk () {
      return this.user
    }
  },
  watch: {
    userOk () {
      this.key = this.userOk.anonim
    }
  },
  mounted () {
    this.key = this.user.anonim
  }
}
</script>
<style lang="scss">
.nav-high {
  border-bottom: 0.5px solid #ccc;
  height: 44px;
  min-width: 98.9062%;
  display: flex;
}
.ul-links {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #ffffff;
  display: flex;
}
.li-left {
  border-right: 0.5px solid #ccc;
  padding: 2.696% 25px;
}
.li-right {
  border-left: 0.5px solid #ccc;
  padding: 6.5px 25px;
  display: block;
}
.link-nav-high {
  display: block;
  color: rgb(168, 164, 164);
  text-align: center;
  padding: 5px;
  text-decoration: none;
}
.join-span {
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(168, 164, 164);
}
.link-nav-high:hover {
  color:#000000;
  text-decoration: none;
}
.ul-center {
  flex: 1;
  min-width: 500px;
}
</style>
