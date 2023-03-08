<script>
  import { mapActions } from 'vuex'

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
      ...mapActions(['setEmail', 'setName']),
      sendData() {
        this.$store.commit('setEmail', this.email)
        this.$store.commit('setName', this.firstName)
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
        console.log(data)
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
                v-model="firstName"
                type="text"
                class="form-control"
                id="firstName"
                placeholder=""
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
              v-model="email"
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
