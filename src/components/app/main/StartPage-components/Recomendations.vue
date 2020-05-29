<template>
  <div class="wrap-recomend-content">
    <div class="wrap-figure">
      <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'drmartens', gender:'all', isNew: true, isOnSale:'all'}}" class="wrap-link">
        <figure class="wrap-image-links">
          <div class="wrap-image">
            <img src="@/assets/images/main-content/content-images/DrMartensMan_2.jpg"   alt="Cant find this foto" />
          </div>
          <figcaption class="wrap-figcaption">
            <div class="wrap-content-figcaption">
              <p>Новые модели Dr Martens</p>
              <div class="wrap-figcaption-links">
                <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'drmartens', gender:'all', isNew: true, isOnSale:'all'}}">Купить</router-link>
              </div>
            </div>
          </figcaption>
        </figure>
      </router-link>
    </div>
    <div class="wrap-figure figure-right" >
      <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'supreme', gender:'all', isNew: true, isOnSale:'all'}}" class="wrap-link">
        <figure class="wrap-image-links">
          <div class="wrap-image">
            <img src="@/assets/images/main-content/content-images/SupremeLook_1.jpg"   alt="Cant find this foto" />
          </div>
          <figcaption class="wrap-figcaption">
            <div class="wrap-content-figcaption">
              <p>Весенняя коллекция Supreme</p>
              <div class="wrap-figcaption-links">
                <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'supreme', gender:'all', isNew: true, isOnSale:'all'}}">Купить</router-link>
              </div>
            </div>
          </figcaption>
        </figure>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap-recomend-content {
  display: flex;
  justify-content: space-between;
}
.wrap-image-links {
  position: relative;
  .wrap-link {
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
.wrap-figcaption {
  position: absolute;
  left: 48px;
  bottom: 48px;
}
.wrap-figure {
  margin-right: 27px;
}
.figure-right {
  margin: 0px !important;
}
.wrap-content-figcaption {
  display: flex;
  flex-direction: column;
  p {
    font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 20px;
    color: white;
    margin-bottom: 20px;
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
    opacity: 0.75;
  }
}
@media (max-width: 1262.73px) {
  .wrap-figure {
    margin-right: 18px;
  }
  .wrap-figcaption {
    left: 24px;
    bottom: 24px;
  }
  .wrap-content-figcaption p {
    margin-bottom: 10px;
  }
}
@media (max-width: 740px) {
  .wrap-recomend-content {
    flex-direction: column;
  }
  .wrap-figure {
    margin-right: 0;
    margin-bottom: 10px;
  }
  .wrap-figcaption {
    left: 24px;
    bottom: 24px;
  }
}
</style>
