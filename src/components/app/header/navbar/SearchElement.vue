<template>
  <div class="border-for-align">
    <div class="search-border">
      <button class="search-btn"><img class="search-icon" src="@/assets/images/icons/search.png" /></button>

        <input class="search-field" placeholder="Поиск" type="search"  />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchElement'
}
</script>
<style lang="scss" scoped>
.border-for-align {
  padding: 14px 20px 14px 30px;
  height: 64px;
}
.search-border{
  border: 0.5px solid #cccccc;
  height: 36px;
  padding: 7px 10px 7px 10px;
  display: flex;
}
.search-btn {
  border: none;
  background-color: #ffffff;
  /* margin-left: -30px; */
  padding: 0px 6px 0px 6px;
  height: 20px;
  outline: none;
}
.search-field {
  height: 20px;
  width: 100%;
  /* width: 132.21px; */
  font-family: Arial, Helvetica, sans-serif;
  padding: 0;
  border: none;
  outline: none;
}
.search-icon{
  /* margin-bottom: 2px; */
  width: 14px;
  height: 14px;
}
</style>
