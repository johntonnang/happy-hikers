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
        totalValue: 0,
        discountActive: false,
        accounts: [],
        account: []
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
      // let cart = localStorage.getItem('Cart')
      // if (cart !== null) {
      //   this.cartItems = JSON.parse(cart)
      // }
      // if (localStorage.getItem('discountActive')) {
      //   this.discountActive = true
      // }
      // this.totalValue = this.cartItems.reduce((x, item) => x + item.price, 0)

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
              registredUser: doc.data().registredUser,
              wish: doc.data().wishlist,
              cart: doc.data().cart
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
            this.cartItems = this.accounts[i].cart
            console.log(this.accounts[i].wish)
          }
        }
      })
      onUnmounted(liveKonto)
    },
    watch: {
      cartItems: {
        handler: function (value) {
          localStorage.setItem('Cart', JSON.stringify(value))
        },
        deep: true
      }
    },
    methods: {
      removeItem(index) {
        this.cartItems.splice(index, 1)
        setDoc(doc(db, 'konto', this.account.id), {
          id: this.account.id,
          email: this.account.email,
          password: this.account.password,
          name: this.account.name,
          phone: this.account.phone,
          registredUser: this.account.registredUser,
          wishlist: this.account.wish,
          cart: this.cartItems
        })
        // localStorage.setItem('Cart', JSON.stringify(this.cartItems))
      }
    }
  }
</script>
<template>
  <div class="container">
    <h1 class="shoppingh1">Shopping cart</h1>
    <div class="cartBox">
      <div>
        <div v-if="cartItems.length">
          <div
            class="cartItems"
            v-for="(item, index) in cartItems"
            :key="index"
          >
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
                <span class="description">{{ item.description }}</span>
              </div>
            </div>
          </div>
          <div class="total">
            <h2 style="margin-right: 10px">Total:</h2>
            <h2 id="discount-active" v-if="discountActive">
              {{ totalValue }} :-
            </h2>
            <h2 v-else>{{ totalValue }} :-</h2>
            <h2 v-if="discountActive" class="total-discount">{{ total }} :-</h2>
          </div>
          <p id="member-active-text" v-if="discountActive">
            Membership discount of 15% is active.
          </p>
        </div>
        <div v-else>Your cart is empty</div>
      </div>
    </div>
    <div class="checkoutCointainer">
      <RouterLink to="/CheckoutView">
        <button class="checkout">Checkout</button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
  .cartBox {
    background-color: rgba(238, 238, 238, 0.4);
    padding: 4rem;
    margin: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 5px;
  }
  .shoppingh1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
  main {
    position: relative;
    top: 100px;
    width: 100%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    margin-bottom: 8rem;
  }

  .total {
    font-size: 2rem;
    display: flex;
    justify-content: end;
    align-items: flex-end;
    margin: 2rem 6rem 2rem 0rem;
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
    margin-right: 6rem;
  }
  .itemRow {
    display: flex;
    flex-direction: row;
    max-width: 90%;
    position: relative;
    margin-top: 1rem;
    box-shadow: 0px 46px 130px rgba(0, 25, 64, 0.142);
  }
  .productInfo {
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }
  .container {
    display: flex;
    align-items: center;
    /* margin-top: 2rem; */
    /* margin-bottom: 2rem; */
    justify-content: center;
    flex-direction: column;
  }
  .name {
    font-size: 1.5rem;
  }
  .price {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  .cartItems {
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
  }

  .productImg {
    max-width: 300px;
    max-height: 350px;
    width: 150px;
    height: 150px;
    object-fit: cover;
    transition: all 0.4;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  .cartItems button {
    width: 7rem;
    margin-top: 1rem;
  }
  .trashImg {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  .trashImg:hover {
    cursor: pointer;
  }
  .checkout {
    width: 20rem;
    color: #eee;
    /* background-color: black; */
    background-color: rgba(2, 70, 2, 0.716);
    border-radius: 35px;
    border: none;
    cursor: pointer;
    padding: 15px 15px;
    font-size: medium;
    margin: 0.5rem;
    margin: 2rem;
  }
  .checkoutCointainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 600px) {
    .shoppingh1 {
      padding-top: 5rem;
      margin-left: 7rem;
    }
    .productImg {
      width: 125px;
      height: 125px;
      object-fit: cover;
      transition: all 0.4;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
    }
    .shoppingh1 {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      margin-right: 0rem;
    }

    .total {
      font-size: 1.5rem;
    }
    .name {
      font-size: 1rem;
    }
    .cartItems {
      display: flex;
      min-width: 300px;
    }
    .itemRow {
      display: flex;
      flex-direction: row;
      background-color: rgb(246, 245, 245);
      width: 100%;
      position: relative;
      margin: 0.5rem;
    }
    .container {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    .description {
      display: none;
    }
  }
  @media (max-width: 760px) {
    .productImg {
      object-fit: cover;
      transition: all 0.4;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
    }
    .cartItems {
      display: flex;
      min-width: 400px;
    }

    .description {
      font-size: 12px;
    }
  }
  @media (max-width: 980px) {
    .itemRow {
      display: flex;
      flex-direction: row;
      background-color: rgb(246, 245, 245);
      max-width: 100%;
      position: relative;
    }
    .container {
      margin: none;
    }
  }
  @media (max-width: 1260px) {
    .total {
      font-size: 1.3rem;
    }
  }
</style>
