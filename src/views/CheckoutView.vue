<script>
  export default {
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
        cartItems: []
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
      }
    }
  }
</script>
<template>
  <main>
    <div class="mainContainer">
      <div class="checkoutcontainer">
        <h1 class="h1Checkout">Checkout</h1>
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

          <button class="submitButton" type="submit">Place Order</button>
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
