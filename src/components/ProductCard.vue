<script>
  export default {
    name: 'ProductCard',
    props: {
      id: { type: Number, required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      img: { type: String, required: true },
      category: { type: String, required: true },
      colors: { type: Object, required: true }
    },
    methods: {
      openProduct(id) {
        this.$router.push({
          path: '/ProductView/' + id,
          replace: true
        })
        console.log('hej')
      }
    }
  }
</script>

<template>
  <div
    v-if="
      this.category.toLowerCase() === this.$route.params.category.toLowerCase()
    "
    class="product-box"
    @click="openProduct(this.id)"
  >
    <img id="bg-image" alt="" :src="img" />
    <div class="align-content-mobile">
      <div class="product-title-rating">
        <div style="display: flex">
          <!--  <span
              v-for="color in product.colors"
              :key="color"
              class="color-circle-one"
              :style="{ backgroundColor: color }"
            /> -->
        </div>
        <!--<img alt="" src="/assets/rating-image.png" /> (32)-->
      </div>
      <h3 style="margin: 0px">{{ name }}</h3>
      <p style="margin-top: 2px">{{ category }}</p>
      <h2>{{ price }}:-</h2>
    </div>
  </div>
</template>

<style scoped>
  .align-content-mobile {
    padding: 5px;
  }
  .product-title-rating {
    display: flex;
    align-items: center;
  }
  .product-title-rating img {
    margin: 4px 0px 0px auto;
    width: 80px;
    height: 20px;
  }
  .product-box {
    margin: 0px 25px 25px 25px;
    font-size: 1.1rem;
    transition: all 0.2s;
  }
  .product-box:hover {
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.202);
    border-radius: 5px;
  }
  .product-box img {
    max-width: 300px;
    max-height: 350px;
    width: 250px;
    height: 250px;
    object-fit: cover;
    transition: all 0.4;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  .product-box h2 {
    font-size: 2.2rem;
    margin-bottom: 0px;
  }

  @media (max-width: 760px) {
    align-content-mobile h2 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 960px) {
    .align-content-mobile {
      width: 100%;
      margin-left: 10px;
    }
    .product-title-rating {
      align-items: start;
      justify-content: center;
      align-items: center;
    }
    .product-title-rating img {
      width: 85px;
      height: 30px;
      margin-top: 2px;
      margin-right: 8px;
    }
    .product-box {
      width: 100%;
      display: flex;
    }
    .product-box img {
      max-width: 300px;
      max-height: 350px;
      width: 250px;
      height: 250px;
      object-fit: cover;
      transition: all 0.4;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
    }
  }
</style>
