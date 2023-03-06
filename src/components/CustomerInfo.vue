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
        cvv: ''
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
    }
  }
</script>

<template>
  <form class="formContainer" @submit.prevent="submitOrder">
    <fieldset class="custom">
      <legend>Custom Information</legend>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="profileName" required />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="profileEmail" required />

      <label for="phone">Phone:</label>
      <input type="tel" id="phone" v-model="profilePhone" required />
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
      <PaymentInput />
    </fieldset>

    <div class="saveInfo">
      <input type="checkbox" v-model="saveData" />
      <p class="saveInfoP">Save my Information</p>
    </div>
    <RouterLink to="/ConfirmationView">
      <button class="submitButton" @click="addOrderToProfile" type="submit">
        Place Order
      </button>
    </RouterLink>
  </form>
</template>

<style scoped>
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

  .name {
    font-size: 1rem;
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
</style>
