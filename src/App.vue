<script>
  import NavBar from './components/NavBar.vue'
  import FooterSection from './components/FooterSection.vue'

  export default {
    components: {
      NavBar,
      FooterSection
    }
  }
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
  <FooterSection />
</template>

<style>
  * {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
  }
  main {
    padding-bottom: 5rem;
  }
</style>
