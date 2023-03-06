<script>
  export default {
    data() {
      return {
        product: '',
        products: '',
        similarProducts: [],
        CartText: '+  Add to cart   ',
        WishText: '+  Add to wishlist   ',
        id: this.$route.params.id,
        CartColor: 'rgba(0, 0, 0)',
        WishColor: 'rgba(0, 0, 0)',
        ChooseSize: false,
        SizeError: false,
        currentDate: '',
        cartItems: [],
        showCart: false,
        isHoveringCartPreview: false,
        totalValue: 0,
        discountActive: false
      }
    },
    computed: {
      total() {
        if (localStorage.getItem('discountActive')) {
          return this.cartItems.reduce((x, item) => x + item.price, 0) * 0.85
        } else {
          return this.cartItems.reduce((x, item) => x + item.price, 0)
        }
      }
    },

    mounted() {
      if (localStorage.getItem('discountActive')) {
        this.discountActive = true
      }
    },

    watch: {
      $route() {
        fetch('/assets/api.JSON')
          .then((response) => response.json())
          .then((result) => {
            this.products = result
            this.similarProducts = []
            for (let i = 0; i < this.products.length; i++) {
              if (this.products[i].id === Number(this.$route.params.id)) {
                this.product = this.products[i]
              }
            }
            for (let i = 0; i < this.products.length; i++) {
              if (this.products[i].category === this.product.category) {
                if (this.products[i].id !== this.product.id)
                  this.similarProducts.unshift(this.products[i])
              }
            }
          })
      }
    },
    created() {
      this.renderDate()
      // this.$watch(
      //   () = this.$route.params.id, (params) => {
      //     console.log(params)
      //   }
      // )
      fetch('/assets/api.JSON')
        .then((response) => response.json())
        .then((result) => {
          this.products = result
          for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === Number(this.$route.params.id)) {
              this.product = this.products[i]
            }
          }
          for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].category === this.product.category) {
              if (this.products[i].id !== this.product.id)
                this.similarProducts.unshift(this.products[i])
            }
          }
        })
    },

    methods: {
      renderDate() {
        const currentDate = new Date()
        const day = String(currentDate.getDate()).padStart(2, '0')
        const month = String(currentDate.getMonth() + 1).padStart(2, '0')
        const year = currentDate.getFullYear()
        this.currentDate = `${day}/${month}/${year}`
      },
      addToCart(id) {
        if (!this.ChooseSize) {
          this.SizeError = true
          return
        } else {
          this.SizeError = false
          this.$store.commit('addToCart')
        }
        if (localStorage.getItem('Cart') !== null) {
          if (this.CartText === '+  Add to cart   ') {
            let cart = JSON.parse(localStorage.getItem('Cart'))
            console.log('Cart', cart)
            cart.unshift({
              id: this.product.id,
              name: this.product.name,
              price: this.product.price,
              image: this.product.image,
              description: this.product.description,
              category: this.product.category,
              date: this.currentDate
            })
            localStorage.setItem('Cart', JSON.stringify(cart))
            this.CartColor = 'rgba(0,0,0,0)'
            setTimeout(() => (this.CartText = '✓'), 350)
            setTimeout(() => (this.CartColor = 'rgba(0,0,0)'), 350)

            setTimeout(() => (this.CartColor = 'rgba(0,0,0,0)'), 3000)
            setTimeout(() => (this.CartColor = 'rgba(0,0,0,1)'), 3350)
            setTimeout(() => (this.CartText = 'Remove from Cart'), 3350)
          } else if (this.CartText === 'Remove from Cart') {
            let cart = JSON.parse(localStorage.getItem('Cart'))
            console.log(cart)
            let i = 0
            for (let product of cart) {
              console.log(product)
              console.log(product.id + '   ' + id)

              if (product.id === id) {
                cart.splice(i, 1)
                localStorage.setItem('Cart', JSON.stringify(cart))
              }
              i++
            }
            this.CartColor = 'rgba(0,0,0,0)'
            setTimeout(() => (this.CartText = '✓'), 350)
            setTimeout(() => (this.CartColor = 'rgba(0,0,0)'), 350)

            setTimeout(() => (this.CartColor = 'rgba(0,0,0,0)'), 3000)
            setTimeout(() => (this.CartColor = 'rgba(0,0,0,1)'), 3350)
            setTimeout(() => (this.CartText = '+  Add to cart   '), 3350)
          }
        } else {
          let cart = null
          if (this.CartText === '+  Add to cart   ') {
            console.log('hej')
            cart = [
              {
                id: this.product.id,
                name: this.product.name,
                price: this.product.price,
                image: this.product.image,
                description: this.product.description,
                category: this.product.category,
                date: this.currentDate
              }
            ]
            localStorage.setItem('Cart', JSON.stringify(cart))
            this.CartColor = 'rgba(0,0,0,0)'
            setTimeout(() => (this.CartText = '✓'), 350)
            setTimeout(() => (this.CartColor = 'rgba(0,0,0)'), 350)

            setTimeout(() => (this.CartColor = 'rgba(0,0,0,0)'), 3000)
            setTimeout(() => (this.CartColor = 'rgba(0,0,0,1)'), 3350)
            setTimeout(() => (this.CartText = 'Remove from Cart'), 3350)
          }
        }

        const currentCartItems = JSON.parse(localStorage.getItem('Cart'))
        this.cartItems = currentCartItems

        this.showCartPreview()
        this.totalValue = this.cartItems.reduce((x, item) => x + item.price, 0)
        console.log('currentCartItems', this.cartItems)
      },

      showCartPreview() {
        this.showCart = true

        setTimeout(() => {
          this.showCart = false
        }, 2500)
      },
      closeCartPreview() {
        this.showCart = false
        this.isHoveringCartPreview = false
      },

      removeItem(index) {
        this.cartItems.splice(index, 1)
        localStorage.setItem('Cart', JSON.stringify(this.cartItems))
      },
      openProduct(id) {
        this.WishText = '+  Add to wishlist   '
        this.CartText = '+  Add to cart   '
        this.$router.push({
          path: '/ProductView/' + id,
          replace: true
        })
      },
      addToWish(id) {
        this.$store.commit('addToWish')
        if (localStorage.getItem('Wish') !== null) {
          if (this.WishText === '+  Add to wishlist   ') {
            console.log('Hej!')
            let wish = JSON.parse(localStorage.getItem('Wish'))

            wish.unshift({
              id: this.product.id,
              name: this.product.name,
              price: this.product.price,
              image: this.product.image,
              description: this.product.description
            })
            localStorage.setItem('Wish', JSON.stringify(wish))
            this.WishColor = 'rgba(0,0,0,0)'
            setTimeout(() => (this.WishText = '✓'), 350)
            setTimeout(() => (this.WishColor = 'rgba(0,0,0)'), 350)

            setTimeout(() => (this.WishColor = 'rgba(0,0,0,0)'), 3000)
            setTimeout(() => (this.WishColor = 'rgba(0,0,0,1)'), 3350)
            setTimeout(() => (this.WishText = 'Remove from Wishlist'), 3350)
            setTimeout(() => console.log('1'), 3350)
          } else if (this.WishText === 'Remove from Wishlist') {
            let wish = JSON.parse(localStorage.getItem('Wish'))
            console.log(wish)
            let i = 0
            for (let product of wish) {
              console.log(product)
              console.log(product.id + '   ' + id)

              if (product.id === id) {
                wish.splice(i, 1)
                localStorage.setItem('Wish', JSON.stringify(wish))
              }
              i++
            }
            this.WishColor = 'rgba(0,0,0,0)'
            setTimeout(() => (this.WishText = '✓'), 350)
            setTimeout(() => (this.WishColor = 'rgba(0,0,0)'), 350)

            setTimeout(() => (this.WishColor = 'rgba(0,0,0,0)'), 3000)
            setTimeout(() => (this.WishColor = 'rgba(0,0,0,1)'), 3350)
            setTimeout(() => (this.WishText = '+  Add to wishlist   '), 3350)
          }
        } else {
          let wish = null
          if (this.WishText === '+  Add to wishlist   ') {
            console.log('hej')
            console.log('Wish 3')
            wish = [
              {
                id: this.product.id,
                name: this.product.name,
                price: this.product.price,
                image: this.product.image,
                description: this.product.description
              }
            ]
            localStorage.setItem('Wish', JSON.stringify(wish))
            this.WishColor = 'rgba(0,0,0,0)'
            setTimeout(() => (this.WishText = '✓'), 350)
            setTimeout(() => (this.WishColor = 'rgba(0,0,0)'), 350)

            setTimeout(() => (this.WishColor = 'rgba(0,0,0,0)'), 3000)
            setTimeout(() => (this.WishColor = 'rgba(0,0,0,1)'), 3350)
            setTimeout(() => (this.WishText = '+  Add to wishlist   '), 3350)
          }
        }
      },
      sizeSelected() {
        this.ChooseSize = true
      }
    }
  }
