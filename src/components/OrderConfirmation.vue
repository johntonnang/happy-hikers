<script>
  import { mapState } from 'vuex'

  export default {
    data() {
      return {
        orderId: ''
      }
    },
    created() {
      this.generateOrderId()
    },
    methods: {
      generateOrderId() {
        const id = Math.random().toString(36).substr(2, 9)
        this.orderId = id
      }
    },
    computed: {
      ...mapState(['email', 'firstName'])
    }
  }
</script>

<template>
  <div class="orderInformationContainer">
    <h1>THANK YOU!</h1>
    <p>
      Thank you for your order <strong>{{ firstName }}</strong
      >! Your order ID is:
      <strong>{{ orderId }}</strong>
    </p>
    <p>
      We are getting started on your order right away, and you will receive an
      order confirmation shortly to your email {{ email }}.
    </p>
  </div>
</template>

<style scoped>
  .orderInformationContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(250, 245, 239);
    width: 100%;
    padding: 4rem;
  }
  h1 {
    margin: 2rem;
  }
</style>
