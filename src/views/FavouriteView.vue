<script>
  import FavouriteSection from '../components/FavouriteSection.vue'
  import CaruselBig from '../components/CaruselBig.vue'
  // import CaruselProducts from '../components/CaruselProducts.vue'

  export default {
    components: {
      FavouriteSection,
      CaruselBig
      // CaruselProducts
    }
  }
</script>

<template>
  <FavouriteSection />
  <carusel-big style="position: relative; top: 100px" />
  <!-- <carusel-products />  -->
</template>
