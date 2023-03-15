<script>
  import { initializeApp } from 'firebase/app'
  import {
    getFirestore,
    onSnapshot,
    collection,
    query
  } from 'firebase/firestore'
  import { onUnmounted, ref } from 'vue'

  const firebaseConfig = {
    apiKey: 'AIzaSyAGJoAN08CeHsyoibMdRQVpegwPibf1ANk',
    authDomain: 'happy-hikers-1a875.firebaseapp.com',
    projectId: 'happy-hikers-1a875',
    storageBucket: 'happy-hikers-1a875.appspot.com',
    messagingSenderId: '434497193720',
    appId: '1:434497193720:web:5893a8bd2905affdaedd0d',
    measurementId: 'G-QW50PLVBTN'
  }
  const app = initializeApp(firebaseConfig)

  const db = getFirestore(app)

  export default {
    data() {
      return {
        products: ref([]),
        isActive: true,
        searchID: '',
        productsSearch: [],
        id: this.$route.params.id,
        emailStorage: '',
        storageCart: 0,
        storageWish: 0,
        wishlistLength: 0,
        cartLength: 0
      }
    },
    created() {
      if (localStorage.getItem('email')) {
        this.emailStorage = localStorage.getItem('email')
      }

      const latestQuery = query(collection(db, 'konto'))
      const liveProducts = onSnapshot(latestQuery, (snapshot) => {
        this.accounts = snapshot.docs.map((doc) => {
          return {
            cart: doc.data().cart,
            wishlist: doc.data().wishlist,
            email: doc.data().email
          }
        })
        for (let i = 0; i < this.accounts.length; i++) {
          if (this.accounts[i].email === this.emailStorage) {
            this.storageCart = this.accounts[i].cart.length
            this.storageWish = this.accounts[i].wishlist.length
          }
        }
      })
      onUnmounted(liveProducts)

      fetch('/assets/api.json')
        .then((response) => response.json())
        .then((response) => {
          console.log(response)
          this.products = response
        })

      // if (JSON.parse(localStorage.getItem('Wish'))) {
      //   const wish = JSON.parse(localStorage.getItem('Wish'))
      //   this.storageWish = wish.length
      // }
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
            src="/assets/happy-hikers-logo-removebg-preview.svg"
            alt="happy hikers logo"
          />
        </router-link>
      </div>
      <div class="navbar-toggle" id="mobile-menu" @click="toggleMenu">
        <span class="bar" :class="{ 'is-active': isActive }" />
        <span class="bar" :class="{ 'is-active': isActive }" />
        <span class="bar" :class="{ 'is-active': isActive }" />
      </div>
      <div class="navbar-menu" :class="{ active: isActive }">
        <router-link @click="toggleMenu" class="navbar-links" to="/Favourite">
          <div
            class="amount-circle-favourites"
            v-if="$store.state.currentWish || storageWish > 0"
          >
            <p v-if="storageWish + $store.state.currentWish < 10">
              {{ storageWish + $store.state.currentWish }}
            </p>
            <p v-else>9+</p>
          </div>
          <font-awesome-icon icon="fa-regular fa-heart" />
        </router-link>
        <router-link @click="toggleMenu" class="navbar-links" to="/Profile"
          ><font-awesome-icon icon="fa-regular fa-user" />
        </router-link>
        <router-link @click="toggleMenu" class="navbar-links" to="/Cart"
          ><font-awesome-icon icon="fa-solid fa-cart-shopping" />
          <div
            class="amount-circle-cart"
            v-if="$store.state.currentCart || storageCart > 0"
          >
            <p v-if="storageCart + $store.state.currentCart < 10">
              {{ storageCart + $store.state.currentCart }}
            </p>
            <p v-else>9+</p>
          </div>
        </router-link>
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
    padding: 0;
  }

  .navbar-search {
    display: flex;
    align-items: center;
    justify-content: center;
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
  }
  .img-container {
    justify-content: center;
    display: flex;
    /* margin-right: 120px; */
  }
  .navbar-menu {
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    top: -1000%;
  }

  .amount-circle-favourites {
    width: 20px;
    height: 20px;
    background-color: rgb(13, 199, 13);
    border-radius: 50px;
    position: relative;
    top: -12px;
    left: 38px;
  }

  .amount-circle-favourites p {
    font-size: 1rem;
    font-weight: 600;
    margin-top: -2px;
    margin-left: 0px;
  }

  .amount-circle-cart {
    width: 20px;
    height: 20px;
    background-color: rgb(13, 199, 13);
    border-radius: 50px;
    position: relative;
    top: -12px;
    left: -5px;
  }

  .amount-circle-cart p {
    font-size: 1rem;
    font-weight: 600;
    margin-top: -2px;
    margin-left: 0px;
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

  .navbar-toggle {
    display: none;
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
      z-index: 1;
      background: #fff;
      top: 0;
      height: 100vh;
      transition: all 0.4s ease-in-out;
    }

    .navbar-menu.active {
      top: -2000%;
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
      width: 100%;
      font-size: 2.5rem;
    }

    #mobile-menu {
      display: inline;
      position: absolute;
      top: 20px;
      right: 5%;
      transform: translate(5%, 30%);
      z-index: 2;
      cursor: pointer;
    }

    .navbar-toggle .bar {
      display: block;
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

    #navbar-logo {
      width: 80%;
    }

    @media screen and (max-width: 768px) {
      #navbar-logo {
        width: 80%;
      }

      #mobile-menu {
        top: 20px;
      }

      .navbar-menu.active {
        top: -2000%;
      }
    }

    @media screen and (max-width: 700px) {
      .navbar-search {
        width: 80%;
      }

      .navbar-search-field {
        width: 70%;
      }

      #mobile-menu {
        top: 10px;
      }
    }
    @media screen and (max-width: 560px) {
      .navbar-search-field {
        width: 70%;
      }

      #mobile-menu {
        top: 5px;
      }
    }

    @media screen and (max-width: 390px) {
      #navbar-logo {
        margin: 0;
        left: 8px;
        top: 0;
        position: absolute;
        width: 200px;
      }

      .navbar-search {
        margin-top: 40px;
        width: 100%;
      }

      .navbar-search-field {
        width: 100%;
      }

      .navbar-menu {
        height: 100vh;
      }

      #mobile-menu {
        top: 0;
        right: 6%;
      }

      .navbar-search-button {
        position: absolute;
        right: 4%;
      }

      @media screen and (max-width: 375px) {
        #navbar-logo {
          top: 0;
          left: 8px;
        }
      }
    }
  }
</style>
