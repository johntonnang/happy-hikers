<script>
  import ProductCard from './ProductCard.vue'
  export default {
    components: {
      ProductCard
    },
    data() {
      return {
        // productsList: this.products
      }
    },
    methods: {
      openProduct(id) {
        this.$router.push({
          path: '/ProductView/' + id,
          replace: true
        })
        console.log('hej')
      }
    },
    props: {
      products: { type: Object, default: null }
    }
    // created() {
    //   fetch('/assets/api.JSON')
    //     .then((response) => response.json())
    //     .then((result) => {
    //       this.products = result
    //       console.log(result)
    //     })
    // }
  }
</script>

<template>
  <div class="product-container">
    <product-card
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :img="product.image"
      :name="product.name"
      :category="product.category"
      :price="product.price"
      :colors="product.colors"
    />
  </div>
</template>

<style scoped>
  .product-container {
    display: flex;
    flex-wrap: wrap;
  }
  @media (max-width: 760px) {
    .product-container {
      margin-top: 20px;
    }
  }
  @media (max-width: 1600px) {
    .product-container {
      width: 100%;
    }
  }
</style>
