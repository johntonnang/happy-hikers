<!-- https://www.flaticon.com/free-icon/delete_1214428?term=bin&page=1&position=6&origin=search&related_id=1214428 -->

<!-- Delete product -->
<!-- https://paulund.co.uk/vuejs-crud-delete-product-page -->

<script>
  export default {
    data() {
      return {
        cartItems: [],
        wishItems: [],
        id: this.$route.params.id,
        CartText: '+  Add to cart   ',
        product: null,
        showCart: false,
        isHoveringCartPreview: false
      }
    },

    mounted() {
      let wish = localStorage.getItem('Wish')
      if (wish !== null) {
        this.wishItems = JSON.parse(wish)
      }
      let cart = localStorage.getItem('Cart')
      if (cart !== null) {
        this.cartItems = JSON.parse(cart)
      }
    },
    watch: {
      wishItems: {
        handler: function (value) {
          localStorage.setItem('Wish', JSON.stringify(value))
        },
        deep: true
      },
      cartItems: {
        handler: function (value) {
          localStorage.setItem('Cart', JSON.stringify(value))
        },

        deep: true
      }
    },
    /*Shopping cart preview close button and total*/
    computed: {
      total() {
        console.log(this.cartItems.length)
        return this.cartItems.reduce((x, item) => x + item.price, 0)
      },
      shouldShowCart() {
        return this.showCart || this.isHoveringCartPreview
      }
    },

    methods: {
      removeFromWishlist(index) {
        console.log(index)
        this.wishItems.splice(index, 1)
        localStorage.setItem('Wish', JSON.stringify(this.wishItems))
        console.log('Remove from wishlist')
      },
      addToCart(id, index) {
        for (let product in this.wishItems) {
          if (this.wishItems[product].id === id) {
            console.log(2)
            this.product = this.wishItems[product]
          }
        }
        if (localStorage.getItem('Cart') !== null) {
          if (this.CartText === '+  Add to cart   ') {
            console.log('hej')
            let cart = JSON.parse(localStorage.getItem('Cart'))
            cart.unshift({
              id: this.product.id,
              name: this.product.name,
              price: this.product.price,
              image: this.product.image,
              description: this.product.description
            })

            this.removeFromWishlist(index)

            console.log('wishItems array: ' + this.wishItems)
            console.log('removing ' + this.product.name)

            /*Update cartItems shoppingcart preview */
            localStorage.setItem('Cart', JSON.stringify(cart))
            const currentCartItems = JSON.parse(localStorage.getItem('Cart'))
            this.cartItems = currentCartItems

            this.showCartPreview()

            console.log('currentCartItems', this.cartItems)

            // console.log('hej 1')
            // } else if (this.CartText === 'Remove from Cart') {
            //   let cart = JSON.parse(localStorage.getItem('Cart'))
            //   console.log(cart)
            //   let i = 0
            //   for (let product of cart) {
            //     console.log(product)
            //     console.log(product.id + '   ' + id)

            //     if (product.id === id) {
            //       cart.splice(i, 1)
            //       localStorage.setItem('Cart', JSON.stringify(cart))
            //     }
            //     i++
            //   }
          }
        } else {
          let cart = null
          if (this.CartText === '+  Add to cart   ') {
            console.log('hej 3')
            cart = [
              {
                id: this.product.id,
                name: this.product.name,
                price: this.product.price,
                image: this.product.image,
                description: this.product.description
              }
            ]
            this.removeFromWishlist(index)
            localStorage.setItem('Cart', JSON.stringify(cart))
          }
        }
      },
      /*Shopping cart preview*/
      removeItem(index) {
        this.cartItems.splice(index, 1)
        localStorage.setItem('Cart', JSON.stringify(this.cartItems))
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
        /*Shopping cart preview stopp*/
      },

      openProduct(id) {
        this.WishText = '+  Add to wishlist   '
        this.CartText = '+  Add to cart   '
        this.$router.push({
          path: '/ProductView/' + id,
          replace: true
        })
      }

      // Här vill jag ha en addToCart-funktion
    }
  }
</script>

<template>
  <main>
    <div id="position-text">
      <p id="page-direction">Home / Wishlist</p>
      <h1>My Favourites</h1>
    </div>

    <!--Shopping cart preview-->
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
      <div class="total">Total: {{ total }} :-</div>
    </div>
    <!--Shopping cart preview stopp-->
    <div v-if="wishItems.length">
      <div class="container">
        <div class="wishItems" v-for="(item, index) in wishItems" :key="index">
          <div id="card">
            <img :src="item.image" alt="image of product" />
            <h3>{{ item.name }}</h3>
            <h5>{{ item.price }} :-</h5>
            <p>{{ item.category }}</p>
            <div id="align-button-and-icon">
              <button class="favourite-btn" @click="addToCart(item.id, index)">
                {{ this.CartText }}
              </button>
              <img
                @click="removeFromWishlist(index)"
                id="icon"
                src="/assets/delete.png"
                alt="bin icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="empty-txt" v-else>Your wishlist is empty</div>
  </main>
</template>

<style scoped>
  /* Shopping cart preview*/
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
    font-size: 1.5rem;
    display: flex;
    justify-content: end;
    align-items: flex-end;
    margin: 2rem;
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
  /* CARD */

  img {
    width: 50%;
    border-radius: 5px;
  }

  #card {
    padding-top: 5%;
    /* background-color: white; */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    align-items: center;
    text-align: center;
    margin-bottom: 5%;
    border-radius: 5px;
    margin: 5%;
  }

  #card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  #position-text {
    /* margin-left: 8rem; */
    padding-bottom: 90px;
    position: relative;
    top: 100px;
    padding-left: 5%;
  }

  #empty-txt {
    position: relative;
    /* top: 100px; */
    /* margin-left: 1rem; */
    padding-top: 2%;
    padding-left: 6%;
  }

  .favourite-btn {
    background-color: rgba(50, 108, 50, 0.804);
    border-radius: 5px;
    cursor: pointer;
    border: none;
  }

  .favourite-btn:hover {
    transition: 0.9s;
    background-color: black;
    color: rgb(169, 164, 164);
  }

  #icon {
    padding-top: 1%;
    width: 8%;
    height: 5%;
    margin-left: 3%;
    cursor: pointer;
  }

  #icon:hover {
    transition: 0.9s;
  }

  #align-button-and-icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 5%;
  }

  @media (min-width: 899px) {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }

    #icon {
      margin-top: 3px;
    }
  }

  /* ------------- */
  @media (min-width: 600px) and (max-width: 899px) {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 375px) and (max-width: 600px) {
    .container {
      display: grid;
      grid-template-columns: 1fr;
    }
    #card {
      padding-top: 5%;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      align-items: center;
      text-align: center;
      margin-bottom: 5%;
      border-radius: 5px;
    }
  }
</style>
