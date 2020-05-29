<template>
  <div class="wrap-high-content">
    <div class="high-content-links">
      <div class="column-links">
        <router-link to="/develop"><span class="header-news">ПОДПИСАТЬСЯ НА РАССЫЛКУ</span></router-link>
        <router-link to="/develop"><span class="header-news">ПОДАРОЧНЫЕ СЕРТИФИКАТЫ</span></router-link>
        <router-link to="/register" v-if="anonim"><span class="header-news">ЗАРЕГЕСТРИРОВАТЬСЯ</span></router-link>
        <!-- <router-link to="/help" v-if="anonim" id="hidden-links"><span class="header-news">ПОМОЩЬ</span></router-link>
        <router-link to="/aboutus" v-if="anonim" id="hidden-links"><span class="header-news">Об Avenue Montaigne</span></router-link> -->
        <v-expansion-panels
          id="hidden-links"
          class="exp-panel"
          dark
        >
          <v-expansion-panel @click="openedHelp = !openedHelp, openedAbout = false"
          >
            <v-expansion-panel-header
              color="black"
              class="expansion-header"
            >
                <span class="header-news">ПОМОЩЬ</span>
              <template v-slot:actions>
                <v-icon color="white">{{iconHelp}}</v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content color="black" style="padding-left:0;">
              <div class="column-links">
                <router-link to="/develop"><span>Статус заказа</span></router-link>
                <router-link to="/develop"><span>Доставка</span></router-link>
                <router-link to="/develop"><span>Возврат</span></router-link>
                <router-link to="/develop"><span>Способы оплаты</span></router-link>
                <router-link to="/develop"><span>Связаться с нами</span></router-link>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel @click="openedAbout = !openedAbout, openedHelp = false">
            <v-expansion-panel-header
              color="black"
              class="expansion-header"
            >
                <span class="header-news">Об Avenue Montaigne</span>
              <template v-slot:actions>
                <v-icon color="white">{{iconAbout}}</v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content color="black">
              <div class="column-links">
                <router-link to="/develop"><span>Новости</span></router-link>
                <router-link to="/develop"><span>Карьера</span></router-link>
                <router-link to="/develop"><span>Инвесторам</span></router-link>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <div class="column-links hiden">
        <router-link to="/develop"><span class="header-news">ПОМОЩЬ</span></router-link>
        <router-link to="/develop"><span>Статус заказа</span></router-link>
        <router-link to="/develop"><span>Доставка</span></router-link>
        <router-link to="/develop"><span>Возврат</span></router-link>
        <router-link to="/develop"><span>Способы оплаты</span></router-link>
        <router-link to="/develop"><span>Связаться с нами</span></router-link>
      </div>
      <div class="column-links hiden right-column">
        <router-link to="/develop"><span class="header-news">Об Avenue Montaigne</span></router-link>
        <router-link to="/develop"><span>Новости</span></router-link>
        <router-link to="/develop"><span>Карьера</span></router-link>
        <router-link to="/develop"><span>Инвесторам</span></router-link>
      </div>
    </div>
    <div class="high-content-icons">
    </div>
  </div>
</template>
<script>
export default {
  name: 'High-content',
  data () {
    return {
      openedHelp: false,
      openedAbout: false
    }
  },
  computed: {
    anonim () {
      return this.$store.getters.user.anonim
    },
    iconHelp () {
      return this.openedHelp ? 'mdi-minus' : 'mdi-plus'
    },
    iconAbout () {
      return this.openedAbout ? 'mdi-minus' : 'mdi-plus'
    }
  }
}
</script>

<style lang="scss" scoped>
#hidden-links {
  display: none;
}
.high-content-links {
  display: flex;
  margin: auto;
  justify-content: space-between;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}
.wrap-high-content {
  width: fit-content;
}
.column-links a {
  color: grey;
  padding: 5px 0px;
  text-decoration: none;
  text-align: left;
  display:block;
  font-size: 12px;
}
.header-news {
  font-family: "Century Gothic";
  font-size: 14px;
  color: white;
}
.column-links {
  display: block;
  padding: 5px 100px 5px 10px;
}
.column-links a:hover {
  color:white;
}
.right-column {
  padding-right: 100px;
}
@media (max-width: 1262.74px) {
  .column-links a:hover {
  color:grey;
}
}
@media (max-width: 678px) {
  .right-column {
    padding-right: 0px;
  }
}
@media (max-width: 630px) {
  .column-links {
    display: flex;
    flex-direction: column;
    padding: 0;
    width: 100%;
  }
  .hiden {
    display: none;
  }
  #hidden-links {
    display: block;
  }
  .column-links a {
    display: auto;
    width: fit-content;
  }
  .wrap-high-content {
    width: 100%;
  }
}
.hiden {
  display: auto;
}
.expansion-header {
  padding-left: 0px;
  /* padding-right: 0px; */
}
.exp-panel {
  /* width: calc(100vw - 46px - 50px); */
  width: 100%;
}
</style>
