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

  <div class="container">
    <div class="columns">
      <div class="row">
        <div id="p-men">
          <img :src="categoryMen" alt="Picture of a man" />
          <p>Men</p>

          <!-- <div class="button-div"> -->
          <Routerlink>
            <!-- <button class="btn">Button</button> />  -->
          </Routerlink>
          <!-- </div> -->
        </div>
        <div>
          <div id="p-women">
            <p>Women</p>
            <img :src="categoryWomen" alt="Picture of a woman" />
            <div class="button-div">
              <Routerlink>
                <!-- <button class="btn">Button</button> -->
              </Routerlink>
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
      <div id="space-img" class="row">
        <!-- <div id="space-img"> -->
        <div>
          <div id="p-equipment">
            <p>Equipment</p>
            <img :src="categoryEquipment" alt="Picture of equipment" />
            <div class="button-div">
              <Routerlink>
                <!-- <button class="btn">Button</button> -->
              </Routerlink>
            </div>
          </div>
        </div>

        <div id="p-shoes">
          <p>Shoes</p>
          <img :src="categoryShoes" alt="Picture of shoes" />
          <div class="button-div">
            <Routerlink>
              <!-- <button class="btn">Button</button> -->
            </Routerlink>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #space-img {
    padding-top: 15px;
  }

  @media (min-width: 599px) and (max-width: 980px) {
    img {
      float: left;
      width: 400px;
      height: 150px;
      object-fit: cover;
    }

    .row {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    p {
      position: absolute;
      color: rgb(76, 75, 75);
      background-color: white;
      margin-top: 110px;
      opacity: 0.7;
      padding-left: 3px;
      padding-right: 3px;
      font-size: 20px;
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
  }

  @media (min-width: 375px) and (max-width: 599px) {
    #space-img {
      padding-top: 15px;
    }
    .container {
      max-width: 100%;
      position: relative;
      color: white;
    }

    p {
      position: absolute;
      color: rgb(76, 75, 75);
      background-color: white;
      margin-top: 110px;
      opacity: 0.7;
      padding-left: 3px;
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

    .columns {
      display: flex;
      flex-wrap: wrap;
    }

    #space-img {
      padding-top: 15px;
    }
    .row {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    //  https://stackoverflow.com/questions/19414856/how-can-i-make-all-images-of-different-height-and-width-the-same-via-css

    img {
      padding-left: 25px;
      float: left;
      width: 150px;
      height: 150px;
      object-fit: cover;
    }
  }
</style>
