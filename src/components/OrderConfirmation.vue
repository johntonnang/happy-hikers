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
      ...mapState([
        'email',
        'firstName',
        'address',
        'country',
        'statee',
        'credit',
        'debit',
        'paypal',
        'lastName',
        'phone',
        'ccNumber',
        'address2',
        'zip',
        'ccName'
      ])
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
  <div class="OrderDetailsContainer">
    <div class="line" />
    <div class="orderIdInfoBox">
      <h5 class="h5Title">Order Details:</h5>
      <p class="Idp">
        <strong>{{ orderId }}</strong>
      </p>
    </div>
    <div class="summaryBox">
      <div class="boxLeft">
        <div class="Box">
          <p>CUSTOMER INFORMATION</p>
          <p>{{ firstName }} {{ lastName }}</p>
          <p>{{ email }}</p>
        </div>
        <div class="Box">
          <p>ADDRESS</p>
          <p>{{ address }}</p>
          <p>{{ address2 }}</p>
          <p>{{ statee }}</p>
          <p>{{ zip }}</p>
          <p>{{ country }}</p>
        </div>
      </div>
      <div class="boxRight">
        <div class="Box">
          <p>PAYMENT METHOD</p>
          <p>Nr. {{ ccNumber }}</p>
        </div>
        <div class="Box">
          <p>DELIVERY OPTION</p>
          <p>Standard delivery</p>
        </div>
      </div>
    </div>
    <div class="line" />
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
    margin-top: 4rem;
  }

  .boxRight {
    padding-right: 12rem;
  }
  .summaryBox {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  h1 {
    margin: 2rem;
  }
  .line {
    border-bottom: 2px solid rgba(0, 0, 0, 0.334);
    margin-top: 5px;
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .OrderDetailsContainer {
    display: flex;
    flex-direction: column;
    margin: 5rem;
  }
  .h5Title {
    display: flex;
    justify-content: flex-start;
    justify-items: flex-start;
    padding-right: 1rem;
  }
  .orderIdInfoBox {
    padding-top: 2rem;
    margin-left: 2rem;
    display: flex;
    flex-direction: row;
  }

  p {
    margin: 0;
  }

  .Box {
    padding: 2rem;
  }
</style>
