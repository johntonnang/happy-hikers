<!-- https://www.flaticon.com/free-icon/delete_1214428?term=bin&page=1&position=6&origin=search&related_id=1214428 -->

<script>
  export default {
    data() {
      return {
        products: null
      }
    },
    created() {
      fetch('/assets/api.JSON')
        .then((response) => response.json())
        .then((result) => {
          this.products = result
          console.log(result)
        })
    }
  }
</script>

<template>
  <main>
    <div id="position-text">
      <p id="page-direction">Hem / Wishlist</p>

      <h1>My Favourites</h1>
    </div>
    <div class="container">
      <div id="products-div" :key="product.id" v-for="product in products">
        <div id="card">
          <img :src="product.image" alt="image of product" />
          <h3 style="margin: 0px">{{ product.name }}</h3>
          <h5>{{ product.price }} :-</h5>
          <p>{{ product.category }}</p>
          <div id="align-button-and-icon">
            <button>+ Add to cart</button>
            <img
              @click="removeProduct"
              id="icon"
              src="/assets/delete.png"
              alt="bin icon"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  /* CARD */

  img {
    width: 50%;
    border-radius: 5px;
  }

  #card {
    padding-top: 5%;
    /* background-color: white; */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    align-items: center;
    text-align: center;
    margin-bottom: 5%;
    border-radius: 5px;
    margin: 5%;
  }

  #card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  #position-text {
    padding-top: 30%;
    padding-left: 5%;
  }

  button {
    background-color: rgba(50, 108, 50, 0.804);
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    transition: 0.9s;
    background-color: black;
    color: rgb(169, 164, 164);
  }

  #icon {
    padding-top: 1%;
    width: 8%;
    height: 5%;
    margin-left: 3%;
    cursor: pointer;
  }

  #icon:hover {
    transition: 0.9s;
  }

  #align-button-and-icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 5%;
  }

  @media (min-width: 899px) {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }

    #icon {
      margin-top: 3px;
    }
  }

  /* ------------- */
  @media (min-width: 600px) and (max-width: 899px) {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 375px) and (max-width: 600px) {
    .container {
      display: grid;
      grid-template-columns: 1fr;
    }
    #card {
      padding-top: 5%;
      /* background-color: white; */
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      align-items: center;
      text-align: center;
      margin-bottom: 5%;
      border-radius: 5px;
    }
  }
</style>
