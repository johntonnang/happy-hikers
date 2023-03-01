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
    <h1>Shopping cart</h1>
    <div class="container">
      <div class="cartBox">
        <div v-if="cartItems.length">
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
                <img
                  class="trashImg"
                  @click="removeItem(index)"
                  src="/assets/trash-can-solid.svg"
                  alt="trash can"
                  width="20"
                />
                <span class="price">{{ item.price }};- </span>
                <span class="description">{{ item.description }}</span>
              </div>
            </div>
          </div>
          <div class="total">Total: {{ total }}</div>
          <div class="checkoutCointainer">
            <RouterLink to="/CheckoutView">
              <button class="checkout">Checkout</button>
            </RouterLink>
          </div>
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
    width: 100%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    margin-bottom: 8rem;
  }
  main h1 {
    margin-left: 8rem;
  }
  .total {
    font-size: 2rem;
    display: flex;
    justify-content: end;
    align-items: flex-end;
    margin: 2rem;
  }
  .itemRow {
    display: flex;
    flex-direction: row;
    max-width: 90%;
    position: relative;
    margin-top: 1rem;
    box-shadow: 0px 46px 130px rgba(0, 25, 64, 0.142);
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

  .productImg {
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
  .trashImg {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  .trashImg:hover {
    cursor: pointer;
  }
  .checkout {
    width: 20rem;
    color: white;
    background-color: black;
    border-radius: 35px;
    border: none;
    cursor: pointer;
    padding: 15px 15px;
    font-size: medium;
    margin: 0.5rem;
  }
  .checkoutCointainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 600px) {
    .productImg {
      width: 150px;
      height: 150px;
      object-fit: cover;
      transition: all 0.4;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
    }
    .total {
      font-size: 1.5rem;
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
      width: 90%;
      position: relative;
    }
    .container {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    .description {
      display: none;
    }
  }
  @media (max-width: 760px) {
    .productImg {
      object-fit: cover;
      transition: all 0.4;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
    }

    .description {
      font-size: 12px;
    }
  }
  @media (max-width: 980px) {
    .itemRow {
      display: flex;
      flex-direction: row;
      background-color: rgb(246, 245, 245);
      max-width: 100%;
      position: relative;
    }
    .container {
      margin: none;
    }
  }
</style>
