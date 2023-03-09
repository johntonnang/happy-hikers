<script>
  export default {}
</script>

<template>
  <div class="OrderDetailsContainer">
    <div class="line" />
    <h5 class="h5Title">
      <strong>Order Details {{ orderId }}</strong>
    </h5>
  </div>
</template>

<style scoped>
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
  }
  .h5Title {
    padding: 2rem;
    display: flex;
    justify-content: flex-start;
    justify-items: flex-start;
  }
</style>
