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
    <h1>OUTDOOR GEAR</h1>
  </div>

  <carousel :items-to-show="3" :wrap-around="true">
    <slide :key="1">
      <img src="/assets/hiking-boots-man-1.png" alt="white running shoe" />
    </slide>
    <slide :key="2">
      <img src="/assets/hiking-pants-man-2.png" alt="black running shoe" />
    </slide>
    <slide :key="3">
      <img src="/assets/hiking-jacket-man-1.png" alt="running shoe" />
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

  .carousel {
    width: 85%;
    margin: 0 auto;
  }

  .carousel__track {
    padding: 100px;
  }

  .carousel__pagination {
    padding: 0;
    margin-top: 25px;
  }

  img {
    width: 100%;
    margin-right: 50px;
    margin-left: 50px;
  }

  svg {
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 960px) {
    img {
      margin-right: 5px;
      margin-left: 5px;
    }
  }
</style>
