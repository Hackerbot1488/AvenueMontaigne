<template>
    <div class="dropdown">
      <router-link to="/develop" class="dropbtn"><span>Помощь</span></router-link>
      <div class="dropdown-content">
        <br/>
        <router-link to="/develop">Статус заказа</router-link>
        <router-link to="/develop">Отправка и доставка</router-link>
        <router-link to="/develop">Возврат</router-link>
        <router-link to="/develop">Связаться с нами</router-link>
        <br/>
      </div>
    </div>
</template>

<script>
export default {
  name: 'DropHelp'
}
</script>
<style lang="scss" scoped>
/* Dropdown Button */
.dropbtn {
  color: rgb(116, 114, 114);
  background-color: white;
  padding: 13px 25px;
  border: none;
  border-left: 0.5px solid #ccc;
  display: block;
  cursor: pointer;
  text-decoration: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
}
/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: fixed;
  background-color: #ffffff;
  margin: auto;
  margin-left: -36.5px;
  max-width: 170px;
  z-index: 10000;
  border:0.5px solid #c1c4be;
  a {
    text-decoration: none;
  }
}

/* Links inside the dropdown */
.dropdown-content a {
  color: grey;
  padding: 5px 25px;
  text-align: left;
  display:block;
}
/* Change color of dropdown links on hover */
.dropdown-content a:hover {color:black;}

.dropbtn:hover {
  text-decoration: underline;
}
/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  color:black;
}

</style>
