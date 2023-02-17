<script>
  import NavBar from './components/NavBar.vue'
  import HeaderPage from './components/HeaderPage.vue'

  export default {
    components: {
      NavBar,
      HeaderPage
    }
  }
</script>

<template>
  <NavBar />
  <HeaderPage />
  <main>
    <RouterView />
  </main>
</template>
