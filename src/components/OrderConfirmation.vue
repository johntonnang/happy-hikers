<script>
  import { mapState } from 'vuex'
  import { initializeApp } from 'firebase/app'
  import {
    getFirestore,
    onSnapshot,
    collection,
    // doc,
    // deleteDoc,
    //setDoc,
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
        orderId: '',
        show: false,
        cartItems: [],
        totalValue: 0,
        deliveryCost: 49
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
              registredUser: doc.data().registredUser,
              orders: doc.data().orders,
              profilePoints: doc.data().profilePoints
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
      // let cart = localStorage.getItem('Cart')
      // if (cart !== null) {
      //   this.cartItems = JSON.parse(cart)
      // }
      // if (localStorage.getItem('discountActive')) {
      //   this.discountActive = true
      // }
      // this.totalValue = this.cartItems.reduce((x, item) => x + item.price, 0)

      /* const kontoQuery = query(collection(db, 'konto'))
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
      }) */
      onUnmounted(liveKonto)
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
    created() {
      this.generateOrderId()
    },
    methods: {
      generateOrderId() {
        const id = Math.random().toString(36).substr(2, 9)
        this.orderId = id
      },
      showDiv() {
        this.show = !this.show
        if (this.showDiv) {
          window.scrollBy(0, 1000)
        }
      }
    },

    computed: {
      total() {
        if (localStorage.getItem('discountActive')) {
          return this.cartItems.reduce((x, item) => x + item.price, 0) * 0.85
        } else {
          return this.cartItems.reduce((x, item) => x + item.price, 0)
        }
      },
      delvPlussTotal() {
        return this.total + this.deliveryCost // calculate the total
      },
      ...mapState([
        'email',
        'firstName',
        'address',
        'country',
        'statee',
        'credit',
        'debit',
        'paypal',
        'lastName',
        'phone',
        'ccNumber',
        'address2',
        'zip',
        'ccName'
      ])
    }
  }
</script>

