<template>
  <div class="wrap-category-panel">
    <New />
    <Men />
    <Women />
    <Kids />
    <Brands />
    <Sale />
  </div>
</template>
<script>
import New from './SubCategories/New'
import Men from './SubCategories/Men'
import Women from './SubCategories/Women'
import Kids from './SubCategories/Kids'
import Brands from './SubCategories/Brands'
import Sale from './SubCategories/Sale'
export default {
  name: 'CategoryPanel',
  components: {
    New,
    Men,
    Women,
    Kids,
    Brands,
    Sale
  }
}
</script>
<style lang="scss" scoped>
.wrap-category-panel {
  display: flex;
  /* padding-left: 7.9112vw; */
  padding-left: 0;
  padding-right: 0;
}
@media (min-width: 1262.74px) {
  .wrap-category-panel {
    display: flex;
    /* padding-left: 7.9112vw; */
    padding-left: calc((100vw - 1262.74px)*(120.46/256.46));
    padding-right: calc((100vw - 1262.74px)*(136/256.46));
  }
}
</style>
