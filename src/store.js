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
    }
  },
  state = {
    cartItems: [],
    currentCart: 0,
    currentWish: 0,
    cart: []
  }

export default createStore({ mutations, state, strict: true })
