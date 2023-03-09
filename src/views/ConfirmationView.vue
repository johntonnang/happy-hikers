<script>
  import OrderConfirmation from '../components/OrderConfirmation.vue'
  //import OrderDetails from '../components/OrderDetails.vue'

  export default {
    data() {
      return {}
    },
    components: {
      OrderConfirmation
      // OrderDetails
    }
  }
</script>

<template>
  <main>
    <div class="container">
      <order-confirmation class="orderConformation" />
      <!-- <order-details class="orderDetails" />-->
    </div>
  </main>
</template>

<style scoped>
  main {
    position: relative;
    top: 150px;
    width: 100%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .orderConformation {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
  .container {
    display: flex;
    flex-direction: column;
  }
  .orderDetails {
    margin-bottom: 5rem;
  }
  .loginProfile {
    display: none;
  }
</style>
