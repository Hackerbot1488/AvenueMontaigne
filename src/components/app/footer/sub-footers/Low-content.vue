<template>
  <div class="wrap-low-content">
    <div class="low-content-left">
      <span class="low-cont-span">©AM,Inc.,2020 Все права защищены</span>
    </div>
    <!-- <v-spacer></v-spacer> -->
    <div class="low-content-right">
      <a><span>Каталог</span></a>
      <a><span>Условия использования</span></a>
      <a><span>Условия продажи</span></a>
      <a><span>Политика конфиденциальности</span></a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.low-content-right {
  display: flex;
  /* padding-left: 750px; */

}
.low-content-right {
  display: flex;
  color:white;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
}
.low-content-right a {
  color:white;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  margin-right: 10px;
  margin-left: 10px;
  font-size: 10px;
  padding-top: 6px;
}
.wrap-low-content {
  display: flex;
  padding-top: 15px;
  justify-content: space-between;
}
.low-cont-span {
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 10px;
  padding:0;
  color: #7e7e7e;
}
@media (max-width: 725px) {
  .wrap-low-content {
    flex-direction: column-reverse;
    justify-content: none;
  }
  .low-content-left {
    margin-left: 10px;
    margin-top: 5px;
  }
}
@media (max-width: 555px)  {
  .low-content-right {
    flex-direction: column;
  }
}
</style>
