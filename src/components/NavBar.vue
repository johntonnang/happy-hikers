<script>
  export default {}
</script>

<template>
  <div class="navbar">
    <img id="logo" src="/assets/happy-hikers-logo.png" />
    <router-link to="/">Home</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/About">About</router-link>
  </div>
</template>

<style>
  .navbar {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #logo {
    max-width: 200px;
  }
</style>
