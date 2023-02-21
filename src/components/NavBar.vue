<script>
  export default {
    data() {
      return {
        isActive: true
      }
    },
    methods: {
      toggleMenu() {
        this.isActive = !this.isActive
      },
      searchProducts() {
        this.$router.push('/ProductCatalog')
      }
    }
  }
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-search">
        <input
          type="text"
          class="navbar-search-field"
          placeholder="Search..."
        />
        <button class="navbar-search-button" @click="searchProducts">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>
      </div>
      <router-link to="/">
        <img
          id="navbar-logo"
          src="/assets/happy-hikers-logo-removebg-preview.png"
        />
      </router-link>
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
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    z-index: 10;
  }

  .navbar-search {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .navbar-search-field {
    background-color: lightgrey;
    border: none;
    font-size: 1rem;
    padding: 5px 5px 5px 10px;
    border-radius: 5px;
    margin: 5px;
    outline: none;
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
  }

  .navbar-container {
    display: flex;
    justify-content: space-between;
    z-index: 1;
    width: 100%;
    margin: 0 auto;
    padding: 0 50px;
  }

  #navbar-logo {
    display: flex;
    text-decoration: none;
    cursor: pointer;
    margin: 1rem;
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
      opacity: 1;
      z-index: -1;
      background: #fff;
      top: 100px;
    }

    .navbar-menu.active {
      top: -1000%;
      opacity: 1;
      z-index: 5;
      height: 50vh;
      font-size: 1.6rem;
      padding: 25px;
    }

    #navbar-logo {
      max-width: 100%;
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
      top: 45px;
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

    @media screen and (max-width: 768px) {
      #navbar-logo {
        max-width: 80%;
      }

      #mobile-menu {
        top: 40px;
      }

      .navbar-menu.active {
        top: -1500%;
      }
    }

    @media screen and (max-width: 390px) {
      #navbar-logo {
        margin: 0;
        margin-left: -360px;
        max-width: 200px;
      }

      .navbar-search {
        margin-top: 30px;
      }

      .navbar-search-field {
        padding-right: 170px;
      }

      .navbar-menu {
        top: 80px;
      }

      #mobile-menu {
        top: 0;
        right: 7%;
      }

      .navbar-search-button {
        position: absolute;
        right: 7%;
      }

      @media screen and (max-width: 375px) {
        #navbar-logo {
          max-width: 200px;
        }
      }
    }
  }
</style>
