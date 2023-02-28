<script>
  import HeaderPage from '../components/HeaderPage.vue'
  import CategorySection from '../components/CategorySection.vue'
  import CaruselBig from '../components/CaruselBig.vue'
  import CaruselProducts from '../components/CaruselProducts.vue'
  import NewsLetter from '../components/NewsLetter.vue'

  export default {
    components: {
      CategorySection,
      HeaderPage,
      CaruselBig,
      CaruselProducts,
      NewsLetter
    }
  }
</script>

<template>
  <HeaderPage />
  <CategorySection />
  <carusel-big />
  <carusel-products />
  <NewsLetter />
</template>

<style scoped></style>
