<script>
  import LoginProfile from '../components/LoginProfile.vue'
  import CheckoutInput from '../components/CheckoutInput.vue'
  import CustomerInfo from '../components/CustomerInfo.vue'
  export default {
    components: {
      LoginProfile,
      CheckoutInput,
      CustomerInfo
    },
    data() {
      return {
        cartItems: [],
        orders: [],
        temp: [],
        order: [],
        saveData: false,
        existingUser: false,
        profileName: '',
        profileEmail: '',
        profilePhone: '',
        addPoints: 0,
        loginTrue: false,
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
      const existingUser = localStorage.getItem('existing-user')
      const registredUser = localStorage.getItem('registred-user')
      if (localStorage.getItem('discountActive')) {
        this.discountActive = true
      }
      if (registredUser && !existingUser) {
        this.registredUser = true
        this.loginTrue = true
      }
      let cart = localStorage.getItem('Cart')
      const existingUsername = localStorage.getItem('name')
      const existingEmail = localStorage.getItem('email')
      const existingPhone = localStorage.getItem('phone')
      if (existingUser) {
        this.existingUser = true
        this.profileName = existingUsername
        this.profileEmail = existingEmail
        this.profilePhone = existingPhone
      }
      if (cart !== null) {
        this.cartItems = JSON.parse(cart)
        this.totalValue = this.cartItems.reduce((x, item) => x + item.price, 0)
      }
      const savedData = localStorage.getItem('data')
      if (savedData) {
        const {
          name,
          address,
          number,
          email,
          phone,
          city,
          state,
          zip,
          card,
          exp,
          cvv
        } = JSON.parse(savedData)
        this.name = name
        this.email = email
        this.phone = phone
        this.address = address
        this.city = city
        this.state = state
        this.zip = zip
        this.card = card
        this.exp = exp
        this.cvv = cvv
        this.number = number
        this.saveData = true
      }
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
      loginActive() {
        if (!this.loginTrue) {
          this.loginTrue = true
        } else {
          this.loginTrue = false
        }
      }
      // addOrderToProfile() {
      //   if (
      //     this.address &&
      //     this.city &&
      //     this.state &&
      //     this.zip &&
      //     this.card &&
      //     this.exp &&
      //     this.cvv
      //   ) {
      //     this.order = this.account.cart
      //     this.orders = this.account.orders
      //     this.orders.push(this.order)
      //     let profilePoints = Number(this.account.profilePoints)
      //     for (let i = 0; i < this.order.length; i++) {
      //       profilePoints += 197
      //     }
      //     setDoc(doc(db, 'konto', this.account.id), {
      //       id: this.account.id,
      //       email: this.account.email,
      //       password: this.account.password,
      //       name: this.account.name,
      //       phone: this.account.phone,
      //       registredUser: this.account.registredUser,
      //       wishlist: this.account.wish,
      //       cart: [],
      //       orders: this.orders,
      //       profilePoints: profilePoints
      //     })
      //     localStorage.setItem('ProfilePoints', profilePoints)

      //     // localStorage.setItem('Orders', JSON.stringify(this.orders))
      //     // localStorage.removeItem('Cart')
      //     localStorage.removeItem('discountActive')
      //     this.$store.commit('resetCart')
      //   } else {
      //     this.order = JSON.parse(localStorage.getItem('Cart'))
      //     for (let i = 0; i < this.order.length; i++) {
      //       this.addPoints += 197
      //     }
      //     localStorage.setItem('ProfilePoints', this.addPoints)
      //     this.orders.unshift(this.order)
      //     localStorage.setItem('Orders', JSON.stringify(this.orders))
      //     localStorage.removeItem('Cart')
      //     localStorage.removeItem('discountActive')
      //     this.$store.commit('resetCart')
      //   }
      //   const data = {
      //     name: this.name,
      //     email: this.email,
      //     phone: this.phone,
      //     address: this.address,
      //     city: this.city,
      //     state: this.state,
      //     zip: this.zip,
      //     card: this.card,
      //     exp: this.exp,
      //     cvv: this.cvv
      //   }
      //   if (this.saveData) {
      //     localStorage.setItem('data', JSON.stringify(data))
      //   } else {
      //     localStorage.removeItem('data')
      //   }
      // }
    }
  }
</script>
<template>
  <main>
    <div class="checkoutcontainer">
      <div
        v-if="loginTrue"
        class="login-container"
        :class="{ 'login-container-active': loginTrue }"
      >
        <svg
          class="svg-icon"
          @click="loginActive()"
          style="
            width: 32px;
            height: 32px;
            vertical-align: middle;
            fill: currentColor;
            overflow: hidden;
            margin-left: auto;
            margin-top: 3px;
          "
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"
          />
        </svg>
        <LoginProfile />
      </div>
      <div :class="{ 'main-login-active': loginTrue }">
        <div class="login-check-container" v-if="existingUser">
          <h2>Logged in as</h2>
          <span>
            <RouterLink to="/Profile">{{ this.profileEmail }}</RouterLink>
          </span>
        </div>

        <div class="login-check-container" v-else>
          <h2>Already have an account?</h2>
          <span @click="loginActive()"> Log in</span>
        </div>

        <form class="formContainer" @submit.prevent="submitOrder" />
      </div>
      <div class="componentDiv">
        <customer-info class="customerInfo" />
        <checkout-input class="checkoutInput" />
      </div>
    </div>
  </main>
</template>

<style scoped>
  main {
    position: relative;
    top: 150px;
    width: 100%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    margin-bottom: 10rem;
  }
  .componentDiv {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .checkoutInput {
    padding-bottom: 1rem;
    display: flex;
    justify-content: flex-end;
    width: 30%;
  }
  .customerInfo {
    margin: 1rem;
    display: flex;
    justify-content: flex-start;
    width: 65%;
  }
  .main-login-active {
    opacity: 0.4;
  }
  .checkoutcontainer {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
  }
  .login-container {
    position: fixed;
    top: 100px;
    left: 0;
    width: 100%;
    transition: 1s ease-in-out;
    opacity: 0;
    z-index: -99;
  }
  .login-container-active {
    opacity: 1;
    z-index: 99;
  }
  .login-container svg {
    position: absolute;
    left: 60%;
    top: 1.5%;
  }
  .login-container svg:hover {
    cursor: pointer;
  }
  .login-check-container {
    display: flex;
    align-items: center;
    margin-left: 15px;
    font-size: 1.1rem;
  }
  .login-check-container h2 {
    font-size: 1.2rem;
    margin-bottom: 0px;
  }
  .login-check-container span {
    margin-left: 5px;
    margin-top: 1px;
    font-weight: 600;
  }
  .login-check-container a {
    text-decoration: underline;
    font-weight: 600;
    color: rgb(14, 14, 14);
  }
  .login-check-container span:hover {
    cursor: pointer;
    opacity: 0.9;
  }
  .formContainer {
    max-width: 90%;
    display: flex;
    flex-direction: column;
  }
  .custom {
    margin: 1rem;
    display: flex;
    flex-direction: column;
  }
  .shipping {
    margin: 1rem;
    display: flex;
    flex-direction: column;
  }
  .payment {
    max-width: 70%;
    margin: 1rem;
    display: flex;
    flex-direction: column;
  }
  input,
  textarea {
    border-width: 2px;
    border-style: inset;
    border-color: black;
    border-image: initial;
  }
  .submitButton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    margin: 2rem;
  }
  .productImg {
    width: 150px;
    height: 150px;
    object-fit: cover;
    transition: all 0.4;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  .total {
    display: flex;
    justify-content: end;
    align-items: flex-end;
    font-size: 1.5rem;
    margin-left: 0rem;
    margin-bottom: 0rem;
    padding: 1.5rem;
  }

  .name {
    font-size: 1rem;
  }
  .cartItems {
    display: flex;
    width: 100%;
  }
  .itemRow {
    display: flex;
    flex-direction: row;
    background-color: rgb(246, 245, 245);
    width: 95%;
    position: relative;
    margin: 0.5rem;
  }
  .description {
    display: none;
  }
  .mainContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .shoppingcartPreview {
    width: 30%;
    margin: 2rem;
    margin-top: 7rem;
  }
  .previewh {
    font-size: 1.5rem;
    margin-left: 1rem;
    margin: 2rem;
    padding-top: 2rem;
  }
  .productInfo {
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }
  .container {
    padding-top: 2rem;
    box-shadow: 0px 46px 130px rgba(0, 25, 64, 0.142);
    border-radius: 5px;
  }
  .h1Checkout {
    margin: 1.5rem;
  }
  .submitButton {
    width: 10rem;
    color: white;
    background-color: black;
    border-radius: 35px;
    border: none;
    cursor: pointer;
    padding: 15px 15px;
    font-size: medium;
    margin: 1rem;
  }
  .saveInfo {
    display: flex;
    flex-direction: row;
    margin: 1rem;
    align-items: center;
  }
  .saveInfoP {
    margin-top: 1rem;
    margin-left: 0.5rem;
  }
  @media (max-width: 1600px) {
    .login-container svg {
      left: 66%;
    }
  }
  @media (max-width: 1260px) {
    .total h2 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 1100px) {
    .mainContainer {
      display: flex;
      justify-content: space-between;
    }

    .componentDiv {
      display: flex;
      flex-direction: column-reverse;
    }
    .customerInfo {
      width: 90%;
      margin-bottom: 5rem;
    }
    .checkoutInput {
      width: 90%;
    }
    .shoppingcartPreview {
      width: 90%;
      margin-top: 2rem;
      margin-left: 1rem;
    }
    .checkoutcontainer {
      display: flex;
      flex-direction: column;
      margin-left: 0.5rem;
    }

    .login-container svg {
      left: 65%;
    }
  }
  @media (max-width: 760px) {
    .login-container svg {
      left: 85%;
    }
  }
  @media (max-width: 530px) {
    .login-container svg {
      left: 80%;
      top: 2%;
    }
  }
</style>
