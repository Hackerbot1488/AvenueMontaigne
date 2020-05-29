<template>
    <div class="dropdown">
      <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'all', isNew:'all', isOnSale:'all'}}" class="dropbtn"><span class="cat-pan-head">БРЕНДЫ</span></router-link>
      <div class="dropdown-content">
        <div style="padding:0px 25px;">
          <span class="header-news">СПОРТ</span>
          <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'nike', gender:'all', isNew:'all', isOnSale:'all'}}"><span>Nike</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'reebok', gender:'all', isNew:'all', isOnSale:'all'}}"><span>Reebok</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'adidas', gender:'all', isNew:'all', isOnSale:'all'}}"><span>Adidas</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'jordan', gender:'all', isNew:'all', isOnSale:'all'}}"><span>Jordan</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'puma', gender:'all', isNew:'all', isOnSale:'all'}}"><span>Puma</span></router-link>
        </div>
        <div class="wrap-news">
          <div style="padding:0px 40px 0px 25px;">
            <span class="header-news">УЛИЧНЫЕ</span>
            <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'vans', gender:'all', isNew:'all', isOnSale:'all'}}"><span>Vans</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'palace', gender:'all', isNew:'all', isOnSale:'all'}}"><span>Palace</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'supreme', gender:'all', isNew:'all', isOnSale:'all'}}"><span>Supreme</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'stoneisland', gender:'all', isNew:'all', isOnSale:'all'}}"><span>Stone Island</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'thenorthface', gender:'all', isNew:'all', isOnSale:'all'}}"><span>The North Face</span></router-link>
          </div>
          <div style="padding:0px 25px;">
            <span class="header-news">КЛАССИКА</span>
            <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'gucci', gender:'all', isNew:'all', isOnSale:'all'}}"><span>Gucci</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'louisvuetton', gender:'all', isNew:'all', isOnSale:'all'}}"><span>Louis Vuetton</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'calvinklein', gender:'all', isNew:'all', isOnSale:'all'}}"><span>Calvin Klein</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'channel', gender:'all', isNew:'all', isOnSale:'all'}}"><span>Channel</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'ralphlauren', gender:'all', isNew:'all', isOnSale:'all'}}"><span>Ralph Lauren</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'wrangler', gender:'all', isNew:'all', isOnSale:'all'}}"><span>Wrangler</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'levis', gender:'all', isNew:'all', isOnSale:'all'}}"><span>Levis</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'drmartens', gender:'all', isNew:'all', isOnSale:'all'}}"><span>Dr Martens</span></router-link>
          </div>
        </div>
        <div style="padding:0px 25px;">
          <span class="header-news">АНДЕРГРАУНД</span>
          <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'assc', gender:'all', isNew:'all', isOnSale:'all'}}"><span>Anti Social Social Club</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'sputnik', gender:'all', isNew:'all', isOnSale:'all'}}"><span>СПУТНИК1985</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'batnorton', gender:'all', isNew:'all', isOnSale:'all'}}"><span>Bat Norton</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'unost', gender:'all', isNew:'all', isOnSale:'all'}}"><span>ЮНОСТЬ</span></router-link>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'DropTest'
}
</script>
<style scoped>
/* Dropdown Button */
.dropbtn {
  color: rgb(116, 114, 114);
  /* background-color: white; */
  padding: 20.8px 25px;
  border: none;
  display: block;
  cursor: pointer;
  text-decoration: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
}
/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ffffff;
  margin: auto;
  min-width: 747.64px;
  z-index: 10000;
  padding: 30px 30px 30px 30px;
  border:0.5px solid #c1c4be;
  margin-left: -478.19px;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: grey;
  padding: 5px 0px;
  text-decoration: none;
  text-align: left;
  display:block;
}
.wrap-news {
  display: flex;
  border-left: 0.5px solid #cccccc;
  border-right: 0.5px solid #cccccc;
}
.header-news {
  font-weight: 550;
  font-size: 11px;
  color: black;
  cursor: pointer;
}
.cat-pan-head {
  font-size: 15px;
}
/* Change color of dropdown links on hover */
.dropdown-content a:hover {color:black;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: flex;justify-content: space-between;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  color:black;
}

</style>
