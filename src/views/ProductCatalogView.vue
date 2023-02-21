<script>
  import ChildComponent from '../components/SliderDoubleThumbs.vue'

  export default {
    components: {
      ChildComponent
    },
    data() {
      return {
        products: null
      }
    },
    created() {
      fetch('/assets/api.JSON')
        .then((response) => response.json())
        .then((result) => {
          this.products = result
          console.log(result)
        })
    }
  }
</script>

<template>
  <main>
    <p id="page-direction">Hem / Produkter</p>
    <div id="product-intro-image">
      <h2>Produkter för män</h2>
      <h3>25% på utvalda produkter</h3>
    </div>
    <div id="main-products-container">
      <div id="product-selection-container">
        <div class="filter-container">
          <h3 style="margin-top: 0px">Storlek</h3>
          <div class="checkbox-container">
            <input type="checkbox" value="XS" name="size" />
            <label for="sizeXSmall" /> XS
          </div>
          <div class="checkbox-container">
            <input type="checkbox" value="S" name="size" checked />
            <label for="sizeSmall" /> S
          </div>
          <div class="checkbox-container">
            <input type="checkbox" value="M" name="size" />
            <label for="sizeMedium" /> M
          </div>
          <div class="checkbox-container">
            <input type="checkbox" value="L" name="size" />
            <label for="sizeLarge" /> L
          </div>
          <div class="checkbox-container">
            <input type="checkbox" value="XL" name="size" />
            <label for="sizeXLarge" /> XL
          </div>
          <div class="checkbox-container">
            <input type="checkbox" value="XXL" name="size" />
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
      <div class="product-container">
        <div :key="product.id" v-for="product in products" class="product-box">
          <img id="bg-image" alt="" :src="product.image" />
          <div class="align-content-mobile">
            <div class="product-title-rating">
              <div style="display: flex">
                <span
                  v-for="color in product.colors"
                  :key="color"
                  class="color-circle-one"
                  :style="{ backgroundColor: color }"
                />
              </div>
              <img alt="" src="/assets/rating-image.png" /> (32)
            </div>
            <h3 style="margin: 0px">{{ product.name }}</h3>
            <p style="margin-top: 2px">{{ product.category }}</p>
            <h2>{{ product.price }}:-</h2>
          </div>
        </div>
      </div>
    </div>
    <div id="popular-products-container">
      <h2>POPULAR PRODUCTS YO</h2>
    </div>
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
  }

  #page-direction {
    font-size: 1.1rem;
    font-weight: 600;
    color: #424242;
  }

  #product-intro-image {
    /* background-color: #f73f3f; */
    background-color: #579d5d;
    padding-top: 50px;
    padding-left: 45px;
    font-size: 2.5rem;
    height: 350px;
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
  .product-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 82.5%;
  }
  .product-box {
    margin: 0px 25px 25px 25px;
    font-size: 1.1rem;
    /* padding: 5px; */
    transition: all 0.2s;
  }
  .product-box:hover {
    /* background-color: #579d5d7b; */
    /* scale: 1.02; */
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.202);
    border-radius: 5px;
  }
  .product-box img {
    max-width: 300px;
    max-height: 350px;
    width: 250px;
    height: 250px;
    object-fit: cover;
    transition: all 0.4;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  .align-content-mobile {
    padding: 5px;
  }
  .product-title-rating {
    display: flex;
    align-items: center;
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

  #popular-products-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 400px;
    background-color: #579d5d;
  }

  @media (max-width: 1600px) {
    main {
      width: 95%;
    }

    #product-selection-container {
      width: 25%;
    }
    .product-container {
      width: 100%;
    }
    .product-box {
      margin: 0px 10px 25px 10px;
    }
  }

  @media (max-width: 1200px) {
    main {
      width: 95%;
    }
  }

  @media (max-width: 960px) {
    .product-box {
      width: 100%;
      display: flex;
    }

    .product-box img {
      max-height: 175px;
      width: 30%;
      width: 150px;
      height: 150px;
      object-fit: cover;
    }

    .product-title-rating {
      align-items: start;
      justify-content: center;
      align-items: center;
    }

    .product-title-rating img {
      width: 85px;
      height: 30px;
      margin-top: 2px;
      margin-right: 8px;
    }
    .align-content-mobile {
      width: 100%;
      margin-left: 10px;
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
    .product-container {
      margin-top: 20px;
    }
    .align-content-mobile h2 {
      font-size: 1.5rem;
    }
  }
</style>
