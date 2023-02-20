<script>
  export default {
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
        <h3 style="margin-top: 0px">Storlek</h3>
        <h4 class="filter-selection">S</h4>
        <h4 class="filter-selection">M</h4>
        <h4 class="filter-selection">L</h4>
        <h3>Pris</h3>
        <h4 class="filter-selection">0-499</h4>
        <h4 class="filter-selection">500-999</h4>
        <h4 class="filter-selection">1000-1499</h4>
        <h3>Färg</h3>
        <h4 class="filter-selection">Blå</h4>
        <h4 class="filter-selection">Röd</h4>
        <h4 class="filter-selection">Grön</h4>
      </div>
      <div class="product-container">
        <div :key="product.id" v-for="product in products" class="product-box">
          <img id="bg-image" alt="" :src="product.image" />
          <div class="align-content-mobile">
            <div class="product-title-rating">
              <div style="display: flex">
                <span class="color-circle-one" />
                <span class="color-circle-two" />
                <span class="color-circle-three" />
                <span class="color-circle-four" />
              </div>
              <img alt="" src="/assets/rating-image.png" /> (32)
            </div>
            <h3 style="margin: 0px">{{ product.name }}</h3>
            <p style="margin-top: 2px">{{ product.category }}</p>
            <h2 style="font-size: 2.2rem">{{ product.price }}:-</h2>
          </div>
        </div>
        <div class="product-box">
          <img id="bg-image" alt="" src="/assets/product-case.jpg" />
          <div class="align-content-mobile">
            <div class="product-title-rating">
              <div style="display: flex">
                <span class="color-circle-one" />
                <span class="color-circle-two" />
                <span class="color-circle-three" />
                <span class="color-circle-four" />
              </div>
              <img alt="" src="/assets/rating-image.png" /> (32)
            </div>
            <h3 style="margin: 0px">En produkt</h3>
            <p style="margin-top: 2px">Plånbok för mobil</p>
            <h2 style="font-size: 2.2rem">499:-</h2>
          </div>
        </div>
        <div class="product-box">
          <img id="bg-image" alt="" src="/assets/product-case.jpg" />
          <div class="align-content-mobile">
            <div class="product-title-rating">
              <div style="display: flex">
                <span class="color-circle-one" />
                <span class="color-circle-two" />
                <span class="color-circle-three" />
                <span class="color-circle-four" />
              </div>
              <img alt="" src="/assets/rating-image.png" /> (32)
            </div>
            <h3 style="margin: 0px">En produkt</h3>
            <p style="margin-top: 2px">Plånbok för mobil</p>
            <h2 style="font-size: 2.2rem">499:-</h2>
          </div>
        </div>
        <div class="product-box">
          <img id="bg-image" alt="" src="/assets/product-case.jpg" />
          <div class="align-content-mobile">
            <div class="product-title-rating">
              <div style="display: flex">
                <span class="color-circle-one" />
                <span class="color-circle-two" />
                <span class="color-circle-three" />
                <span class="color-circle-four" />
              </div>
              <img alt="" src="/assets/rating-image.png" /> (32)
            </div>
            <h3 style="margin: 0px">En produkt</h3>
            <p style="margin-top: 2px">Plånbok för mobil</p>
            <h2 style="font-size: 2.2rem">499:-</h2>
          </div>
        </div>
        <div class="product-box">
          <img id="bg-image" alt="" src="/assets/product-case.jpg" />
          <div class="align-content-mobile">
            <div class="product-title-rating">
              <div style="display: flex">
                <span class="color-circle-one" />
                <span class="color-circle-two" />
                <span class="color-circle-three" />
                <span class="color-circle-four" />
              </div>
              <img alt="" src="/assets/rating-image.png" /> (32)
            </div>
            <h3 style="margin: 0px">En produkt</h3>
            <p style="margin-top: 2px">Plånbok för mobil</p>
            <h2 style="font-size: 2.2rem">499:-</h2>
          </div>
        </div>
        <div class="product-box">
          <img id="bg-image" alt="" src="/assets/product-case.jpg" />
          <div class="align-content-mobile">
            <div class="product-title-rating">
              <div style="display: flex">
                <span class="color-circle-one" />
                <span class="color-circle-two" />
                <span class="color-circle-three" />
                <span class="color-circle-four" />
              </div>
              <img alt="" src="/assets/rating-image.png" /> (32)
            </div>
            <h3 style="margin: 0px">En produkt</h3>
            <p style="margin-top: 2px">Plånbok för mobil</p>
            <h2 style="font-size: 2.2rem">499:-</h2>
          </div>
        </div>
        <div class="product-box">
          <img id="bg-image" alt="" src="/assets/product-case.jpg" />
          <div class="align-content-mobile">
            <div class="product-title-rating">
              <div style="display: flex">
                <span class="color-circle-one" />
                <span class="color-circle-two" />
                <span class="color-circle-three" />
                <span class="color-circle-four" />
              </div>
              <img alt="" src="/assets/rating-image.png" /> (32)
            </div>
            <h3 style="margin: 0px">En produkt</h3>
            <p style="margin-top: 2px">Plånbok för mobil</p>
            <h2 style="font-size: 2.2rem">499:-</h2>
          </div>
        </div>
        <div class="product-box">
          <img id="bg-image" alt="" src="/assets/product-case.jpg" />
          <div class="align-content-mobile">
            <div class="product-title-rating">
              <div style="display: flex">
                <span class="color-circle-one" />
                <span class="color-circle-two" />
                <span class="color-circle-three" />
                <span class="color-circle-four" />
              </div>
              <img alt="" src="/assets/rating-image.png" /> (32)
            </div>
            <h3 style="margin: 0px">En produkt</h3>
            <p style="margin-top: 2px">Plånbok för mobil</p>
            <h2 style="font-size: 2.2rem">499:-</h2>
          </div>
        </div>
        <div class="product-box">
          <img id="bg-image" alt="" src="/assets/product-case.jpg" />
          <div class="align-content-mobile">
            <div class="product-title-rating">
              <div style="display: flex">
                <span class="color-circle-one" />
                <span class="color-circle-two" />
                <span class="color-circle-three" />
                <span class="color-circle-four" />
              </div>
              <img alt="" src="/assets/rating-image.png" /> (32)
            </div>
            <h3 style="margin: 0px">En produkt</h3>
            <p style="margin-top: 2px">Plånbok för mobil</p>
            <h2 style="font-size: 2.2rem">499:-</h2>
          </div>
        </div>
        <div class="product-box">
          <img id="bg-image" alt="" src="/assets/product-case.jpg" />
          <div class="align-content-mobile">
            <div class="product-title-rating">
              <div style="display: flex">
                <span class="color-circle-one" />
                <span class="color-circle-two" />
                <span class="color-circle-three" />
                <span class="color-circle-four" />
              </div>
              <img alt="" src="/assets/rating-image.png" /> (32)
            </div>
            <h3 style="margin: 0px">En produkt</h3>
            <p style="margin-top: 2px">Plånbok för mobil</p>
            <h2 style="font-size: 2.2rem">499:-</h2>
          </div>
        </div>
        <div class="product-box">
          <img id="bg-image" alt="" src="/assets/product-case.jpg" />
          <div class="align-content-mobile">
            <div class="product-title-rating">
              <div style="display: flex">
                <span class="color-circle-one" />
                <span class="color-circle-two" />
                <span class="color-circle-three" />
                <span class="color-circle-four" />
              </div>
              <img alt="" src="/assets/rating-image.png" /> (32)
            </div>
            <h3 style="margin: 0px">En produkt</h3>
            <p style="margin-top: 2px">Plånbok för mobil</p>
            <h2 style="font-size: 2.2rem">499:-</h2>
          </div>
        </div>
        <div class="product-box">
          <img id="bg-image" alt="" src="/assets/product-case.jpg" />
          <div class="align-content-mobile">
            <div class="product-title-rating">
              <div style="display: flex">
                <span class="color-circle-one" />
                <span class="color-circle-two" />
                <span class="color-circle-three" />
                <span class="color-circle-four" />
              </div>
              <img alt="" src="/assets/rating-image.png" /> (32)
            </div>
            <h3 style="margin: 0px">En produkt</h3>
            <p style="margin-top: 2px">Plånbok för mobil</p>
            <h2 style="font-size: 2.2rem">499:-</h2>
          </div>
        </div>
        <div class="product-box">
          <img id="bg-image" alt="" src="/assets/product-case.jpg" />
          <div class="align-content-mobile">
            <div class="product-title-rating">
              <div style="display: flex">
                <span class="color-circle-one" />
                <span class="color-circle-two" />
                <span class="color-circle-three" />
                <span class="color-circle-four" />
              </div>
              <img alt="" src="/assets/rating-image.png" /> (32)
            </div>
            <h3 style="margin: 0px">En produkt</h3>
            <p style="margin-top: 2px">Plånbok för mobil</p>
            <h2 style="font-size: 2.2rem">499:-</h2>
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
  .product-box {
    margin: 0px 25px 25px 25px;
    font-size: 1.1rem;
  }
  .product-box img {
    max-width: 300px;
    max-height: 350px;
    width: 250px;
    height: 250px;
    object-fit: cover;
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
    margin-left: auto;
    margin-top: 4px;
    width: 100px;
    height: 35px;
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
    /* background-color: #f73f3f; */
    background-color: #579d5d;
  }

  #test {
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
    .product-container {
    }
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

    .product-title-rating img {
      width: 75px;
      height: 30px;
      margin-top: 6px;
    }

    .product-title-rating {
      align-items: start;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
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
    #product-selection-container {
      width: 100%;
      position: none;
    }
  }
</style>
