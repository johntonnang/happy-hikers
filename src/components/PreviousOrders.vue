<template>
  <div class="prev-order-container">
    <div class="order-content">
      <h4>Beställning</h4>
      <p style="margin-left: 2px">5 antal varor</p>
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
    >
      <path
        fill-rule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  </div>
  <div class="prev-order-container">
    <div class="order-content">
      <h4>Beställning</h4>
      <p>5 antal varor</p>
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
    >
      <path
        fill-rule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  </div>
  <div class="prev-order-container">
    <div class="order-content">
      <h4>Beställning</h4>
      <p>5 antal varor</p>
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
    >
      <path
        fill-rule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  </div>
  <div class="prev-order-container">
    <div class="order-content">
      <h4>Beställning</h4>
      <p>5 antal varor</p>
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
    >
      <path
        fill-rule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  </div>
</template>

<style scoped>
  .prev-order-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    box-shadow: 1px 1px 6px black;
    border-radius: 8px;
    padding: 25px;
    margin: 20px 0 40px 0px;
    background: linear-gradient(0.25turn, #fcfcfc, #f9faf9, #f3f2f0);
  }
  .prev-order-container:hover {
    cursor: pointer;
    opacity: 0.4;
  }
  .order-content h4 {
    font-weight: 600;
    margin-bottom: 0px;
  }

  .order-content p {
    color: #5a5a5a;
    margin-top: 10px;
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

    .prev-order-container h4{
      margin-bottom: 16px;
      margin-top: 7px;

    }
  }
</style>
