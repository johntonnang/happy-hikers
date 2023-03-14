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
      <div class="carousel-item active" data-bs-interval="4000">
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
    transition: all 0.35s ease-in-out;
  }

  .explore-button:hover {
    color: #ffffffa1;
  }

  #carouselExampleSlidesOnly {
    overflow: hidden;
    height: 550px;
    width: 85%;
    margin: 2rem auto;
    transition: all 0.35s ease-in-out;
    border-radius: 5px;
  }

  #carouselExampleSlidesOnly:hover {
    /* box-shadow: 0 0 40px rgba(2, 84, 44, 0.594); */
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.202);
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

  @media (min-width: 1051px) and (max-width: 1500px) {
    .explore-button {
      /* font-size: 90px; */
      font-size: 5rem;
      /* margin-top: 20%; */
    }
  }

  @media (min-width: 901px) and (max-width: 1050px) {
    .explore-button {
      /* font-size: 80px; */
      font-size: 5rem;
      /* margin-top: 20%; */
    }
  }

  @media (min-width: 781px) and (max-width: 900px) {
    .explore-button {
      /* font-size: 70px; */
      font-size: 5rem;
      /* margin-top: 20%; */
    }
  }

  @media (min-width: 651px) and (max-width: 780px) {
    .explore-button {
      /* font-size: 65px; */
      font-size: 4rem;
      /* margin-top: 20%; */
    }
  }

  /* @media screen and (max-width: 700px) { */
  @media (min-width: 551px) and (max-width: 650px) {
    .explore-button {
      /* font-size: 60px; */
      font-size: 4rem;
      /* margin-top: 20%; */
    }
  }

  /* @media screen and (max-width: 600px) { */
  @media (min-width: 471px) and (max-width: 550px) {
    .explore-button {
      /* font-size: 50px; */
      font-size: 3rem;
      /* margin-top: 20%; */
    }
  }

  /* 760px */
  /* 700 */
  /* @media screen and (max-width: 470px) { */
  @media (min-width: 375px) and (max-width: 470px) {
    #carouselExampleSlidesOnly {
      height: 100%;
    }

    .explore-button {
      font-size: 40px;
      /* margin-top: 20%; */
    }
  }
</style>
