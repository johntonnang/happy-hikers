import { createStore } from 'vuex'

const mutations = {
  addToCart(state) {
    state.currentCart += 1
  },
  removeCart(state) {
    state.currentCart -= 1
  },
  addToWish(state) {
    state.currentWish += 1
  },
  resetCart(state) {
    state.currentCart = 0
  },
  removeWish(state) {
    state.currentWish -= 1
  },
  setEmail(state, email) {
    state.email = email
  },
  setAddress(state, address) {
    state.address = address
  },
  setCountry(state, country) {
    state.country = country
  },
  setName(state, firstName) {
    state.firstName = firstName
  },
  setorderId(state, orderId) {
    state.orderId = orderId
  },
  setCredit(state, credit) {
    state.credit = credit
  },
  setDebit(state, debit) {
    state.debit = debit
  },
  setLastName(state, lastName) {
    state.lastName = lastName
  },
  setPhone(state, phone) {
    state.phone = phone
  },
  setCcNumber(state, ccNumber) {
    state.ccNumber = ccNumber
  },
  setAddress2(state, address2) {
    state.address2 = address2
  },
  setStatee(state, statee) {
    state.statee = statee
  },
  setZip(state, zip) {
    state.zip = zip
  },
  setCcName(state, ccName) {
    state.ccName = ccName
  }
}
const actions = {},
  state = {
    cartItems: [],
    currentCart: 0,
    currentWish: 0,
    cart: [],
    email: '',
    firstName: '',
    address: '',
    country: '',
    statee: '',
    credit: '',
    debit: '',
    paypal: '',
    lastName: '',
    phone: '',
    ccNumber: '',
    address2: '',
    zip: '',
    ccName: '',
    orderId: null
  }

export default createStore({ mutations, state, strict: true, actions })
