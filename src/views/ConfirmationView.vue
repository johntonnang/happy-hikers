<script>
  import OrderConfirmation from '../components/OrderConfirmation.vue'

  export default {
    data() {
      return {}
    },
    components: {
      OrderConfirmation
    }
  }
</script>

<template>
  <main>
    <order-confirmation class="orderConformation" />
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
    margin-bottom: 15rem;
  }
  .loginProfile {
    display: none;
  }
</style>
