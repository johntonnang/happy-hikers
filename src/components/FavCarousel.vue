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
  <carousel :items-to-show="3.5" :wrap-around="true">
    <slide :key="1">
      <img src="/assets/white.orange.shoe.jpg" alt="white running shoe" />
    </slide>
    <slide :key="2">
      <img src="/assets/black.shoe.jpg" alt="black running shoe" />
    </slide>
    <slide :key="3">
      <img src="/assets/shoe.jpg" alt="running shoe" />
    </slide>
    <slide :key="4">
      <img src="/assets/shoe.jpg" alt="running shoe" />
    </slide>
    <slide :key="5">
      <img src="/assets/shoe.jpg" alt="running shoe" />
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<style scoped>
  img {
    width: 90%;
    margin: auto;
  }
</style>
