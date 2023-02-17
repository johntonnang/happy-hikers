<script>
  import NavBar from './components/NavBar.vue'
  import HeaderPage from './components/HeaderPage.vue'
  import CategorySection from './components/CategorySection.vue'

  export default {
    components: {
      NavBar,
      HeaderPage,
      CategorySection
    }
  }
</script>

<template>
  <NavBar />
  <HeaderPage />
  <main>
    <RouterView />
  </main>
  <CategorySection />
</template>
