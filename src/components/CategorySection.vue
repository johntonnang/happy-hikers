<!-- //
https://stackoverflow.com/questions/19414856/how-can-i-make-all-images-of-different-height-and-width-the-same-via-css -->

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
    },
    methods: {
      navigateToCategory() {
        this.$router.push('/ProductCatalog')
        // this.$router.push('/' + e.target.value)
      }
    }
  }
</script>

<template>
  <h1>Categories</h1>

  <div class="container">
    <div class="columns">
      <div class="row">
        <div id="p-men">
          <img
            @click="navigateToCategory($event)"
            :src="categoryMen"
            alt="Picture of a man"
          />
          <p>Men</p>
        </div>
        <div>
          <div id="p-women">
            <p>Women</p>
            <img
              @click="navigateToCategory($event)"
              :src="categoryWomen"
              alt="Picture of a woman"
            />
          </div>
        </div>
      </div>
      <div id="space-img" class="row">
        <div>
          <div id="p-equipment">
            <p>Equipment</p>
            <img
              id="image-e"
              @click="navigateToCategory($event)"
              :src="categoryEquipment"
              alt="Picture of equipment"
            />
          </div>
        </div>
        <div id="p-shoes">
          <p>Shoes</p>
          <img
            @click="navigateToCategory($event)"
            :src="categoryShoes"
            alt="Picture of shoes"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  h1 {
    text-align: center;
  }

  #space-img {
    padding-top: 15px;
  }

  img {
    width: 100%;
  }
  p {
    position: absolute;
    color: rgb(76, 75, 75);
    background-color: white;
    margin-top: 110px;
    opacity: 0.7;
    padding-right: 3px;
  }

  #p-women {
    display: flex;
    justify-content: center;
  }

  #p-equipment {
    display: flex;
    justify-content: center;
  }

  #p-shoes {
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
  }

  #p-men {
    display: flex;
    justify-content: center;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .columns {
    display: flex;
    flex-wrap: wrap;
  }

  #space-img {
    padding-top: 15px;
  }

  img {
    float: left;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  // IpadOS
  @media (min-width: 801px) and (max-width: 1080px) {
  }

  @media (min-width: 661px) and (max-width: 667px) {
  }

  @media (min-width: 599px) and (max-width: 980px) {
  }

  @media (min-width: 447px) and (max-width: 667px) {
    img {
      margin-left: 30px;
    }
  }

  @media (min-width: 412px) and (max-width: 667px) {
    // img {
    // }
  }

  // Iphone SE och Iphone 12/13
  @media (min-width: 375px) and (max-width: 667px) {
    img {
      float: left;
      width: 160px;
      height: 150px;
      object-fit: cover;
      // margin-left: 80px;
    }
  }
</style>
