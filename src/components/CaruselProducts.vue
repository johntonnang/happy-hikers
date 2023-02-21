<script>
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

  export default {
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation
    },
    data() {
      return {}
    }
  }
</script>

<template>
  <div class="categoriesText">
    <h1>RUNNING SHOES</h1>
  </div>

  <carousel :items-to-show="2.5" :wrap-around="true">
    <slide :key="1">
      <img src="/assets/white.orange.shoe.jpg" alt="white running shoe" />
    </slide>
    <slide :key="2">
      <img src="/assets/black.shoe.jpg" alt="black running shoe" />
    </slide>
    <slide :key="3">
      <img src="/assets/shoe.jpg" alt="running shoe" />
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<style scoped>
  .categoriesText {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
  }

  img {
    width: 80%;
    margin: auto;
  }
</style>
