<script>
  import LoginProfile from '../components/LoginProfile.vue'

  export default {
    components: {
      LoginProfile
    },

    data() {
      return {
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        card: '',
        exp: '',
        cvv: '',
        cartItems: [],
        orders: [],
        temp: [],
        order: [],
        saveData: false
      }
    },

    computed: {
      total() {
        return this.cartItems.reduce((x, item) => x + item.price, 0)
      }
    },
    mounted() {
      let cart = localStorage.getItem('Cart')
      if (cart !== null) {
        this.cartItems = JSON.parse(cart)
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
      submitOrder() {
        // Sende til server som vi ikke har :)
        this.name = ''
        this.email = ''
        this.phone = ''
        this.address = ''
        this.city = ''
        this.state = ''
        this.zip = ''
        this.card = ''
        this.exp = ''
        this.cvv = ''
      },
      addOrderToProfile() {
        if (
          this.name &&
          this.email.includes('@') &&
          this.email.includes('.') &&
          this.phone &&
          this.address &&
          this.city &&
          this.state &&
          this.zip &&
          this.card &&
          this.exp &&
          this.cvv
        ) {
          if (localStorage.getItem('Orders')) {
            this.order = JSON.parse(localStorage.getItem('Cart'))
            this.orders = JSON.parse(localStorage.getItem('Orders'))
            this.orders.push(this.order)
            localStorage.setItem('Orders', JSON.stringify(this.orders))
            localStorage.removeItem('Cart')
          } else {
            this.order = JSON.parse(localStorage.getItem('Cart'))
            this.orders.unshift(this.order)
            localStorage.setItem('Orders', JSON.stringify(this.orders))
            localStorage.removeItem('Cart')
          }
        }
      },
      sendData() {
        const data = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          address: this.address,
          city: this.city,
          state: this.state,
          zip: this.zip,
          card: this.card,
          exp: this.exp,
          cvv: this.cvv
        }
        if (this.saveData) {
          localStorage.setItem('data', JSON.stringify(data))
        } else {
          localStorage.removeItem('data')
        }
      }
    },
    submitOrder() {
      // Sende til server som vi ikke har :)
      this.name = ''
      this.email = ''
      this.phone = ''
      this.address = ''
      this.city = ''
      this.state = ''
      this.zip = ''
      this.card = ''
      this.exp = ''
      this.cvv = ''
    }

    /*saveInfo() {
      localStorage.setItem(
        'checkoutInfo',
        JSON.stringify({
          name: this.name,
          email: this.email,
          phone: this.phone,
          address: this.address,
          city: this.city,
          state: this.state,
          zip: this.zip,
          card: this.card,
          exp: this.exp,
          cvv: this.cvv
        })
      )
      localStorage.name = this.name
    }*/
  }
</script>
<template>
  <main>
    <LoginProfile />
    <div class="mainContainer">
      <div class="checkoutcontainer">
        <h1 class="h1Checkout">Checkout</h1>
        <div id="login-check-container">
          <h2>Har du redan ett konto?</h2>
          <span> Logga in</span>
        </div>
        <form class="formContainer" @submit.prevent="submitOrder">
          <fieldset class="custom">
            <legend>Custom Information</legend>
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name" required />

            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required />

            <label for="phone">Phone:</label>
            <input type="tel" id="phone" v-model="phone" required />
          </fieldset>

          <fieldset class="shipping">
            <legend>Shipping Details</legend>
            <label for="address">Address:</label>
            <textarea id="address" v-model="address" required />

            <label for="city">City:</label>
            <input type="text" id="city" v-model="city" required />

            <label for="state">State:</label>
            <input type="text" id="state" v-model="state" required />

            <label for="zip">ZIP Code:</label>
            <input type="text" id="zip" v-model="zip" required />
          </fieldset>

          <fieldset class="payment">
            <legend>Payment Information</legend>
            <label for="card">Credit Card Number:</label>
            <input type="text" id="card" v-model="card" required />

            <label for="exp">Expiration Date:</label>
            <input type="month" id="exp" v-model="exp" required />

            <label for="cvv">CVV:</label>
            <input type="text" id="cvv" v-model="cvv" required />
          </fieldset>

          <button class="submitButton" @click="addOrderToProfile" type="submit">
            <div class="saveInfo">
              <input type="checkbox" v-model="saveData" />
              <p class="saveInfoP">Save my Information</p>
            </div>
            <button class="submitButton" @click="sendData" type="submit">
              Place Order
            </button>
          </button>
        </form>
      </div>
      <div class="shoppingcartPreview">
        <div class="container">
          <h1 class="previewh">Shopping cart preview</h1>
          <div class="cartBox">
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
                  <span class="price">{{ item.price }};- </span>
                </div>
              </div>
            </div>
          </div>
          <div class="total">Total: {{ total }}</div>
        </div>
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
  .checkoutcontainer {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: 2rem;
  }

  #login-check-container {
    display: flex;
    align-items: center;
    margin-left: 15px;
    font-size: 1.1rem;
  }

  #login-check-container h2 {
    font-size: 1.2rem;
    margin-bottom: 0px;
  }

  #login-check-container span {
    margin-left: 5px;
    text-decoration: underline;
    font-weight: 600;
  }

  #login-check-container span:hover {
    cursor: pointer;
    opacity: 0.7;
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
    margin-left: 4rem;
    margin-bottom: 4rem;
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
    box-shadow: 0px 46px 130px rgba(0, 25, 64, 0.142);
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
  @media (max-width: 1100px) {
    .shoppingcartPreview {
      width: 40%;
      margin: 2rem;
      margin-top: 7rem;
    }
  }

  @media (max-width: 760px) {
    .mainContainer {
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between;
    }
    .shoppingcartPreview {
      width: 90%;
      margin-top: 2rem;
      margin-left: 1rem;
    }
    .checkoutcontainer {
      display: flex;
      flex-direction: column;
      width: 90%;
      margin-left: 2rem;
    }
  }
</style>

<!-- <div id="app">
  <label for="name-input">Name:</label>
  <input type="text" id="name-input" v-model="name">
  <label for="address-input">Address:</label>
  <input type="text" id="address-input" v-model="address">
  <label for="number-input">Number:</label>
  <input type="number" id="number-input" v-model="number">
  <label>
    <input type="checkbox" v-model="saveData">
    Save data to local storage
  </label>
  <button @click="sendData">Send</button>
</div>

new Vue({ el: "#app", data: { name: "", address: "", number: null, saveData:
false, }, methods: { sendData() { const data = { name: this.name, address:
this.address, number: this.number, }; if (this.saveData) {
localStorage.setItem("data", JSON.stringify(data)); } else {
localStorage.removeItem("data"); } alert("Data sent!"); }, }, }); -->
