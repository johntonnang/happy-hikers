<script>
  import ProductList from '../components/ProductList.vue'
  import ChildComponent from '../components/SliderDoubleThumbs.vue'
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

  export default {
    data() {
      return {
        XS: false,
        S: false,
        M: false,
        L: false,
        XL: false,
        XXL: false,
        products: null,
        category: this.$route.params.category
      }
    },
    components: {
      ChildComponent,
      Carousel,
      Slide,
      ProductList,
      Pagination,
      Navigation
    },
    watch: {
      $route() {
        console.log('hej')
        fetch('/assets/api.json')
          .then((response) => response.json())
          .then((response) => {
            this.products = response
            for (let i = 0; i < this.products.length; i++) {
              if (this.products[i].category === this.searchID) {
                this.products = this.products[i]
              }
            }
          })
      }
    },
    created() {
      fetch('/assets/api.JSON')
        .then((response) => response.json())
        .then((result) => {
          this.products = result
          console.log(result)
        })
    },
    methods: {
      filterSize() {},
      searchResult() {
        for (let i = 0; i < this.products.length; i++) {
          if (this.searchID === this.products[i].category) {
            this.productsSearch.push(this.products[i])
          }
        }
      }
    }
  }
</script>

<template>
  <main>
    <p id="page-direction">Hem / Produkter</p>
    <img
      id="product-intro-image"
      src="/assets/roland-losslein-X7Res52lR3c-unsplash.jpg"
      alt=""
    />
    <div id="main-products-container">
      <div id="product-selection-container">
        <div class="filter-container">
          <h3 style="margin-top: 0px">Storlek</h3>

          <div class="checkbox-container">
            <input v-model="XS" type="checkbox" value="XS" name="size" />
            <label for="sizeXSmall" /> XS
          </div>
          <div class="checkbox-container">
            <input v-model="S" type="checkbox" value="S" name="size" checked />
            <label for="sizeSmall" /> S
          </div>
          <div class="checkbox-container">
            <input v-model="M" type="checkbox" value="M" name="size" />
            <label for="sizeMedium" /> M
          </div>
          <div class="checkbox-container">
            <input v-model="L" type="checkbox" value="L" name="size" />
            <label for="sizeLarge" /> L
          </div>
          <div class="checkbox-container">
            <input v-model="XL" type="checkbox" value="XL" name="size" />
            <label for="sizeXLarge" /> XL
          </div>
          <div class="checkbox-container">
            <input v-model="XXL" type="checkbox" value="XXL" name="size" />
            <label for="sizeXXLarge" /> XXL
          </div>
        </div>
        <div
          class="filter-container filter-container-mobile"
          style="margin-bottom: 20px"
        >
          <h3>Pris</h3>
          <ChildComponent />
        </div>
        <div class="filter-container">
          <h3>Färg</h3>
          <div class="checkbox-container">
            <input type="checkbox" value="blue" name="color" />
            <label for="sizeXSmall" /> Blue
          </div>
          <div class="checkbox-container">
            <input type="checkbox" value="red" name="color" checked />
            <label for="sizeSmall" /> Red
          </div>
          <div class="checkbox-container">
            <input type="checkbox" value="green" name="color" />
            <label for="sizeMedium" /> Green
          </div>
          <div class="checkbox-container">
            <input type="checkbox" value="yellow" name="color" />
            <label for="sizeLarge" /> Yellow
          </div>
          <div class="checkbox-container">
            <input type="checkbox" value="black" name="color" />
            <label for="sizeXLarge" /> Black
          </div>
          <div class="checkbox-container">
            <input type="checkbox" value="white" name="color" />
            <label for="sizeXXLarge" /> White
          </div>
        </div>
      </div>

      <product-list :products="this.products" />
    </div>

    <carousel class="carousel-container" :items-to-show="3" :wrap-around="true">
      <slide :key="101">
        <img src="/assets/hiking-jacket-man-1.png" alt="" />
        <button class="explore-btn">Explore</button>
      </slide>
      <slide :key="102">
        <img src="/assets/hiking-jacket-man-2.png" alt="" />
        <button class="explore-btn">Explore</button>
      </slide>
      <slide :key="103">
        <img src="/assets/hiking-pants-man-1.png" alt="" />
        <button class="explore-btn">Explore</button>
      </slide>
      <slide :key="104">
        <img src="/assets/hiking-pants-man-2.png" alt="" />
        <button class="explore-btn">Explore</button>
      </slide>
      <slide :key="105">
        <img src="/assets/hiking-boots-man-1.png" alt="" />
        <button class="explore-btn">Explore</button>
      </slide>
      <slide :key="106">
        <img src="/assets/hiking-boots-man-2.png" alt="" />
        <button class="explore-btn">Explore</button>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </main>
