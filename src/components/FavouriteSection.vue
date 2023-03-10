<!-- https://www.flaticon.com/free-icon/delete_1214428?term=bin&page=1&position=6&origin=search&related_id=1214428 -->

<!-- Delete product -->
<!-- https://paulund.co.uk/vuejs-crud-delete-product-page -->

<script>
  import { initializeApp } from 'firebase/app'
  import {
    getFirestore,
    onSnapshot,
    collection,
    doc,
    // deleteDoc,
    setDoc,
    // addDoc,
    // orderBy,
    query
  } from 'firebase/firestore'
  import { onUnmounted } from 'vue'

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
    data() {
      return {
        cartItems: [],
        wishItems: [],
        accounts: [],
        account: [],
        id: this.$route.params.id,
        CartText: '+  Add to cart   ',
        product: null,
        showCart: false,
        isHoveringCartPreview: false
      }
    },

    mounted() {
      const kontoQuery = query(collection(db, 'konto'))
      const liveKonto = onSnapshot(kontoQuery, (snapshot) => {
        this.accounts = snapshot.docs.map((doc) => {
          console.log(localStorage.getItem('email'))
          console.log(doc.data().email)
          if (localStorage.getItem('email') === doc.data().email) {
            return {
              id: doc.id,
              email: doc.data().email,
              password: doc.data().password,
              name: doc.data().name,
              phone: doc.data().phone,
              wish: doc.data().wishlist,
              cart: doc.data().cart,
              registredUser: doc.data().registredUser
            }
          }
        })
        for (let i = 0; i < this.accounts.length; i++) {
          console.log(1)
          if (this.accounts[i]) {
            this.account = this.accounts[i]
          }
        }
        this.showProducts = this.products
        console.log(this.accounts)
        for (let i = 0; i < this.accounts.length; i++) {
          if (this.accounts[i]) {
            this.wishItems = this.accounts[i].wish
            console.log(this.accounts[i].wish)
          }
        }
      })
      onUnmounted(liveKonto)
      // let wish = localStorage.getItem('Wish')
      // if (wish !== null) {
      //   this.wishItems = JSON.parse(wish)
      // }
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
        setDoc(doc(db, 'konto', this.account.id), {
          id: this.account.id,
          name: this.account.name,
          phone: this.account.phone,
          email: this.account.email,
          password: this.account.password,
          wishlist: this.wishItems,
          cart: this.account.cart,
          registredUser: this.account.registredUser
        })
        localStorage.setItem('Wish', JSON.stringify(this.wishItems))
        console.log('Remove from wishlist')
        this.$store.commit('removeWish')
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
            let cart = JSON.parse(localStorage.getItem('Cart'))
            cart.unshift({
              id: this.product.id,
              name: this.product.name,
              price: this.product.price,
              image: this.product.image,
              description: this.product.description
            })

            this.removeFromWishlist(index)

            /*Update cartItems shoppingcart preview */
            setDoc(doc(db, 'konto', this.account.id), {
              id: this.account.id,
              name: this.account.name,
              phone: this.account.phone,
              email: this.account.email,
              password: this.account.password,
              wishlist: this.account.wish,
              cart: cart,
              registredUser: this.account.registredUser
            })
            localStorage.setItem('Cart', JSON.stringify(cart))

            const currentCartItems = JSON.parse(localStorage.getItem('Cart'))
            this.cartItems = currentCartItems

            this.showCartPreview()

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
    padding-bottom: 90px;
    position: relative;
    top: 100px;
    padding-left: 5%;
  }

  #empty-txt {
    position: relative;
    padding-top: 2%;
    padding-left: 6%;
  }

  .favourite-btn {
    width: 45%;
    margin-right: 5%;
    margin-top: 20px;
    height: 50px;
    background-color: #b1ea38;
    border-radius: 3px;
    border: 0px solid;
    font-weight: 400;
    transition: all 0.35s;
  }

  .favourite-btn:hover {
    background-color: #8ab72a;
  }

  #icon {
    width: 8%;
    height: 5%;
    cursor: pointer;
    padding-top: 10px;
  }

  #icon:hover {
    transition: 0.9s;
  }

  #align-button-and-icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 5%;
  }

  @media (min-width: 899px) {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  /* ------------- */

  @media (min-width: 601px) and (max-width: 899px) {
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
