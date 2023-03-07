<script>
  import CommonQuestion from '../components/CommonQuestion.vue'

  export default {
    components: {
      CommonQuestion
    }
  }
</script>

<template>
  <main>
    <common-question />
  </main>
</template>

<style scoped>
  main {
    position: relative;
    top: 100px;
    width: 100%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    margin-bottom: 8rem;
  }
</style>
