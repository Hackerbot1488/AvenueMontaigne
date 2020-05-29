<template>
  <div class="wrap-links">
    <div class="links">
      <div class="wrap-content"
        v-for="(link, index) in links" :key="link.id + index"
        :class="{'wrap-without-margin' : index === 2}"
      >
        <router-link :to="{name: 'ProductInfo', params:{id: link.id, gender: link.gender}}" >
          <div class="content-link">
            <div class="wrap-image">
              <img :src="link.images[0]" alt="123456789" />
            </div>
            <div class="wrap-info">
              <h4>{{link.name}}</h4>
              <p>{{$defenition(link.gender, link.type)}}</p>
              <p class="price">{{ link.priceWithSale | Currency }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="carousel-links">
      <v-carousel
        hide-delimiters
        :show-arrows="false"
        progress
        class="mobile-photo"
        height="100%"
        cycle
        progress-color="#000"
      >
        <v-carousel-item class="wrap-content wrap-without-margin"
          v-for="(link, index) in links" :key="link.id + index"
        >
          <router-link :to="{name: 'ProductInfo', params:{id: link.id, gender: link.gender}}" >
            <div class="content-link">
              <img :src="link.images[0]" alt="123456789" />
              <h4>{{link.name}}</h4>
              <p>{{$defenition(link.gender, link.type)}}</p>
              <p>{{ link.priceWithSale | Currency }}</p>
            </div>
          </router-link>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'startpagelinks',
  props: {
    links: Array
  }
}
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  justify-content: space-between;
  a {
    cursor: pointer;
    text-decoration: none !important;
  }
  a:hover .content-link {
    img {
      opacity: 0.75;
    }
  }
  a:hover {
    text-decoration: none !important;
  }
}
.wrap-content {
  margin-right: 18px;
}
.content-link {
  h4 {
    color: black !important;
    font-size: 16px;
    font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;
    margin-bottom: 3px;
  }
  p {
      color: rgb(75,75,75) !important;
      font-size: 16px;
      font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;
      margin-bottom: 3px;
    }
  img {
      width: 100%;
      height: 100%;
  }
  width: 100%;
}
.price {
  color: black !important;
}
.wrap-without-margin {
  margin-right: 0px !important;
}
.wrap-links {
  width: 100;
  height: 100;
}
.carousel-links {
  display: none;
  a {
    cursor: pointer;
    text-decoration: none !important;
  }
  a:hover {
    text-decoration: none !important;
  }
}
.wrap-info {
  display: flex;
  flex-direction: column;
}
.wrap-image {
  max-width: 462.4px;
  width: 100%;
  max-height: 462.4px;
  background-color: #f3f3f3;
}
@media (max-width: 9192px) {
  .wrap-content {
    width: calc((100% - 36px)/3);
  }
  .wrap-image {
    height: 462.4px;
  }
}
@media (max-width: 1519.2px) {
  .wrap-image {
    height: 100%;
  }
}
@media (max-width: 1262.73px) {
  .wrap-content {
    margin-right: 12px;
    width: calc((100% - 24px)/3);
  }
  .wrap-image {
    min-height: calc((100vw - 64px)/3);
  }
}
@media (max-width: 740px) {
  .links {
    display: none;
  }
  .carousel-links {
    display: block;
  }
  .wrap-content {
    width: 100%;
  }
}
</style>
