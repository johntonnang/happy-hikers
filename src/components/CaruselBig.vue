<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap/dist/js/bootstrap.js'

  export default {
    data() {
      return {}
    },
    methods: {
      navigateToProducts() {
        this.$router.push('/ProductCatalog/')
      }
    }
  }
</script>

<template>
  <div
    id="carouselExampleSlidesOnly"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="button-container">
      <button @click="navigateToProducts" class="explore-button">
        Explore products
      </button>
    </div>
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
  img {
    border-radius: 5px;
  }

  .button-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .explore-button {
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 5;
    font-size: 6rem;
    background: none;
    border: none;
    color: #ffffff48;
    transition: all 0.3s ease-in-out;
  }

  .explore-button:hover {
    color: #ffffffa1;
  }

  #carouselExampleSlidesOnly {
    overflow: hidden;
    height: 550px;
    width: 85%;
    margin: 2rem auto;
    transition: all 0.3s ease-in-out;
    border-radius: 5px;
  }

  #carouselExampleSlidesOnly:hover {
    box-shadow: 0 0 40px rgba(2, 84, 44, 0.594);
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
