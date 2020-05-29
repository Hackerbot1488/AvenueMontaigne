<template>
  <div>
    <router-link :to="{name: 'Products', params:{category:'newModelShoes', type:'snickers', brand:'jordan', gender:'all', isNew:'true', isOnSale:'jwnz03'}}" class="wrap-link">
      <figure class="wrap-image-links">
        <div class="wrap-image">
          <v-img
            src="@/assets/images/main-content/content-images/version3.jpg"
            min-height="500"
            class="main-picture"
             />
        </div>
        <figcaption class="wrap-figcaption">
          <div class="wrap-content-figcaption">
            <p>Новые Jordan</p>
            <h1 aria-selected="false">JORDAN WHY NOT ZER0.3</h1>
            <div class="wrap-figcaption-links">
              <router-link :to="{name: 'Products', params:{category:'newModelShoes', type:'snickers', brand:'jordan', gender:'adults', isNew:'true', isOnSale:'jwnz03'}}">Купить</router-link>
              <router-link :to="{name: 'Products', params:{category:'newModelShoes', type:'snickers', brand:'jordan', gender:'kidsAll', isNew:'true', isOnSale:'jwnz03'}}">Для детей</router-link>
            </div>
          </div>
        </figcaption>
      </figure>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.wrap-image-links {
  position: relative;
  .wrap-link {
    cursor: pointer;
  }
}
.wrap-figcaption {
  position: absolute;
  left: 60px;
  bottom: 55px;
}
.wrap-image {
  height: 100%;
  width: 100%;
  background-color: #f3f3f3;
}
.wrap-content-figcaption {
  display: flex;
  flex-direction: column;
  p {
    font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 16px;
    color: white;
    margin-bottom: 3px;
    font-weight: 500;
  }
  h1 {
    font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;
    margin-top: 0;
    color: white;
    font-weight: 900;
    font-size: 36px;
  }
}
.wrap-figcaption-links {
  display: flex;
  a {
    font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 16px;
    background-color: #ffffff;
    color: black;
    padding: 8px 28px;
    text-decoration: none;
    cursor: pointer;
    border-radius: 20px 20px 20px 20px;
    margin: 0 6px 6px 0;
  }
  a:hover {
    /* background-color: rgb(228, 228, 228); */
    opacity: 0.75;
  }
}
.main-picture {
  height: 100%;
  width: 100%;
}
@media (max-width: 1262.73px) {
  .wrap-image img {
    /* width: calc(100vw - 40px); */
    width: 100%;
    height: calc((100vw - 40px)*0.56271656);
  }
}
@media (max-width: 1040px) {
  .wrap-content-figcaption {
    h1 {
      font-size: 30px;
    }
  }
  .wrap-figcaption-links {
    a {
      /* font-size: 12px;
      padding: 6px 21px; */
      margin-left: 0px;
    }
  }
  .wrap-figcaption {
    bottom: 40px;
    left: 40px;
  }
}
@media (max-width: 650px) {
  .wrap-figcaption-links {
    a {
      /* font-size: 8px;
      padding: 4px 14px; */
      margin-left: 0px;
    }
  }
  .wrap-figcaption {
    bottom: 20px;
    left: 25px;
  }
}
@media (max-width: 336px) {
  .wrap-figcaption-links a {
    padding: 8px 24px;
  }
}
@media (max-width: 300px) {
  .wrap-figcaption-links {
    flex-direction: column;
  }
  .wrap-figcaption-links a {
    max-width: 124px;
    text-align: center;
  }
}
</style>
