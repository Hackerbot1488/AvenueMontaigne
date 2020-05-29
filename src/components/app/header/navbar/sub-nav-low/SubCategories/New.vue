<template>
    <div class="dropdown">
      <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'all', isNew:true, isOnSale:'all'}}" class="dropbtn"><span class="cat-pan-head">НОВИНКИ</span></router-link>
      <div class="dropdown-content">
        <div style="padding:0px 25px;">
          <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'all', isNew:true, isOnSale:'all'}}"><span class="header-news">ВСЕ НОВИНКИ</span></router-link>
          <!-- <a :to="{name: 'Products', params:{fetch:newAll}}"><span class="header-news">БЕСТСЕЛЛЕРЫ</span></a> -->
          <!-- <a :to="{name: 'Products', params:{fetch:newAll}}"><span class="header-news">ОБРАЗЫ</span></a> -->
        </div>
        <div class="wrap-news">
          <div style="padding:0px 25px;">
            <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'male', isNew:true, isOnSale:'all'}}"><span class="header-news">НОВИНКИ ДЛЯ МУЖЧИН</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'shoes', type:'all', brand:'all', gender:'male', isNew:true, isOnSale:'all'}}"><span>Обувь</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'all', brand:'all', gender:'male', isNew:true, isOnSale:'all'}}"><span>Одежда</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'accessoires', type:'all', brand:'all', gender:'male', isNew:true, isOnSale:'all'}}"><span>Аксессуары</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'male', isNew:true, isOnSale:'all'}}"><span>Все новинки</span></router-link>
          </div>
          <div style="padding:0px 25px;">
            <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'female', isNew:true, isOnSale:'all'}}"><span class="header-news">НОВИНКИ ДЛЯ ЖЕНЩИН</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'shoes', type:'all', brand:'all', gender:'female', isNew:true, isOnSale:'all'}}"><span>Обувь</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'clothes', type:'all', brand:'all', gender:'female', isNew:true, isOnSale:'all'}}"><span>Одежда</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'accessoires', type:'all', brand:'all', gender:'female', isNew:true, isOnSale:'all'}}"><span>Аксессуары</span></router-link>
            <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'female', isNew:true, isOnSale:'all'}}"><span>Все новинки</span></router-link>
          </div>
        </div>
        <div style="padding:0px 25px;">
          <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'kidsAll', isNew:true, isOnSale:'all'}}"><span class="header-news">НОВИНКИ ДЛЯ ДЕТЕЙ</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'shoes', type:'all', brand:'all', gender:'boys', isNew:true, isOnSale:'all'}}"><span>Обувь для мальчиков</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'clothes', type:'all', brand:'all', gender:'boys', isNew:true, isOnSale:'all'}}"><span>Одежда для мальчиков</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'shoes', type:'all', brand:'all', gender:'girls', isNew:true, isOnSale:'all'}}"><span>Обувь для девочек</span></router-link>
          <router-link :to="{name: 'Products', params:{category:'clothes', type:'all', brand:'all', gender:'girls', isNew:true, isOnSale:'all'}}"><span>Одежда для девочек</span></router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'DropTest',
  data () {
    return {
      newAll: {
        isNew: true
      },
      newManClothes: {
        gender: 'male',
        isNew: true,
        category: 'clothes'
      },
      newManShoes: {
        gender: 'male',
        isNew: true,
        category: 'shoes'
      },
      newManAccessoires: {
        gender: 'male',
        isNew: true,
        category: 'accessoires'
      },
      newMan: {
        gender: 'male',
        isNew: true
      },
      newWomanClothes: {
        gender: 'female',
        isNew: true,
        category: 'clothes'
      },
      newWomanShoes: {
        gender: 'female',
        isNew: true,
        category: 'shoes'
      },
      newWomanAccessoires: {
        gender: 'female',
        isNew: true,
        category: 'accessoires'
      },
      newWoman: {
        gender: 'female',
        isNew: true
      },
      newKidsClothes: {
        gender: 'kids',
        isNew: true,
        category: 'clothes'
      },
      newKidsShoes: {
        gender: 'kids',
        isNew: true,
        category: 'shoes'
      },
      newKids: {
        gender: 'kids',
        isNew: true
      }
    }
  }
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
  padding: 30px 20px 30px 20px;
  border:0.5px solid #c1c4be;
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
