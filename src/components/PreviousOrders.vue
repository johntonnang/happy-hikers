<script>
  import OrderChart from './OrderChart.vue'

  export default {
    components: {
      OrderChart
    },
    data() {
      return { openOrder: false, rotateArrow: '' }
    },
    methods: {
      toggleOrder() {
        if (!this.openOrder) {
          this.openOrder = true
          this.rotateArrow = 'rotate(90deg)'
        } else {
          this.openOrder = false
          this.rotateArrow = 'rotate(0deg)'
        }
      }
    }
  }
</script>

<template>
  <div @click="toggleOrder()" id="order-container">
    <div class="prev-order-container">
      <div class="order-content">
        <h4>Order</h4>
        <p>5 items</p>
      </div>
      <div class="order-content">
        <p>1337,50kr</p>
        <p>01/01/2023</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
        class="bi bi-chevron-right"
        viewBox="0 0 16 16"
        :style="{ transform: rotateArrow }"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </div>
    <div v-if="openOrder" id="item-content-info">
      <h2>Hej</h2>
      <h2>Hej</h2>
    </div>
  </div>
  <div id="order-container">
    <div @click="toggleOrder" class="prev-order-container">
      <div class="order-content">
        <h4>Order</h4>
        <p>5 items</p>
      </div>
      <div class="order-content">
        <p>1337,50kr</p>
        <p>01/01/2023</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
        class="bi bi-chevron-right"
        viewBox="0 0 16 16"
        :style="{ transform: rotateArrow }"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </div>
    <div v-if="openOrder" id="item-content-info">
      <h2>Hej</h2>
      <h2>Hej</h2>
    </div>
  </div>
  <OrderChart />
</template>

<style scoped>
  #order-container {
    box-shadow: 1px 1px 8px black;
    width: 70%;
    margin: 40px 0px 40px 0px;
    background: linear-gradient(0.25turn, #fcfcfc, #f9faf9, #f3f2f0);
    border-radius: 8px;
  }

  #order-container:hover {
    cursor: pointer;
    opacity: 0.6;
  }
  .prev-order-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 25px;
    background: linear-gradient(0.25turn, #fcfcfc, #f9faf9, #f3f2f0);
    border-radius: 8px;
  }

  .order-content h4 {
    font-weight: 600;
    margin-bottom: 0px;
  }

  .order-content p {
    color: #5a5a5a;
    margin-top: 10px;
  }

  #item-content-info {
    background: linear-gradient(0.25turn, #fcfcfc, #f9faf9, #f3f2f0);
    padding: 25px;
    border-radius: 8px;
  }

  @media (max-width: 1600px) {
    .prev-order-container {
      width: 90%;
    }
  }

  @media (max-width: 960px) {
    .prev-order-container {
      width: 100%;
    }
  }

  @media (max-width: 760px) {
    .prev-order-container {
      width: 100%;
      padding: 10px 25px 10px 25px;
    }

    .prev-order-container h4 {
      margin-bottom: 16px;
      margin-top: 7px;
    }
  }
</style>
