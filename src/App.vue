<script>
  import NavBar from './components/NavBar.vue'

  export default {
    components: {
      NavBar
    }
  }
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
</template>
