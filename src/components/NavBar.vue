<script>
  export default {
    data() {
      return {
        isActive: true,
        searchID: '',
        products: [],
        productsSearch: [],
        id: this.$route.params.id
      }
    },
    created() {
      fetch('/assets/api.json')
        .then((response) => response.json())
        .then((response) => {
          console.log(response)
          this.products = response
        })
    },
    methods: {
      toggleMenu() {
        this.isActive = !this.isActive
      },
      searchProducts() {
        this.$router.push(`/ProductCatalog/` + this.searchID)
      }
    }
  }
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-search">
        <input
          @keyup.enter="searchProducts"
          type="text"
          class="navbar-search-field"
          placeholder="Search..."
          v-model="searchID"
        />
        <button class="navbar-search-button" @click="searchProducts">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>
      </div>
      <div class="img-container">
        <router-link to="/">
          <img
            id="navbar-logo"
            src="/assets/happy-hikers-logo-removebg-preview.png"
          />
        </router-link>
      </div>
      <div class="navbar-toggle" id="mobile-menu" @click="toggleMenu">
        <span class="bar" :class="{ 'is-active': isActive }" />
        <span class="bar" :class="{ 'is-active': isActive }" />
        <span class="bar" :class="{ 'is-active': isActive }" />
      </div>
      <div class="navbar-menu" :class="{ active: isActive }">
        <router-link class="navbar-links" to="/Favourite"
          ><font-awesome-icon icon="fa-regular fa-heart" />
          <p v-if="!isActive">Wishlist</p></router-link
        >
        <router-link class="navbar-links" to="/Profile"
          ><font-awesome-icon icon="fa-regular fa-user" />
          <p v-if="!isActive">Profile</p></router-link
        >
        <router-link class="navbar-links" to="/Cart"
          ><font-awesome-icon icon="fa-solid fa-cart-shopping" />
          <p v-if="!isActive">Shopping cart</p></router-link
        >
      </div>
    </div>
  </nav>
</template>

<style scoped>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .navbar {
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    z-index: 10;
    margin: 0;
  }

  .navbar-search {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35%;
    /* padding-left: 50px; */
    /* padding-right: 200px; */
  }

  .navbar-search-field {
    background-color: #ffffff00;
    border: 1px solid #000;
    font-size: 1rem;
    padding: 5px 5px 5px 10px;
    border-radius: 5px;
    margin: 5px;
    outline: none;
    color: #000;
  }

  .navbar-search-field::placeholder {
    color: #000;
  }

  .navbar-search-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.4rem;
    color: #000;
  }

  .navbar-container {
    width: 100%;
    justify-content: space-around;
    display: flex;
    z-index: 1;
  }

  #navbar-logo {
    text-decoration: none;
    cursor: pointer;
    width: 100%;
  }
  .img-container {
    padding-left: 40px;
    justify-content: center;
    display: flex;
    width: 60%;
  }
  .navbar-menu {
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    top: -1000%;
  }

  .navbar-links {
    display: flex;
    color: #000;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 0 0.5rem;
    height: 100%;
    font-size: 1.5rem;
    transition: opacity 0.3s ease-in-out;
  }

  .navbar-links:hover {
    opacity: 0.7;
  }

  .navbar-menu.active {
    width: 20%;
  }

  .navbar-toggle {
    width: 20%;
  }

  @media screen and (max-width: 960px) {
    .navbar-container {
      display: flex;
      justify-content: center;
      z-index: 1;
      width: 100%;
      max-width: 1300px;
      padding: 0;
    }

    .navbar-menu {
      display: grid;
      grid-template-columns: auto;
      margin: 0;
      width: 100%;
      position: absolute;
      z-index: -1;
      background: #fff;
      top: 100px;
      height: 50vh;
    }

    .navbar-menu.active {
      top: -2000%;
      opacity: 1;
      z-index: 5;
      height: 50vh;
      font-size: 1.6rem;
      padding: 25px;
    }

    #navbar-logo {
      padding-right: 250px;
    }

    .navbar-toggle .bar {
      width: 25px;
      height: 3px;
      margin: 5px auto;
      transition: all 0.3s ease-in-out;
      background: #000;
      color: #000;
    }

    .navbar-links {
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;
    }

    #mobile-menu {
      position: absolute;
      top: 20px;
      right: 5%;
      transform: translate(5%, 20%);
    }

    .navbar-toggle .bar {
      display: block;
      cursor: pointer;
    }

    .bar:nth-child(2) {
      opacity: 0;
    }

    .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }

    .bar.is-active:nth-child(2) {
      opacity: 1;
    }

    .bar.is-active:nth-child(1) {
      transform: translateY(0) rotate(0);
    }

    .bar.is-active:nth-child(3) {
      transform: translateY(0) rotate(0);
    }

    @media screen and (max-width: 768px) and (min-width: 400px) {
      #navbar-logo {
        max-width: 100%;
      }

      #mobile-menu {
        top: 20px;
      }

      .navbar-menu.active {
        top: -1500%;
      }

      .navbar-search {
        margin-left: 50px;
      }
    }

    @media screen and (max-width: 390px) {
      #navbar-logo {
        margin: 0;
        width: 110%;
        left: 10px;
        top: 0;
        position: absolute;
      }

      .navbar-search {
        margin-top: 25px;
        width: 200px;
      }

      .navbar-search-field {
        padding-right: 170px;
        margin-left: 200px;
      }

      .navbar-menu {
        top: 80px;
        height: 60vh;
      }

      #mobile-menu {
        top: 0;
        right: 0;
      }

      .navbar-search-button {
        position: absolute;
        right: 6%;
      }

      @media screen and (max-width: 375px) {
        #navbar-logo {
          max-width: 110%;
          top: 0;
          left: 0;
        }

        .navbar-search-field {
          padding-right: 170px;
          margin-left: 180px;
        }
      }
    }
  }
</style>
