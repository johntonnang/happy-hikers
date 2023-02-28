import { createStore } from 'vuex'

const mutations = {
    increment(state) {
      state.counter += 1
    }
  },
  state = {
    counter: 0,
    cartItems: []
  }

export default createStore({ mutations, state, strict: true, cart: [] })
