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
