<template>
    <div class="dropdown">
      <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'kidsAll', isNew:'all', isOnSale:'all'}}" class="dropbtn"><span class="cat-pan-head">ДЕТИ</span></router-link>
      <div class="dropdown-content">
        <div style="padding:0px 25px;">
          <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'kidsAll', isNew:'all', isOnSale:'all'}}"><span class="header-news">БЕСТСЕЛЛЕРЫ</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'kidsAll', isNew:'all', isOnSale:'true'}}"><span class="header-news">РАСПРОДАЖА</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'kidsAll', isNew:'true', isOnSale:'all'}}"><span class="header-news">НОВИНКИ</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'kidsAll', isNew:'all', isOnSale:'all'}}"><span class="header-news">ОБРАЗЫ</span></router-link>
        </div>
        <div class="wrap-news">
          <div style="padding:0px 40px 0px 25px;">
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'all', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"><span class="header-news">ОДЕЖДА ДЛЯ МАЛЬЧИКОВ</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'jackets', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"><span>Верхняя одежда</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'pants', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"><span>Брюки</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'jeans', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"><span>Джинсы</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'hoodies', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"><span>Худи</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'sweatshots', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"><span>Свитшоты</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'longslivs', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"><span>Лонгсливы</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'shirts', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"><span>Рубашки</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'t-shirts', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"><span>Футболки</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'shorts', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"><span>Шорты</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'socks', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"><span>Носки</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'shoes', type:'all', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"><span class="header-news">ОБУВЬ ДЛЯ МАЛЬЧИКОВ</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'shoes', type:'snickers', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"><span>Кроссовки и кеды</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'shoes', type:'lowshoes', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"><span>Туфли</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'shoes', type:'boots', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"><span>Ботинки</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'shoes', type:'lofers', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"><span>Лоферы</span></router-link>
          </div>
          <div style="padding:0px 25px;">
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'all', brand:'all', gender:'girls', isNew:'all', isOnSale:'all'}}"><span class="header-news">ОДЕЖДА ДЛЯ ДЕВОЧЕК</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'jackets', brand:'all', gender:'girls', isNew:'all', isOnSale:'all'}}"><span>Верхняя одежда</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'pants', brand:'all', gender:'girls', isNew:'all', isOnSale:'all'}}"><span>Брюки</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'jeans', brand:'all', gender:'girls', isNew:'all', isOnSale:'all'}}"><span>Джинсы</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'hoodies', brand:'all', gender:'girls', isNew:'all', isOnSale:'all'}}"><span>Худи</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'sweatshots', brand:'all', gender:'girls', isNew:'all', isOnSale:'all'}}"><span>Свитшоты</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'longslivs', brand:'all', gender:'girls', isNew:'all', isOnSale:'all'}}"><span>Лонгсливы</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'dresses', brand:'all', gender:'girls', isNew:'all', isOnSale:'all'}}"><span>Платья</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'skirts', brand:'all', gender:'girls', isNew:'all', isOnSale:'all'}}"><span>Юбки</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'shirts', brand:'all', gender:'girls', isNew:'all', isOnSale:'all'}}"><span>Рубашки</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'t-shirts', brand:'all', gender:'girls', isNew:'all', isOnSale:'all'}}"><span>Футболки</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'shorts', brand:'all', gender:'girls', isNew:'all', isOnSale:'all'}}"><span>Шорты</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'socks', brand:'all', gender:'girls', isNew:'all', isOnSale:'all'}}"><span>Носки</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'shoes', type:'all', brand:'all', gender:'girls', isNew:'all', isOnSale:'all'}}"><span class="header-news">ОБУВЬ ДЛЯ ДЕВОЧЕК</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'shoes', type:'snickers', brand:'all', gender:'girls', isNew:'all', isOnSale:'all'}}"><span>Кроссовки и кеды</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'shoes', type:'lowshoes', brand:'all', gender:'girls', isNew:'all', isOnSale:'all'}}"><span>Туфли</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'shoes', type:'boots', brand:'all', gender:'girls', isNew:'all', isOnSale:'all'}}"><span>Ботинки</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'shoes', type:'lofers', brand:'all', gender:'girls', isNew:'all', isOnSale:'all'}}"><span>Лоферы</span></router-link>
          </div>
        </div>
        <div style="padding:0px 25px;">
          <router-link :to="{name: 'Products', params:{category:'accessoires', type:'all', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"><span class="header-news">АКСЕССУАРЫ ДЛЯ МАЛЬЧИКОВ</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'accessoires', type:'headresses', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"><span>Головные уборы</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'accessoires', type:'glasses', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"><span>Очки</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'accessoires', type:'backpacks', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"><span>Рюкзаки</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'accessoires', type:'bags', brand:'all', gender:'boys', isNew:'all', isOnSale:'all'}}"><span>Сумки</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'accessoires', type:'all', brand:'all', gender:'girls', isNew:'all', isOnSale:'all'}}"><span class="header-news">АКСЕССУАРЫ ДЛЯ ДЕВОЧЕК</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'accessoires', type:'headresses', brand:'all', gender:'girls', isNew:'all', isOnSale:'all'}}"><span>Головные уборы</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'accessoires', type:'glasses', brand:'all', gender:'girls', isNew:'all', isOnSale:'all'}}"><span>Очки</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'accessoires', type:'backpacks', brand:'all', gender:'girls', isNew:'all', isOnSale:'all'}}"><span>Рюкзаки</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'accessoires', type:'bags', brand:'all', gender:'girls', isNew:'all', isOnSale:'all'}}"><span>Сумки</span></router-link>
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
  margin-left: -388.08px;
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
