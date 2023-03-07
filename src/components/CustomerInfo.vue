<script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        address2: '',
        country: '',
        state: '',
        zip: '',
        sameaddress: '',
        saveInfo: '',
        credit: '',
        debit: '',
        paypal: '',
        ccNumber: '',
        ccExpiration: '',
        ccCvv: '',
        saveData: false
      }
    },
    methods: {
      sendData() {
        const data = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phone: this.phone,
          address: this.address,
          address2: this.address2,
          country: this.country,
          state: this.state,
          zip: this.zip,
          sameaddress: this.sameaddress,
          saveInfo: this.saveInfo,
          credit: this.credit,
          debit: this.debit,
          paypal: this.paypal,
          ccNumber: this.ccNumber,
          ccExpiration: this.ccExpiration,
          ccCvv: this.ccCvv
        }
        if (this.saveData) {
          localStorage.setItem('data', JSON.stringify(data))
        } else {
          localStorage.removeItem('data')
        }
      },
      submitForm(event) {
        if (event.target.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        event.target.classList.add('was-validated')
      }
    }
  }
</script>

<template>
  <div
    class="container needs-validation"
    @submit.prevent="submitForm"
    novalidate
  >
    <div class="row">
      <div class="col-md-10 order-md-1">
        <h2>Checkout</h2>
        <h4 class="mb-3">Billing address</h4>
        <form class="needs-validation" novalidate="">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="firstName">First name</label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                placeholder=""
                value=""
                required=""
              />
              <div class="invalid-feedback">Valid first name is required.</div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="lastName">Last name</label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                placeholder=""
                value=""
                required=""
              />
              <div class="invalid-feedback">Valid last name is required.</div>
            </div>
          </div>

          <div class="mb-3">
            <label for="email"
              >Email <span class="text-muted">(Optional)</span></label
            >
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="you@example.com"
            />
            <div class="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>
          <div class="mb-3">
            <label for="address">Address</label>
            <input
              type="text"
              class="form-control"
              id="address"
              placeholder="1234 Main St"
              required=""
            />
            <div class="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>
          <div class="mb-3">
            <label for="address2"
              >Address 2 <span class="text-muted">(Optional)</span></label
            >
            <input
              type="text"
              class="form-control"
              id="address2"
              placeholder="Apartment or suite"
            />
          </div>
          <div class="row">
            <div class="col-md-5 mb-3">
              <label for="country">Country</label>
              <select
                class="custom-select d-block w-100"
                id="country"
                required=""
              >
                <option value="">Choose...</option>
                <option>Sweden</option>
                <option>Norway</option>
                <option>France</option>
              </select>
              <div class="invalid-feedback">Please select a valid country.</div>
            </div>

            <div class="col-md-4 mb-3">
              <label for="state">State</label>
              <input
                type="text"
                class="form-control"
                id="state"
                placeholder=""
                required=""
              />
              <div class="invalid-feedback">Zip code required.</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="zip">Zip</label>
              <input
                type="text"
                class="form-control"
                id="zip"
                placeholder=""
                required=""
              />
              <div class="invalid-feedback">Zip code required.</div>
            </div>
          </div>
          <hr class="mb-4" />
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="sameAddress"
            />
            <label class="custom-control-label" for="sameAddress"
              >Shipping address is the same as my billing address</label
            >
          </div>
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              v-model="saveData"
              class="custom-control-input"
              id="saveInfo"
            />
            <label class="custom-control-label" for="saveInfo"
              >Save this information for next time</label
            >
          </div>
          <hr class="mb-4" />
          <h4 class="mb-3">Payment</h4>
          <div class="d-block my-3">
            <div class="custom-control custom-radio">
              <input
                id="credit"
                name="paymentMethod"
                type="radio"
                class="custom-control-input"
                checked=""
                required=""
              />
              <label class="custom-control-label" for="credit"
                >Credit card</label
              >
            </div>
            <div class="custom-control custom-radio">
              <input
                id="debit"
                name="paymentMethod"
                type="radio"
                class="custom-control-input"
                required=""
              />
              <label class="custom-control-label" for="debit">Debit card</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                id="paypal"
                name="paymentMethod"
                type="radio"
                class="custom-control-input"
                required=""
              />
              <label class="custom-control-label" for="paypal">PayPal</label>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="cc-name">Name on card</label>
              <input
                type="text"
                class="form-control"
                id="cc-name"
                placeholder=""
                required=""
              />
              <small class="text-muted">Full name as displayed on card</small>
              <div class="invalid-feedback">Name on card is required</div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="ccNumber">Credit card number</label>
              <input
                type="text"
                class="form-control"
                id="ccNumber"
                placeholder=""
                required=""
              />
              <div class="invalid-feedback">Credit card number is required</div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 mb-3">
              <label for="ccExpiration">Expiration</label>
              <input
                type="text"
                class="form-control"
                id="ccExpiration"
                placeholder=""
                required=""
              />
              <div class="invalid-feedback">Expiration date required</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="ccCvv">CVV</label>
              <input
                type="text"
                class="form-control"
                id="ccCvv"
                placeholder=""
                required=""
              />
              <div class="invalid-feedback">Security code required</div>
            </div>
          </div>
          <hr class="mb-4" />
          <RouterLink to="/ConfirmationView">
            <button
              @click="sendData"
              class="btn btn-dark btn-lg btn-block submitButton"
              type="submit"
            >
              Continue to checkout
            </button>
          </RouterLink>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .btn-dark {
    margin: 1rem;
  }
  h2 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .container {
    width: 100%;
  }
  .row {
    width: 100%;
  }

  .lh-condensed {
    line-height: 1.25;
  }
  .col-md-8 .order-md-1 {
    width: 60%;
  }
  .custom-control-label {
    margin: 0.5rem;
  }
</style>

<!--<script>
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




-->
