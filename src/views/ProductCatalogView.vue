<script>
  import ProductList from '../components/ProductList.vue'
  import ChildComponent from '../components/SliderDoubleThumbs.vue'
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
  import { initializeApp } from 'firebase/app'
  import {
    getFirestore,
    onSnapshot,
    collection,
    // doc,
    // deleteDoc,
    // setDoc,
    // addDoc,
    orderBy,
    query
  } from 'firebase/firestore'
  import { onUnmounted, ref } from 'vue'

  const firebaseConfig = {
    apiKey: 'AIzaSyAGJoAN08CeHsyoibMdRQVpegwPibf1ANk',
    authDomain: 'happy-hikers-1a875.firebaseapp.com',
    projectId: 'happy-hikers-1a875',
    storageBucket: 'happy-hikers-1a875.appspot.com',
    messagingSenderId: '434497193720',
    appId: '1:434497193720:web:5893a8bd2905affdaedd0d',
    measurementId: 'G-QW50PLVBTN'
  }
  const app = initializeApp(firebaseConfig)

  const db = getFirestore(app)
  export default {
    mounted() {
      window.addEventListener('resize', () => {
        this.$forceUpdate()
      })
    },
    data() {
      return {
        colors: {
          blue: false,
          red: false,
          green: false,
          yellow: false,
          black: false,
          white: false,
          brown: false
        },
        colorFilter: ['showAll'],
        products: ref([]),
        showProducts: [],
        category: this.$route.params.category,
        id: this.$route.params.id,
        newerData: false,
        carouselImg: [
          '/assets/apiImg/Mountaineer.png',
          '/assets/apiImg/Roamer.png'
        ]
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
      // fetch('/assets/api.JSON')
      //   .then((response) => response.json())
      //   .then((result) => {
      //     this.products = result
      //     this.showProducts = this.products
      //     console.log(result)
      //   })
      const latestQuery = query(collection(db, 'products'), orderBy('price'))
      const liveProducts = onSnapshot(latestQuery, (snapshot) => {
        this.products = snapshot.docs.map((doc) => {
          return {
            id: doc.data().id,
            name: doc.data().name,
            price: doc.data().price,
            image: doc.data().img,
            description: doc.data().description,
            colors: doc.data().colors,
            category: doc.data().category,
            rating: doc.data().rating,
            ratingcount: doc.data().ratingcount,
            allreviews: doc.data().allreviews
          }
        })
        this.showProducts = this.products
      })
      onUnmounted(liveProducts)
    },
    methods: {
      openProduct(id) {
        this.$router.push({
          path: '/ProductView/' + id,
          replace: true
        })
        console.log('hello world')
      },
      filterSize() {},
      searchResult() {
        for (let i = 0; i < this.products.length; i++) {
          if (this.searchID === this.products[i].category) {
            this.productsSearch.push(this.products[i])
          }
        }
      },
      addColor(color) {
        if (this.colors[color] === false) {
          if (this.colorFilter[0] === 'showAll') {
            this.showProducts = this.products
            this.colorFilter = [color]
          } else {
            this.colorFilter.push(color)
          }
          this.showProducts = []
          for (let productId in this.products) {
            for (let color in this.colorFilter) {
              console.log(this.showProducts.includes(this.products[productId]))
              if (
                this.products[productId].colors.includes(
                  this.colorFilter[color]
                )
              ) {
                if (
                  this.showProducts.includes(this.products[productId]) === false
                ) {
                  this.showProducts.push(this.products[productId])
                }
              }
            }
          }
        } else if (this.colors[color] === true) {
          for (let i in this.colorFilter) {
            if (this.colorFilter[i] === color) {
              this.colorFilter.splice(i, 1)
              if (this.colorFilter.length === 0) {
                this.colorFilter = ['showAll']
              }
            }
          }
          if (this.colorFilter[0] === 'showAll') {
            this.showProducts = this.products
          } else {
            this.showProducts = []
            for (let productId in this.products) {
              for (let color in this.colorFilter) {
                if (
                  this.products[productId].colors.includes(
                    this.colorFilter[color]
                  )
                )
                  if (
                    this.showProducts.includes(this.products[productId]) ===
                    false
                  ) {
                    this.showProducts.push(this.products[productId])
                  }
              }
            }
          }
        }
      }
    },
    computed: {
      itemsToShow() {
        return window.innerWidth < 760 ? 1 : 3
      }
    }
  }
</script>

<template>
  <main>
    <p id="page-direction">
      <router-link class="home-direction" to="/">Home</router-link> /
      <router-link class="home-direction" to="/ProductCatalog"
        >Products</router-link
      >
    </p>
    <img
      id="product-intro-image"
      src="/assets/roland-losslein-X7Res52lR3c-unsplash.jpg"
      alt=""
    />
    <div id="main-products-container">
      <div id="product-selection-container">
        <div class="filter-container">
          <h3 style="margin-top: 0px">Size</h3>

          <div class="checkbox-container">
            <input type="checkbox" value="XS" name="size" />
            <label for="sizeXSmall" /> XS
          </div>
          <div class="checkbox-container">
            <input type="checkbox" value="S" name="size" />
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
        <div class="filter-container">
          <h3>Color</h3>
          <div class="checkbox-container">
            <input
              type="checkbox"
              value="blue"
              v-model="colors.blue"
              name="color"
              @click="addColor('blue')"
            />
            <label for="sizeXSmall" /> Blue
          </div>
          <div class="checkbox-container">
            <input
              type="checkbox"
              value="red"
              v-model="colors.red"
              name="color"
              @click="addColor('red')"
            />
            <label for="sizeSmall" /> Red
          </div>
          <div class="checkbox-container">
            <input
              type="checkbox"
              value="green"
              v-model="colors.green"
              name="color"
              @click="addColor('green')"
            />
            <label for="sizeMedium" /> Green
          </div>
          <div class="checkbox-container">
            <input
              type="checkbox"
              value="yellow"
              v-model="colors.yellow"
              name="color"
              @click="addColor('yellow')"
            />
            <label for="sizeLarge" /> Yellow
          </div>
          <div class="checkbox-container">
            <input
              type="checkbox"
              value="black"
              v-model="colors.black"
              name="color"
              @click="addColor('black')"
            />
            <label for="sizeXLarge" /> Black
          </div>
          <div class="checkbox-container">
            <input
              type="checkbox"
              value="white"
              v-model="colors.white"
              name="color"
              @click="addColor('white')"
            />
            <label for="sizeXXLarge" /> White
          </div>
          <div class="checkbox-container">
            <input
              type="checkbox"
              value="brown"
              v-model="colors.brown"
              name="color"
              @click="addColor('brown')"
            />
            <label for="sizeXXLarge" /> Brown
          </div>
        </div>
        <div
          class="filter-container filter-container-mobile"
          style="margin-bottom: 20px"
        >
          <h3>Price</h3>
          <ChildComponent />
        </div>
      </div>

      <product-list
        :products="this.showProducts"
        :colors-filter="this.colorFilter"
        :show-products="this.showProducts"
      />
    </div>
    <h4 id="carousel-intro-text">YOU MAY ALSO LIKE</h4>
    <carousel
      class="carousel-container"
      :items-to-show="itemsToShow"
      :wrap-around="true"
    >
      <slide @click="openProduct(products[5].id)" :key="101">
        <div class="explore-container">
          <img src="/assets/apiImg/TrailBlaze.png" alt="" />
          <button class="explore-btn">Explore</button>
        </div>
      </slide>
      <slide @click="openProduct(products[0].id)" :key="102">
        <div class="explore-container">
          <img src="/assets/apiImg/DesertExplorer.png" alt="" />
          <button class="explore-btn">Explore</button>
        </div>
      </slide>
      <slide @click="openProduct(products[9].id)" :key="103">
        <div class="explore-container">
          <img src="/assets/apiImg/Mountaineer.png" alt="" />
          <button class="explore-btn">Explore</button>
        </div>
      </slide>
      <slide @click="openProduct(products[15].id)" :key="104">
        <div class="explore-container">
          <img src="'/assets/apiImg/Roamer.png'" alt="" />
          <button class="explore-btn">Explore</button>
        </div>
      </slide>
      <slide @click="openProduct(products[8].id)" :key="105">
        <div class="explore-container">
          <img src="/assets/apiImg/TrailTrekker.png" alt="" />
          <button class="explore-btn">Explore</button>
        </div>
      </slide>
      <slide @click="openProduct(products[12].id)" :key="106">
        <div class="explore-container">
          <img src="/assets/apiImg/TrailSeeker.png" alt="" />
          <button class="explore-btn">Explore</button>
        </div>
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

  .home-direction {
    text-decoration: none;
    color: #424242;
    transition: all 0.35s ease-in-out;
  }
  .home-direction:hover {
    opacity: 0.7;
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
    display: flex;
    gap: 3px;
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
    width: 82.5%;
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

  #carousel-intro-text {
    text-align: center;
    color: rgb(85, 85, 85);
    font-weight: 400;
    margin: 25px auto 0 auto;
    width: 85%;
    padding: 20px;
    border-bottom: 1px solid rgb(114, 114, 114);
    font-size: 1.7rem;
  }
  .carousel-container {
    margin: 0px auto 170px auto;
    width: 90%;
  }
  .carousel-container img {
    max-width: 100%;
    object-fit: cover;
    position: relative;
    top: 0;
    left: 0;
    transition: box-shadow 0.2s ease-in-out;
  }

  .explore-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    transition: all 0.2s ease-in-out;
  }

  .explore-container:hover {
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.7);
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
    margin: 55px 0px;
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
      position: relative;
    }

    #product-selection-container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      position: static;
    }

    .filter-container {
      flex-basis: 40%;
      margin: 0 auto;
    }

    .filter-container:nth-child(3) {
      margin-top: 10px;
      flex-basis: 95%;
    }
    .filter-container h3 {
      margin-top: 0px;
    }

    .carousel {
      margin-bottom: 40px;
    }
    .explore-btn {
      display: none;
    }
  }
</style>
