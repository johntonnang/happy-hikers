<script>
  import OrderChart from './OrderChart.vue'

  export default {
    components: {
      OrderChart
    },
    data() {
      return {
        openOrder: false,
        rotateArrow: '',
        products: null,
        orders: JSON.parse(localStorage.getItem('Orders'))
      }
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
  <div
    v-for="(order, index) in orders"
    :key="index"
    @click="toggleOrder()"
    id="order-container"
  >
    <div class="prev-order-container">
      <div class="order-content">
        <h4>Order</h4>
        <p>{{ order.length }} items</p>
      </div>
      <div class="order-content">
        <p>{{ order.reduce((x, item) => x + item.price, 0) }}kr</p>
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
    <div v-for="item in order" :key="item.id">
      <div v-if="openOrder" id="item-content-container">
        <div class="item-content-info first-info">
          <img :src="item.image" alt="" />
          <h5>{{ item.name }}</h5>
          <p>{{ item.price }}:-</p>
        </div>
      </div>
    </div>
  </div>
  <OrderChart />
</template>

<style scoped>
  #order-container {
    box-shadow: 1px 1px 8px black;
    width: 85%;
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

  #item-content-container {
    background: linear-gradient(0.25turn, #fcfcfc, #f9faf9, #f3f2f0);
    padding: 25px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
  }

  #item-content-container img {
    max-width: 100%;
    height: 125px;
  }

  .item-content-info {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    border-bottom: 1px solid black;
    padding: 20px 0px;
  }

  .first-info {
    border-bottom: 1px solid black;
    border-top: 1px solid black;
  }

  .item-content-info h6,
  .item-content-info p {
    margin-bottom: 0px;
  }

  @media (max-width: 1600px) {
    .prev-order-container {
      width: 100%;
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
