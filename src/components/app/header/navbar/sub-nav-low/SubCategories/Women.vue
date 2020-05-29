<template>
    <div class="dropdown">
      <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}" class="dropbtn"><span class="cat-pan-head">ЖЕНЩИНЫ</span></router-link>
      <div class="dropdown-content">
        <div style="padding:0px 25px;">
          <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}"><span class="header-news">БЕСТСЕЛЛЕРЫ</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'female', isNew:'all', isOnSale:'true'}}"><span class="header-news">РАСПРОДАЖА</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'female', isNew:'true', isOnSale:'all'}}"><span class="header-news">НОВИНКИ</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}"><span class="header-news">ОБРАЗЫ</span></router-link>
        </div>
        <div class="wrap-news">
          <div style="padding:0px 40px 0px 25px;">
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'all', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}"><span class="header-news">ОДЕЖДА</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'jackets', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}"><span>Верхняя одежда</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'pants', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}"><span>Брюки</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'jeans', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}"><span>Джинсы</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'hoodies', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}"><span>Худи</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'sweatshots', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}"><span>Свитшоты</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'longslivs', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}"><span>Лонгсливы</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'dresses', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}"><span>Платья</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'skirts', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}"><span>Юбки</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'shirts', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}"><span>Рубашки</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'t-shirts', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}"><span>Футболки</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'polos', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}"><span>Поло</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'shorts', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}"><span>Шорты</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'underwear', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}"><span>Нижнее белье</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'socks', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}"><span>Носки</span></router-link>
          </div>
          <div style="padding:0px 25px;">
            <router-link :to="{name: 'Products', params:{category:'shoes', type:'all', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}"><span class="header-news">ОБУВЬ</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'shoes', type:'snickers', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}"><span>Кроссовки и кеды</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'shoes', type:'lowshoes', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}"><span>Туфли</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'shoes', type:'boots', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}"><span>Ботинки</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'shoes', type:'lofers', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}"><span>Лоферы</span></router-link>
          </div>
        </div>
        <div style="padding:0px 25px;">
          <router-link :to="{name: 'Products', params:{category:'accessoires', type:'all', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}"><span class="header-news">АКСЕССУАРЫ</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'accessoires', type:'headdresses', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}"><span>Головные уборы</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'accessoires', type:'glasses', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}"><span>Очки</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'accessoires', type:'backpacks', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}"><span>Рюкзаки</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'accessoires', type:'bags', brand:'all', gender:'female', isNew:'all', isOnSale:'all'}}"><span>Сумки</span></router-link>
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
  margin-left: -254.43px;
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
