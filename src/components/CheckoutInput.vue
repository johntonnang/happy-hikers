<script>
  export default {
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
      const existingEmail = localStorage.getItem('username')
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
    }
    /*
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
    }*/
    /*
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
*/
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
  <div :class="{ 'main-login-active': loginTrue }">
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
                <span class="price">{{ item.price }} :- </span>
              </div>
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
    </div>
  </div>
</template>

<style scoped>
  .main-login-active {
    opacity: 0.4;
  }

  .checkoutcontainer {
    display: flex;
    flex-direction: column;
    width: 50%;
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
    margin-left: 4rem;
    padding: 1.5rem;
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
    margin-right: 1.5rem;
    padding-bottom: 2rem;
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
    margin: 2rem;
    margin-top: 7rem;
    width: 100%;
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

  @media (max-width: 1100px) {
    .shoppingcartPreview {
      width: 40%;
      margin: 2rem;
      margin-top: 7rem;
    }
    .login-container svg {
      left: 65%;
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
