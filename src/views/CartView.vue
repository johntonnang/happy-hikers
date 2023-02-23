<script>
  export default {
    data() {
      return {
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
      removeItem(index) {
        this.cartItems.splice(index, 1)
        localStorage.setItem('Cart', JSON.stringify(this.cartItems))
      }
    }
  }
</script>

<template>
  <main>
    <h1>Kundvagn</h1>
    <div class="container">
      <div class="cartBox">
        <div v-if="cartItems.length">
          <div
            class="cartItems"
            v-for="(item, index) in cartItems"
            :key="index"
          >
            <div class="itemRow">
              <div><img :src="item.image" :alt="item.name" /></div>
              <div class="productInfo">
                <span class="name">{{ item.name }}</span>
                <span class="price">{{ item.price }};- </span>
                <span class="description">{{ item.description }}</span>
                <button @click="removeItem(index)">Remove</button>
              </div>
            </div>
          </div>
          <div class="total">Total: {{ total }}</div>
        </div>
        <div v-else>Your cart is empty</div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  main {
    position: relative;
    top: 100px;
    width: 95%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    margin-bottom: 8rem;
  }
  main h1 {
    margin-left: 3rem;
  }
  .total {
    font-size: 2rem;
    display: flex;
    justify-content: end;
    align-items: flex-end;
  }
  .itemRow {
    display: flex;
    flex-direction: row;
  }
  .productInfo {
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }
  .container {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .name {
    font-size: 1.5rem;
  }
  .price {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  .cartItems {
    display: flex;
    width: 100%;
    margin: 0.5rem;
  }

  .cartItems img {
    max-width: 300px;
    max-height: 350px;
    width: 250px;
    height: 250px;
    object-fit: cover;
    transition: all 0.4;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  .cartItems button {
    width: 7rem;
    margin-top: 1rem;
  }
  @media (max-width: 800px) {
    .cartItems img {
      width: 150px;
      height: 150px;
      object-fit: cover;
      transition: all 0.4;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
    }
    .container {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    .description {
      display: none;
    }
    .cartItems button {
      width: 5rem;
      margin-top: 1rem;
    }
  }
</style>
