<script>
  export default {
    data() {
      return {
        categoryMen:
          'https://images.unsplash.com/photo-1505866535066-ccebd6b2b98a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=589&q=80',
        categoryWomen:
          'https://images.unsplash.com/photo-1600356604581-e573833d02e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
        categoryEquipment:
          'https://images.unsplash.com/photo-1623484280771-a432f18a9a22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=396&q=80',
        categoryShoes:
          'https://images.unsplash.com/photo-1509866899599-a1144f7e54ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
      }
    }
  }
</script>

<template>
  <h1>Categories</h1>
  <div class="row">
    <div>
      <img :src="categoryMen" alt="Picture of a man" />
    </div>
    <div>
      <img :src="categoryWomen" alt="Picture of a woman" />
    </div>
  </div>
  <div class="row">
    <div>
      <img :src="categoryEquipment" alt="Picture of equipment" />
    </div>
    <div>
      <img :src="categoryShoes" alt="Picture of shoes" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  // https://stackoverflow.com/questions/19414856/how-can-i-make-all-images-of-different-height-and-width-the-same-via-css

  img {
    padding-left: 15px;
    float: left;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
</style>
