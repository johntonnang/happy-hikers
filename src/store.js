import { createStore } from 'vuex'

const mutations = {
  addToCart(state) {
    state.currentCart += 1
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
  setName(state, firstName) {
    console.log('setName', state, firstName)
    state.firstName = firstName
  }
}
const actions = {},
  state = {
    cartItems: [],
    currentCart: 0,
    currentWish: 0,
    cart: [],
    email: '',
    firstName: ''
  }

export default createStore({ mutations, state, strict: true, actions })
