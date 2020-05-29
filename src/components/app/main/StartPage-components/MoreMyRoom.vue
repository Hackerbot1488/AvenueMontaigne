<template>
  <div class="wrap-content">
    <div class="avenue-content-desktop">
      <div class="wrap-figure">
        <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'male', isNew: 'all', isOnSale:'all'}}" class="wrap-link">
          <figure class="wrap-image-links">
            <div class="wrap-image">
              <img src="@/assets/images/main-content/content-images/ManStyleDrMartens.jpg"   alt="Cant find this foto" />
            </div>
            <figcaption class="wrap-figcaption">
              <div class="wrap-content-figcaption">
                <div class="wrap-figcaption-links">
                  <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'male', isNew: 'all', isOnSale:'all'}}">Для мужчин</router-link>
                </div>
              </div>
            </figcaption>
          </figure>
        </router-link>
      </div>
      <div class="wrap-figure">
        <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'female', isNew: 'all', isOnSale:'all'}}" class="wrap-link">
          <figure class="wrap-image-links">
            <div class="wrap-image">
              <img src="@/assets/images/main-content/content-images/GirlDrMartens_3.jpg"   alt="Cant find this foto" />
            </div>
            <figcaption class="wrap-figcaption">
              <div class="wrap-content-figcaption">
                <div class="wrap-figcaption-links">
                  <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'female', isNew: 'all', isOnSale:'all'}}">Для женщин</router-link>
                </div>
              </div>
            </figcaption>
          </figure>
        </router-link>
      </div>
      <div class="wrap-figure right-figure">
        <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'kidsAll', isNew: 'all', isOnSale:'all'}}" class="wrap-link">
          <figure class="wrap-image-links">
            <div class="wrap-image">
              <img src="@/assets/images/main-content/content-images/Kids.jpg"  alt="Cant find this foto" />
            </div>
            <figcaption class="wrap-figcaption">
              <div class="wrap-content-figcaption">
                <div class="wrap-figcaption-links">
                  <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'kidsAll', isNew: 'all', isOnSale:'all'}}">Для детей</router-link>
                </div>
              </div>
            </figcaption>
          </figure>
        </router-link>
      </div>
    </div>
    <div class="avenue-content-mobile">
      <v-carousel
        hide-delimiters
        :show-arrows="false"
        progress
        class="mobile-photo"
        height="100%"
        cycle
        progress-color="#000"
      >
        <v-carousel-item class="wrap-figure right-figure">
          <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'male', isNew: 'all', isOnSale:'all'}}" class="wrap-link">
            <figure class="wrap-image-links">
              <div class="wrap-image">
                <img src="@/assets/images/main-content/content-images/ManStyleDrMartens.jpg"   alt="Cant find this foto" />
              </div>
              <figcaption class="wrap-figcaption">
                <div class="wrap-content-figcaption">
                  <div class="wrap-figcaption-links">
                    <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'male', isNew: 'all', isOnSale:'all'}}">Для мужчин</router-link>
                  </div>
                </div>
              </figcaption>
            </figure>
          </router-link>
        </v-carousel-item>
        <v-carousel-item class="wrap-figure right-figure">
          <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'female', isNew: 'all', isOnSale:'all'}}" class="wrap-link">
            <figure class="wrap-image-links">
              <div class="wrap-image">
                <img src="@/assets/images/main-content/content-images/GirlDrMartens_3.jpg"   alt="Cant find this foto" />
              </div>
              <figcaption class="wrap-figcaption">
                <div class="wrap-content-figcaption">
                  <div class="wrap-figcaption-links">
                    <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'female', isNew: 'all', isOnSale:'all'}}">Для женщин</router-link>
                  </div>
                </div>
              </figcaption>
            </figure>
          </router-link>
        </v-carousel-item>
        <v-carousel-item class="wrap-figure right-figure">
          <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'kidsAll', isNew: 'all', isOnSale:'all'}}" class="wrap-link">
            <figure class="wrap-image-links">
              <div class="wrap-image">
                <img src="@/assets/images/main-content/content-images/Kids.jpg"  alt="Cant find this foto" />
              </div>
              <figcaption class="wrap-figcaption">
                <div class="wrap-content-figcaption">
                  <div class="wrap-figcaption-links">
                    <router-link :to="{name: 'Products', params:{category:'all', type:'all', brand:'all', gender:'kidsAll', isNew: 'all', isOnSale:'all'}}">Для детей</router-link>
                  </div>
                </div>
              </figcaption>
            </figure>
          </router-link>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap-content {
  width: 100%;
  height: 100%;
}
.avenue-content-desktop {
  display: flex;
  justify-content: space-between;
}
.avenue-content-mobile {
  display: none;
  width: 100%;
  height: 100%;
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
.wrap-figure {
  margin-right: 13px;
}
.wrap-figcaption {
  position: absolute;
  left: 48px;
  bottom: 48px;
}
.wrap-content-figcaption {
  display: flex;
  flex-direction: column;
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
.right-figure {
  margin-right: 0px;
}
@media (max-width: 1262.73px) {
  .wrap-figcaption {
    left: 24px;
    bottom: 24px;
  }
}
@media (max-width: 740px) {
  .avenue-content-desktop {
    display: none;
  }
  .avenue-content-mobile {
    display: block;
  }
}
</style>
