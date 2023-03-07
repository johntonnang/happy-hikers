<script>
  import ShoppingCart from '../components/ShoppingCart.vue'

  export default {
    components: {
      ShoppingCart
    }
  }
</script>

<template>
  <main>
    <shopping-cart />
  </main>
</template>

<style scoped>
  main {
    position: relative;
    top: 100px;
    width: 100%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    margin-bottom: 8rem;
  }
</style>
