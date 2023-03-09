<script>
  import { mapActions } from 'vuex'
  import { useVuelidate } from '@vuelidate/core'
  import {
    required,
    email,
    maxLength,
    minLength,
    alpha,
    alphaNum,
    numeric
  } from '@vuelidate/validators'

  export default {
    setup() {
      return { v$: useVuelidate() }
    },
    validations() {
      return {
        firstName: { required, alpha },
        lastName: { required, alpha },
        email: { required, email },
        address: { required, alphaNum },
        country: { required },
        statee: { required, alpha },
        zip: { required, minLength: minLength(4), numeric },
        ccNumber: {
          required,
          maxLength: maxLength(16),
          minLength: minLength(16),
          numeric
        },
        ccName: { required, minLength: minLength(3), alpha },
        ccExpiration: { required, numeric },
        ccCvv: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(3),
          numeric
        }
      }
    },
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        address2: '',
        country: '',
        statee: '',
        zip: '',
        phone: '',
        sameaddress: '',
        saveInfo: '',
        credit: '',
        debit: '',
        paypal: '',
        ccNumber: '',
        ccName: '',
        ccExpiration: '',
        ccCvv: '',
        saveData: false
      }
    },
    created() {
      const data = localStorage.getItem('data')

      if (data) {
        const savedData = JSON.parse(data)
        this.firstName = savedData.firstName
        this.lastName = savedData.lastName
        this.email = savedData.email
        this.phone = savedData.phone
        this.address = savedData.address
        this.address2 = savedData.address2
        this.country = savedData.country
        this.statee = savedData.statee
        this.zip = savedData.zip
        this.sameaddress = savedData.sameaddress
        this.saveInfo = savedData.saveInfo
        this.credit = savedData.credit
        this.ccName = savedData.ccName
        this.debit = savedData.debit
        this.paypal = savedData.paypal
        this.ccNumber = savedData.ccNumber
        this.ccExpiration = savedData.ccExpiration
        this.ccCvv = savedData.ccCvv
        this.saveData = savedData.saveData
      }
    },
    methods: {
      ...mapActions([
        'setEmail',
        'setName',
        'setAddress',
        'setCountry',
        'setStatee',
        'setCredit',
        'setDebit',
        'setPaypal',
        'setLastName',
        'setPhone',
        'setCcName',
        'setCcNumber',
        'setAddress2',
        'setZip'
      ]),
      async sendData() {
        console.log('v', this.v$)
        // Validate before submitting to vuex store + local storage.
        const result = await this.v$.$validate()
        if (!result) {
          return
        }
        this.$store.commit('setEmail', this.email)
        this.$store.commit('setName', this.firstName)
        this.$store.commit('setAddress', this.address)
        this.$store.commit('setCountry', this.country)
        this.$store.commit('setStatee', this.statee)
        this.$store.commit('setCredit', this.credit)
        this.$store.commit('setDebit', this.debit)
        this.$store.commit('setPaypal', this.paypal)
        this.$store.commit('setLastName', this.lastName)
        this.$store.commit('setPaypal', this.paypal)
        this.$store.commit('setPhone', this.phone)
        this.$store.commit('setCcNumber', this.ccNumber)
        this.$store.commit('setAddress2', this.address2)
        this.$store.commit('setZip', this.zip)
        this.$store.commit('setCcname', this.ccName)
        const data = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phone: this.phone,
          address: this.address,
          address2: this.address2,
          country: this.country,
          statee: this.statee,
          zip: this.zip,
          sameaddress: this.sameaddress,
          saveInfo: this.saveInfo,
          credit: this.credit,
          ccName: this.ccName,
          debit: this.debit,
          paypal: this.paypal,
          ccNumber: this.ccNumber,
          ccExpiration: this.ccExpiration,
          ccCvv: this.ccCvv,
          saveData: this.saveData
        }

        if (this.saveData) {
          localStorage.setItem('data', JSON.stringify(data))
        } else {
          localStorage.removeItem('data')
        }

        this.$router.push('/ConfirmationView')
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
        <h4 class="mb-3">Customer information</h4>
        <form class="needs-validation" novalidate="">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="firstName">First name</label>

              <input
                v-model="firstName"
                type="text"
                class="form-control"
                :class="{
                  invalid: v$.firstName.$dirty && v$.firstName.$invalid
                }"
                id="firstName"
                placeholder=""
                required=""
              />

              <div
                v-if="v$.firstName.$dirty && v$.firstName.$invalid"
                class="error"
              >
                Valid first name is required.
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="lastName">Last name</label>
              <input
                v-model="lastName"
                type="text"
                class="form-control"
                :class="{
                  invalid: v$.lastName.$dirty && v$.lastName.$invalid
                }"
                id="lastName"
                placeholder=""
                required=""
              />
              <div
                v-if="v$.lastName.$dirty && v$.lastName.$invalid"
                class="error"
              >
                Valid last name is required.
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label for="email">Email <span class="text-muted" /></label>
            <input
              v-model="email"
              type="email"
              class="form-control"
              :class="{
                invalid: v$.email.$dirty && v$.email.$invalid
              }"
              id="email"
              placeholder="you@example.com"
              required=""
            />
            <div v-if="v$.email.$dirty && v$.email.$invalid" class="error">
              Please enter a valid email address for shipping updates.
            </div>
          </div>
          <div class="mb-3">
            <label for="address">Address</label>
            <input
              v-model="address"
              type="text"
              class="form-control"
              :class="{
                invalid: v$.address.$dirty && v$.address.$invalid
              }"
              id="address"
              placeholder="1234 Main St"
              required=""
            />
            <div v-if="v$.address.$dirty && v$.address.$invalid" class="error">
              Please enter your shipping address.
            </div>
          </div>
          <div class="mb-3">
            <label for="address2"
              >Address 2 <span class="text-muted">(Optional)</span></label
            >
            <input
              v-model="address2"
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
                v-model="country"
                class="custom-select d-block w-100"
                :class="{
                  invalid: v$.country.$dirty && v$.country.$invalid
                }"
                id="country"
                required=""
              >
                <option value="">Choose...</option>
                <option>Sweden</option>
                <option>Norway</option>
                <option>France</option>
              </select>
              <div
                v-if="v$.country.$dirty && v$.country.$invalid"
                class="error"
              >
                Please select a country.
              </div>
            </div>

            <div class="col-md-4 mb-3">
              <label for="statee">State</label>
              <input
                v-model="statee"
                type="text"
                class="form-control"
                :class="{
                  invalid: v$.statee.$dirty && v$.statee.$invalid
                }"
                id="statee"
                placeholder=""
                required=""
              />
              <div v-if="v$.statee.$dirty && v$.statee.$invalid" class="error">
                State is required.
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="zip">Zip</label>
              <input
                v-model="zip"
                type="text"
                class="form-control"
                :class="{
                  invalid: v$.zip.$dirty && v$.zip.$invalid
                }"
                id="zip"
                placeholder=""
                required=""
              />
              <div v-if="v$.zip.$dirty && v$.zip.$invalid" class="error">
                Zip code required.
              </div>
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
                v-model="credit"
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
                v-model="debit"
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
                v-model="paypal"
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
              <label for="ccName">Name on card</label>
              <input
                v-model="ccName"
                type="text"
                class="form-control"
                :class="{
                  invalid: v$.ccName.$dirty && v$.ccName.$invalid
                }"
                id="ccName"
                placeholder=""
                required=""
              />
              <small class="text-muted">Full name as displayed on card</small>
              <div v-if="v$.ccName.$dirty && v$.ccName.$invalid" class="error">
                Name on card is required
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="ccNumber">Credit card number</label>
              <input
                v-model="ccNumber"
                type="text"
                class="form-control"
                :class="{
                  invalid: v$.ccNumber.$dirty && v$.ccNumber.$invalid
                }"
                id="ccNumber"
                placeholder=""
                required=""
              />
              <div
                v-if="v$.ccNumber.$dirty && v$.ccNumber.$invalid"
                class="error"
              >
                Credit card number consisting og 16 nr. is required
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 mb-3">
              <label for="ccExpiration">Expiration</label>
              <input
                v-model="ccExpiration"
                type="text"
                class="form-control"
                :class="{
                  invalid: v$.ccExpiration.$dirty && v$.ccExpiration.$invalid
                }"
                id="ccExpiration"
                placeholder=""
                required=""
              />
              <div
                v-if="v$.ccExpiration.$dirty && v$.ccExpiration.$invalid"
                class="error"
              >
                Expiration date required
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="ccCvv">CVV</label>
              <input
                v-model="ccCvv"
                type="text"
                class="form-control"
                :class="{
                  invalid: v$.ccCvv.$dirty && v$.ccCvv.$invalid
                }"
                id="ccCvv"
                placeholder=""
                required=""
              />
              <div v-if="v$.ccCvv.$dirty && v$.ccCvv.$invalid" class="error">
                Security code required
              </div>
            </div>
          </div>
          <hr class="mb-4" />

          <button
            @click.prevent="sendData"
            class="btn btn-dark btn-lg btn-block submitButton"
            type="submit"
          >
            Continue to checkout
          </button>
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
  .invalid {
    border: none;
    outline: 1px solid red;
    border-radius: 5px;
  }
  .error {
    font-size: 0.8rem;
    color: red;
  }
</style>
