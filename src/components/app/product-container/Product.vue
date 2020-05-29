<template>
  <div class="wrap-product" :class="{'right-product' : product.right}" >
      <router-link :to="{name: 'ProductInfo', params:{id:product.id, gender:product.gender}}" class="content-link" >
          <div class="wrap-image">
            <img :src="product.images[0]" class="image-product" alt="123456789" />
          </div>
        <div class="wrap-info">
          <h4>{{product.name}}</h4>
          <p>{{this.$defenition(product.gender, product.type)}}</p>
          <p class="price">{{ product.priceWithSale | Currency}}</p>
        </div>
      </router-link>
  </div>
</template>
<script>
export default {
  name: 'Product',
  props: {
    product: Object
  }
}
</script>
<style lang="scss" scoped>
.wrap-product {
  margin-right: 16px;
  max-width: calc((100% - 32px)/3);
  min-width: calc((100% - 32px)/3);
}
.content-link {
  cursor: pointer;
  text-decoration: none;
  h4 {
    color: black;
    font-size: 16px;
    font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;
    margin-left: 5px;
    margin-bottom: 2px;
  }
  p {
      color: rgb(75,75,75);
      font-size: 16px;
      font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;
      margin-left: 5px;
      margin-bottom: 2px;
    }
}
.image-product {
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
}
.price {
  color: black !important;
}
.right-product {
  margin-right: 0px;
}
.wrap-image {
  max-width: 100%;
  min-width: 100%;
  height: 466.73px;
  background-color: #f3f3f3;
  /* background-image: url('placeholder.jpg'); */
}
.wrap-info {
  display: flex;
  flex-direction: column;
}
@media (max-width: 1519.2px) {
  .wrap-image {
    height: calc((100vw - 128px)/3);
  }
}
@media (max-width: 1000px) {
  .wrap-product {
    max-width: calc((100% - 6px)/2);
    min-width: calc((100% - 6px)/2);
    margin-right: 6px;
  }
  .right-product {
    margin-right: 0px;
  }
  .content-link {
    h4 {
      font-size: 14px;
    }
    p {
      font-size: 14px;
    }
  }
  .wrap-image {
    height: calc((100vw - 6px)/2);
  }
}
</style>
