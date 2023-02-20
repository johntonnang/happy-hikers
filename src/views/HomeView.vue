<script>
  import HeaderPage from '../components/HeaderPage.vue'
  import CategorySection from '../components/CategorySection.vue'
  import CaruselBig from '../components/CaruselBig.vue'
  import CaruselProducts from '../components/CaruselProducts.vue'

  export default {
    components: {
      CategorySection,
      HeaderPage,
      CaruselBig,
      CaruselProducts
    }
  }
</script>

<template>
  <HeaderPage />
  <CategorySection />
  <carusel-big />
  <carusel-products />
</template>

<style scoped></style>
