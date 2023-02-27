<!-- https://www.flaticon.com/free-icon/delete_1214428?term=bin&page=1&position=6&origin=search&related_id=1214428 -->

<!-- Delete product -->
<!-- https://paulund.co.uk/vuejs-crud-delete-product-page -->

<script>
  export default {
    data() {
      return {
        wishItems: []
      }
    },

    mounted() {
      let wish = localStorage.getItem('Wish')
      if (wish !== null) {
        this.wishItems = JSON.parse(wish)
      }
    },
    watch: {
      wishItems: {
        handler: function (value) {
          localStorage.setItem('Wish', JSON.stringify(value))
        },
        deep: true
      }
    },
    methods: {
      removeFromWishlist(index) {
        this.wishItems.splice(index, 1)
        localStorage.setItem('Wish', JSON.stringify(this.wishItems))
        console.log('Remove from wishlist')
      }
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
      <div class="wishBox">
        <div v-if="wishItems.length">
          <div
            class="wishItems"
            v-for="(item, index) in wishItems"
            :key="index"
          >
            <div id="card">
              <img :src="item.image" alt="image of product" />

              <h3>{{ item.name }}</h3>
              <h5>{{ item.price }} :-</h5>
              <p>{{ item.category }}</p>
              <div id="align-button-and-icon">
                <button @click="someFunction">+ Add to Cart</button>
                <img
                  @click="removeFromWishlist(index)"
                  id="icon"
                  src="/assets/delete.png"
                  alt="bin icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  /* CARD */

  #position-text {
    padding-bottom: 10px;
  }

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
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      align-items: center;
      text-align: center;
      margin-bottom: 5%;
      border-radius: 5px;
    }
  }
</style>