</script>

<template>
  <main>
    <div
      v-if="showCart || isHoveringCartPreview"
      class="cart-preview"
      @mouseover="isHoveringCartPreview = true"
      @mouseleave="showCartPreview(), (isHoveringCartPreview = false)"
    >
      <h3>Your shopping cart</h3>
      <div class="close-button" @click="closeCartPreview()">
        <font-awesome-icon icon="fa-solid fa-x" />
      </div>
      <div class="cartItems" v-for="(item, index) in cartItems" :key="index">
        <div class="itemRow">
          <div>
            <img class="productImg" :src="item.image" :alt="item.name" />
          </div>
          <div class="productInfo">
            <span class="name">{{ item.name }}</span>
            <img
              class="trashImg"
              @click="removeItem(index)"
              src="/assets/trash-can-solid.svg"
              alt="trash can"
              width="20"
            />
            <span class="price">{{ item.price }} :- </span>
          </div>
        </div>
      </div>
      <div class="total">
        <h2 style="margin-right: 10px">Total:</h2>
        <h2 id="discount-active" v-if="discountActive">{{ totalValue }} :-</h2>
        <h2 v-else>{{ totalValue }} :-</h2>
        <h2 v-if="discountActive" class="total-discount">{{ total }} :-</h2>
      </div>
      <p id="member-active-text" v-if="discountActive">
        Membership discount of 15% is active.
      </p>
    </div>
    <p id="page-direction">
      <router-link class="home-direction" to="/">Home</router-link> /
      <router-link class="home-direction" to="/ProductCatalog"
        >Products</router-link
      >
    </p>
    <section>
      <img :src="product.image" alt="Img of the product" class="product-img" />
      <div class="product-information">
        <h2 class="product-name">{{ product.name }}</h2>
        <h2 class="product-price">{{ product.price }} :-</h2>
        <p class="product-description">
          {{ product.description }}
        </p>
        <select class="product-size" type="option" @change="sizeSelected">
          <option value="" disabled selected hidden>Choose a size</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXl">XXL</option>
        </select>
        <p v-if="this.SizeError" style="color: red">
          You need to choose a size.
        </p>
        <div class="product-btns">
          <input
            @click="addToCart(product.id)"
            class="product-btn"
            type="button"
            :value="CartText"
            :style="{ color: this.CartColor }"
          />
          <input
            @click="addToWish(product.id)"
            class="product-btn product-wishlist"
            type="button"
            :value="WishText"
            :style="{ color: this.WishColor }"
          />
        </div>
        <div class="product-return-container">
          <div class="product-return">
            <img src="/assets/check.svg" alt="" />
            <p class="product-return-text"><b>30</b> day price guarantee</p>
          </div>
          <div class="product-return">
            <img src="/assets/check.svg" alt="" />
            <p class="product-return-text">
              <b>Free</b> return & right of exchange
            </p>
          </div>
          <div class="product-return">
            <img src="/assets/check.svg" alt="" />
            <p class="product-return-text">
              <b>Free shipping</b> on orders over 399:-
            </p>
          </div>
          <div class="product-return">
            <img src="/assets/check.svg" alt="" />
            <p class="product-return-text"><b>365</b> days open purchase</p>
          </div>
        </div>
      </div>
    </section>
    <section class="otherInformation">
      <h2>Similar products</h2>
      <!-- <div class="similairProducts"> -->
      <div class="product-container">
        <div
          :key="similarProduct.id"
          v-for="similarProduct in similarProducts"
          class="product-box"
          @click="openProduct(similarProduct.id)"
        >
          <img id="bg-image" alt="" :src="similarProduct.image" />
          <div class="align-content-mobile">
            <div class="product-title-rating">
              <div style="display: flex">
                <span
                  v-for="color in similarProduct.colors"
                  :key="color"
                  class="color-circle-one"
                  :style="{ backgroundColor: color }"
                />
              </div>
              <img alt="" src="/assets/rating-image.png" /> (32)
            </div>
            <h3 style="margin: 0px">{{ similarProduct.name }}</h3>
            <p style="margin-top: 2px">{{ similarProduct.category }}</p>
            <h2>{{ similarProduct.price }}:-</h2>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </section>
  </main>
