<script>
  export default {}
</script>

<template>
  <div class="navbar-container">
    <input type="text" />
    <div class="logo-container">
      <img id="logo" src="/assets/happy-hikers-logo.png" />
    </div>
    <div class="nav-links-container">
      <router-link to="/"
        ><font-awesome-icon icon="fa-regular fa-heart"
      /></router-link>
      <router-link to="/contact"
        ><font-awesome-icon icon="fa-regular fa-user"
      /></router-link>
      <router-link to="/about"
        ><font-awesome-icon icon="fa-solid fa-cart-shopping"
      /></router-link>
    </div>
  </div>
</template>

<style>
  .navbar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #logo {
    max-width: 200px;
  }
</style>
