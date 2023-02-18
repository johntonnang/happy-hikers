<script>
  export default {}
</script>

<template>
  <div class="navbar-container">
    <button><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
    <div class="logo-container">
      <router-link to="/">
        <img id="logo" src="/assets/happy-hikers-logo.png" />
      </router-link>
    </div>
    <div class="nav-links-container">
      <router-link to="/Favourite"
        ><font-awesome-icon icon="fa-regular fa-heart"
      /></router-link>
      <router-link to="/Profile"
        ><font-awesome-icon icon="fa-regular fa-user"
      /></router-link>
      <router-link to="/Cart"
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
