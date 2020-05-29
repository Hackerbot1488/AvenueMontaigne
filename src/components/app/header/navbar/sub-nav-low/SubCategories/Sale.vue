<template>
    <div class="dropdown">
      <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'all', isNew:'all', isOnSale: true}}" class="dropbtn"><span class="cat-pan-head">РАСПРОДАЖА</span></router-link>
      <div class="dropdown-content">
        <div style="padding:0px 25px;">
          <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'all', isNew:'all', isOnSale: true}}"><span class="header-news">ПОПУЛЯРНОЕ</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'all', isNew:'all', isOnSale: true}}"><span class="header-news">ВСЕ МОДЕЛИ</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'all', isNew:'all', isOnSale: true}}"><span class="header-news">ПОСЛЕДНИЙ ШАНС</span></router-link>
        </div>
        <div class="wrap-news">
          <div style="padding:0px 20px 0px 15px;">
            <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'male', isNew:'all', isOnSale: true}}"><span class="header-news">РАСПРОДАЖА ДЛЯ МУЖЧИН</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'all', brand:'all', gender:'male', isNew:'all', isOnSale: true}}"><span>Одежда</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'shoes', type:'all', brand:'all', gender:'male', isNew:'all', isOnSale: true}}"><span>Обувь</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'accessoires', type:'all', brand:'all', gender:'male', isNew:'all', isOnSale: true}}"><span>Аксессуары</span></router-link>
          </div>
          <div style="padding:0px 20px 0px 15px;">
            <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'female', isNew:'all', isOnSale: true}}"><span class="header-news">РАСПРОДАЖА ДЛЯ ЖЕНЩИН</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'all', brand:'all', gender:'female', isNew:'all', isOnSale: true}}"><span>Одежда</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'shoes', type:'all', brand:'all', gender:'female', isNew:'all', isOnSale: true}}"><span>Обувь</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'accessoires', type:'all', brand:'all', gender:'female', isNew:'all', isOnSale: true}}"><span>Аксессуары</span></router-link>
          </div>
        </div>
        <div style="padding:0px 25px;">
          <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'kidsAll', isNew:'all', isOnSale: true}}"><span class="header-news">РАСПРОДАЖА ДЛЯ ДЕТЕЙ</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'clothes', type:'all', brand:'all', gender:'kidsAll', isNew:'all', isOnSale: true}}"><span>Одежда</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'shoes', type:'all', brand:'all', gender:'kidsAll', isNew:'all', isOnSale: true}}"><span>Обувь</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'accessoires', type:'all', brand:'all', gender:'kidsAll', isNew:'all', isOnSale: true}}"><span>Аксессуары</span></router-link>
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
  padding: 30px 10px 30px 10px;
  border:0.5px solid #c1c4be;
  margin-left: -592.32px;
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