</template>

<style scoped>
  main {
    position: relative;
    top: 100px;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0;
    width: 80%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    position: relative;
    top: 100px;
  }

  #page-direction {
    font-size: 1.1rem;
    font-weight: 600;
    color: #424242;
  }

  #product-intro-image {
    font-size: 2.5rem;
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 5px;
  }

  #main-products-container {
    display: flex;
    margin-top: 30px;
  }

  #product-selection-container {
    width: 17.5%;
    height: 100%;
    position: sticky;
    top: 0;
    left: 0;
  }

  .checkbox-container {
    color: #424242;
    font-weight: 600;
    margin-bottom: 5px;
  }

  .filter-container {
    margin-bottom: 30px;
  }

  .filter-container h3 {
    border-bottom: 1px solid black;
    padding-bottom: 5px;
    font-weight: 600;
  }

  .filter-selection {
    color: #424242;
    font-weight: 400;
  }
  .product-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 82.5%;
  }

  .align-content-mobile {
    padding: 5px;
  }

  .color-circle-one,
  .color-circle-two,
  .color-circle-three,
  .color-circle-four {
    display: block;
    width: 8px;
    height: 8px;
    background-color: black;
    border-radius: 50px;
    margin-right: 8px;
  }

  .color-circle-two {
    background-color: red;
  }

  .color-circle-three {
    background-color: rgb(33, 248, 13);
  }
  .color-circle-four {
    background-color: rgb(13, 17, 248);
  }
  .product-title-rating img {
    margin: 4px 0px 0px auto;
    width: 80px;
    height: 20px;
  }

  .product-box h2 {
    font-size: 2.2rem;
    margin-bottom: 0px;
  }
  .carousel-container {
    margin: 20px auto 170px auto;
    width: 90%;
  }
  .carousel-container img {
    max-width: 70%;
    object-fit: cover;
    position: relative;
    top: 0;
    left: 0;
    transition: box-shadow 0.2s ease-in-out;
  }
  .carousel-container img:hover {
    box-shadow: 0px 0px 42px rgba(0, 0, 0, 1);
    cursor: pointer;
    opacity: 1;
  }
  .explore-btn {
    position: absolute;
    top: 1;
    left: 1;
    background-color: rgb(255, 255, 255);
    color: black;
    border: none;
    padding: 8px 25px;
    font-weight: 600;
    font-size: 15px;
    border-radius: 2px;
  }
  .explore-btn:hover {
    cursor: pointer;
  }

  .carousel__pagination {
    padding: 0;
    margin-top: 25px;
  }

  .carousel__slide {
    padding: 55px 0px;
  }

  @media (max-width: 1600px) {
    main {
      width: 95%;
    }

    #product-selection-container {
      width: 25%;
    }
  }

  @media (max-width: 1200px) {
    main {
      width: 95%;
    }
  }

  @media (max-width: 760px) {
    #main-products-container {
      display: block;
    }

    .filter-container-mobile {
      width: 40%;
      text-align: center;
    }

    #product-intro-image {
      padding-top: 5px;
      padding-left: 5px;
      font-size: 2rem;
    }

    #product-selection-container {
      width: 100%;
      display: flex;
      justify-content: space-around;
      position: static;
    }
    .filter-container h3 {
      margin-top: 0px;
    }
  }
</style>
