<script>
  export default {
    data() {
      return {
        products: null
      }
    },
    created() {
      fetch('/assets/api.JSON')
        .then((response) => response.json())
        .then((result) => {
          this.products = result
          console.log(result)
        })
    }
  }
</script>

<template>
  <main>
    <p id="page-direction">Hem / Wishlist</p>
    <h1>My Favourites</h1>
    <div id="products-div" :key="product.id" v-for="product in products" />
  </main>
</template>

<style scoped>
  body {
    max-width: 100%;
  }
</style>
