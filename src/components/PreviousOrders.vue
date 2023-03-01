<script>
  import OrderChart from './OrderChart.vue'

  export default {
    components: {
      OrderChart
    },
    data() {
      return {
        openOrderIndex: null,
        products: null,
        orders: JSON.parse(localStorage.getItem('Orders'))
      }
    },
    methods: {
      toggleOrder(index) {
        if (this.openOrderIndex === index) {
          this.openOrderIndex = null
        } else {
          this.openOrderIndex = index
        }
      }
    }
  }
</script>

<template>
  <div>
    <div
      v-for="(order, index) in orders"
      :key="index"
      @click="toggleOrder(index)"
      id="order-container"
    >
      <div class="prev-order-container">
        <div class="order-content">
          <h4>Order</h4>
          <p>{{ order.length }} items</p>
        </div>
        <div class="order-content">
          <p>{{ order.reduce((x, item) => x + item.price, 0) }}kr</p>
          <p>{{ order[0].date }}</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          class="bi bi-chevron-right"
          viewBox="0 0 16 16"
          :class="{ rotate: openOrderIndex === index }"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
      <div v-if="openOrderIndex === index" id="item-content-container">
        <div v-for="item in order" :key="item.id">
          <div class="item-content-info first-info">
            <img :src="item.image" alt="" />
            <h5>{{ item.name }}</h5>
            <p>{{ item.price }}:-</p>
          </div>
        </div>
      </div>
    </div>
    <OrderChart />
  </div>
</template>

<style scoped>
  .rotate {
    transform: rotate(90deg);
  }
  #order-container {
    box-shadow: 1px 1px 8px black;
    width: 85%;
    margin: 40px 0px 40px 0px;
    background: linear-gradient(0.25turn, #fcfcfc, #f9faf9, #f3f2f0);
    border-radius: 8px;
  }

  #order-container:hover {
    cursor: pointer;

    /* opacity: 0.8; */
  }
  .prev-order-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 25px;
    /* background: linear-gradient(0.25turn, #fcfcfc, #f9faf9, #f3f2f0); */
    background: #fcfcfc;
    border-radius: 8px;
    transition: all 0.4s;
  }
  .prev-order-container:hover {
    background: #e3e3e3;
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
    padding: 0px 25px;
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

    padding: 20px 0px;
  }

  .first-info {
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