</template>

<style scoped>
  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
  }
  .cart-preview {
    position: fixed;
    top: 0.5rem;
    right: 0.5rem;
    width: 25rem;
    background-color: white;
    /* border: 1px solid black; */
    border: 1px solid rgb(179, 179, 179);
    padding: 1rem;
    z-index: 999;
    max-height: 40rem;
    overflow-y: auto;
    border-radius: 5px;
  }
  .trashImg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 1rem;
  }
  .productInfo {
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }
  .itemRow {
    display: flex;
    flex-direction: row;
    max-width: 90%;
    position: relative;
    margin-top: 1rem;
    box-shadow: 0px 46px 130px rgba(0, 25, 64, 0.142);
  }
  .total {
    font-size: 2rem;
    display: flex;
    justify-content: end;
    align-items: flex-end;
    margin: 2rem 2rem 2rem 0rem;
  }

  .total-discount {
    color: rgb(245, 8, 8);
    margin-left: 10px;
  }

  #discount-active {
    text-decoration: line-through;
  }

  #member-active-text {
    color: rgb(228, 13, 13);
    display: flex;
    justify-content: end;
    align-items: flex-end;
    margin: 2rem 2rem 0rem 2rem;
  }
  .productImg {
    max-width: 150px;
    max-height: 150px;
    width: 250px;
    height: 250px;
    object-fit: cover;
    transition: all 0.4;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  main {
    position: relative;
    top: 100px;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }
  .product-img {
    width: 50%;
    object-fit: cover;
  }
  section {
    display: flex;
  }
  .product-information {
    margin-left: 2rem;
    width: 50%;
  }
  .product-name {
    font-size: 2em;
  }
  .product-price {
    font-weight: 700;
  }
  .product-size {
    /* background-color: rgba(255, 255, 255, 0); */
    background-color: #e6e6e6;
    /* border: 1px solid; */
    border: 1px solid rgb(179, 179, 179);
    border-radius: 5px;
    padding: 0.7rem;
    transition: all 0.35s;
    appearance: none;
    outline: none;
  }
  .product-size:hover {
    /* background-color: rgb(44, 44, 44); */
    background-color: #d6d6d6;
    color: #000;
  }
  .product-btn {
    width: 45%;
    margin-right: 5%;
    margin-top: 20px;
    /* padding: 1rem; */
    height: 50px;
    background-color: #579d5d;
    border-radius: 3px;
    border: 0px solid;
    font-weight: 400;
    transition: all 0.35s;
  }
  .product-btn:hover {
    background-color: #45804a;
    /* color: #579d5d; */
  }
  .product-wishlist {
    background-color: #b1ea38;
  }
  .product-wishlist:hover {
    background-color: #8ab72a;
    /* color: #b1ea38; */
  }
  .product-return {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  .product-return-text {
    font-weight: lighter;
    margin: 0px;
    margin-left: 5px;
    line-height: 1;
  }

  .product-return-container {
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .product-container {
    display: flex;
    flex-wrap: wrap;
  }
  .product-box {
    margin: 0px 50px 25px 0px;
    font-size: 1.1rem;
    transition: all 0.2s;
  }
  .product-box:hover {
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
  .product-title-rating img {
    margin: 4px 0px 0px auto;
    width: 80px;
    height: 20px;
  }
  .product-box h2 {
    font-size: 2.2rem;
    margin-bottom: 0px;
  }
  .otherInformation {
    display: grid;
  }

  .home-direction {
    text-decoration: none;
    color: #424242;
    transition: all 0.35s ease-in-out;
  }
  .home-direction:hover {
    opacity: 0.7;
  }

  #page-direction {
    font-size: 1.1rem;
    font-weight: 600;
    color: #424242;
  }

  @media (max-width: 900px) {
    section {
      display: grid;
    }
    main {
      width: 95%;
    }
    .product-information {
      margin-top: 20px;
      width: 100%;
      margin-left: 0px;
    }
    .product-img {
      width: 100%;
    }
  }
</style>
