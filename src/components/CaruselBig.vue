<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap/dist/js/bootstrap.js'

  export default {
    data() {
      return {}
    }
  }
</script>

<template>
  <div
    id="carouselExampleSlidesOnly"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="/assets/kalen-emsley-fUNTOGILNa0-unsplash.jpg"
          class="d-block w-100 d-flex justify-content-center align-middle"
          alt="hiker in nature"
        />
      </div>
      <div class="carousel-item">
        <img
          src="/assets/hiking.nature.jpg"
          class="d-block w-100"
          alt="hiking in mountain"
        />
      </div>
      <div class="carousel-item">
        <img
          src="/assets/cold.nature.hikers.jpg"
          class="d-block w-100"
          alt="hikers in mountain"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  #carouselExampleSlidesOnly {
    overflow: hidden;
    height: 550px;
    width: 85%;
    margin: 2rem auto;
  }

  @media screen and (max-width: 1300px) {
    #carouselExampleSlidesOnly {
      height: 400px;
    }
  }

  @media screen and (max-width: 960px) {
    #carouselExampleSlidesOnly {
      overflow: hidden;
      height: 400px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }

  @media screen and (max-width: 760px) {
    #carouselExampleSlidesOnly {
      height: 100%;
    }
  }
</style>