<template>
  <div class="orderInformationContainer">
    <h1>THANK YOU!</h1>
    <p class="ordeIDp">
      Thank you for your order <strong>{{ firstName }}</strong
      >! Your order ID is:
      <strong>{{ orderId }}</strong>
    </p>
    <p>
      We are getting started on your order right away, and you will receive an
      order confirmation shortly to your email {{ email }}.
    </p>
  </div>
  <div class="buttonDiv">
    <button
      class="buttonShow btn btn-dark btn-lg btn-block submitButton"
      @click="showDiv"
    >
      SEE ORDER DETAILS
    </button>
  </div>
  <div v-if="show" class="OrderDetailsContainer">
    <div class="line" />
    <div class="orderIdInfoBox">
      <h5 class="h5Title">ORDER DETAILS:</h5>
      <p class="Idp">
        <strong>{{ orderId }}</strong>
      </p>
    </div>
    <div class="summaryBox">
      <div class="boxLeft">
        <div class="Box">
          <p>CUSTOMER INFORMATION</p>
          <p>{{ firstName }} {{ lastName }}</p>
          <p>{{ email }}</p>
        </div>
        <div class="Box">
          <p>ADDRESS</p>
          <p>{{ address }}</p>
          <p>{{ address2 }}</p>
          <p>{{ statee }}</p>
          <p>{{ zip }}</p>
          <p>{{ country }}</p>
        </div>
      </div>
      <div class="boxRight">
        <div class="Box">
          <p>PAYMENT METHOD</p>
          <p>Card nr. {{ ccNumber }}</p>
        </div>
        <div class="Box">
          <p>DELIVERY OPTION</p>
          <p>Standard delivery</p>
        </div>
      </div>
    </div>
    <div class="line" />

    <h5 class="h5Title orderSummeryh5">ORDER SUMMARY:</h5>
    <div class="orderSummeryContainer">
      <div class="cartContainer">
        <div class="cartItems" v-for="(item, index) in cartItems" :key="index">
          <div class="itemRow">
            <div>
              <img class="productImg" :src="item.image" :alt="item.name" />
            </div>
            <div class="productInfo">
              <span class="name">{{ item.name }}</span>
              <span class="price">{{ item.price }} :- </span>
            </div>
          </div>
        </div>
      </div>
      <div class="totalContainer">
        <div class="total">
          <p class="font">Total:</p>
          <p class="font" id="discount-active" v-if="discountActive">
            {{ total }};-
          </p>
          <p class="font" v-else>{{ total }};-</p>
          <p v-if="discountActive" class="font total-discount">{{ total }};-</p>
        </div>
      </div>
    </div>
    <div class="line" />
    <div class="totalSum">
      <div class="totals">
        <p class="totalsumdeliv totalp">Total:</p>
        <div class="nr">
          <p id="discount-active" v-if="discountActive">{{ total }} :-</p>
          <p v-else>{{ total }};-</p>
          <p v-if="discountActive" class="total-discount">{{ total }} :-</p>
        </div>
      </div>

      <div class="delivery">
        <p class="totalsumdeliv delvp">Delivery:</p>
        <div class="nr">
          <p>{{ deliveryCost }};-</p>
        </div>
      </div>
      <div class="totalplussdeliv">
        <p class="totalsumdeliv">TOTAL:</p>
        <div class="nr">
          <p>{{ delvPlussTotal }};-</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .delvp {
    padding-right: 5px;
  }
  .totalp {
    padding-right: 30px;
  }

  .nr {
    display: flex;
    justify-content: end;
    align-items: flex-end;
    width: 10rem;
  }
  .font {
    padding: 0.5rem;
    font-size: 1.25rem;
  }
  .delivery {
    display: flex;
    flex-direction: row;
  }

  .totalSum {
    padding: 2rem;
    padding-right: 5rem;
    flex-direction: column;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
  .totalplussdeliv {
    display: flex;
    padding-top: 0.75rem;
    font-weight: 700;
  }
  .totals {
    display: flex;
  }
  p {
    margin-right: 1rem;
  }
  /*  .total {
    display: flex;
    justify-content: end;
    align-items: flex-end;
    margin: 2rem 6rem 2rem 0rem;
  } */
  .totalContainer {
    padding-right: 10%;
  }

  .total-discount {
    margin-left: 10px;
  }
  .name {
    font-size: 1rem;
    font-weight: 700;
  }
  .price {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  .productInfo {
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }

  .itemRow {
    display: flex;
    flex-direction: row;
    width: 50%;
    position: relative;
    margin: 0.5rem;
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
  .cartItems {
    width: 70%;
  }
  .orderSummeryContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 4rem;
  }

  .orderInformationContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(250, 245, 239);
    width: 100%;
    padding: 4rem;
    margin-top: 4rem;
  }

  .summaryBox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  h1 {
    margin: 2rem;
  }
  .line {
    border-bottom: 2px solid rgba(0, 0, 0, 0.334);
    margin-top: 5px;
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .OrderDetailsContainer {
    display: flex;
    flex-direction: column;
    margin-bottom: 10rem;
    padding-left: 12rem;
    padding-right: 12rem;
  }
  .h5Title {
    display: flex;
    justify-content: flex-start;
    justify-items: flex-start;
    padding-right: 1rem;
  }
  .orderIdInfoBox {
    padding-top: 2rem;
    margin-left: 2rem;
    display: flex;
    flex-direction: row;
  }

  p {
    margin: 0;
  }
  .buttonShow {
    margin: 5rem;

    font-size: 1rem;
  }
  .buttonDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;
  }
  .ordeIDp {
    padding-bottom: 1rem;
  }

  .Box {
    padding: 2rem;
  }
  .orderSummeryh5 {
    padding: 2rem;
  }
  @media screen and (max-width: 1000px) {
    .boxRight {
      padding-right: 0;
    }
    .orderInformationContainer {
      padding: 2rem;
      margin-top: 0.5rem;
    }
    .OrderDetailsContainer {
      padding-left: 5rem;
      padding-right: 5rem;
    }

    @media screen and (max-width: 769px) {
      .summaryBox {
        display: flex;
        flex-direction: column;
      }
      .buttonShow {
        margin: 3rem;
      }
      .orderSummeryContainer {
        display: flex;
        flex-direction: column;
        padding: 0;
      }
      .totalContainer {
        padding-top: 1rem;
        margin: 0;
        display: flex;
        justify-content: end;
        justify-items: end;
      }
      .OrderDetailsContainer {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
      }
      .productImg {
        max-width: 100px;
        max-height: 100px;

        object-fit: cover;
        transition: all 0.4;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
      }
      .totalSum {
        padding-right: 1rem;
      }
    }
  }
</style>
