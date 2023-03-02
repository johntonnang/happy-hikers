<!-- //
https://stackoverflow.com/questions/19414856/how-can-i-make-all-images-of-different-height-and-width-the-same-via-css -->

<script>
  export default {
    data() {
      return {
        categoryID: this.$route.params.category,
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
    created() {
      fetch('/assets/api.JSON')
        .then((response) => response.json())
        .then((result) => {
          this.products = result
          console.log(result)
        })
    },
    methods: {
      navigateToCategory(category) {
        this.$router.push('/ProductCatalog/' + category)
      },
      scrollDown() {
        this.$refs['bottom'].scrollIntoView({
          behavior: 'smooth'
        })
      }
    }
  }
</script>

<template>
  <h1 ref="bottom" class="main-title">Products</h1>

  <div class="container">
    <div class="columns">
      <div class="rows">
        <div class="center-p" id="p-men">
          <button
            @click="navigateToCategory(`men's%20jacket`)"
            class="navigate-button"
          >
            Men
          </button>
          <img
            @click="navigateToCategory(`men's%20jacket`)"
            :src="categoryMen"
            alt="Picture of a man"
          />
        </div>
        <div>
          <div class="center-p" id="p-women">
            <button
              @click="navigateToCategory(`women's%20jacket`)"
              class="navigate-button"
            >
              Women
            </button>
            <img
              @click="navigateToCategory(`women's%20jacket`)"
              :src="categoryWomen"
              alt="Picture of a woman"
            />
          </div>
        </div>
      </div>
      <div id="space-img" class="rows">
        <div>
          <div class="center-p" id="p-equipment">
            <button
              @click="navigateToCategory(`backpack`)"
              class="navigate-button"
            >
              Equipment
            </button>
            <img
              id="image-e"
              @click="navigateToCategory(`backpack`)"
              :src="categoryEquipment"
              alt="Picture of equipment"
            />
          </div>
        </div>
        <div class="center-p" id="p-shoes">
          <button @click="navigateToCategory(`shoes`)" class="navigate-button">
            Shoes
          </button>
          <img
            @click="navigateToCategory(`shoes`)"
            :src="categoryShoes"
            alt="Picture of shoes"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="scroll-container">
    <button @click="scrollDown()" class="scroll-down" />
  </div>
</template>

<style lang="scss" scoped>
  .main-title {
    text-align: center;
    padding: 2rem;
    font-size: 4.5rem;
  }

  #space-img {
    padding-top: 15px;
  }

  img {
    max-width: 100%;
  }

  .navigate-button {
    position: absolute;
    // color: rgb(244, 240, 240);
    // color: #ffffff90;
    color: #ffffffdc;
    margin-top: 110px;
    opacity: 0.9;
    padding: 4px;
    // background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    background-color: #ffffff00;
    border: none;
    border-radius: 5px;
    font-size: 5rem;
  }

  .center-p {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    margin-right: 18px;
    margin-left: 18px;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
  }

  .rows {
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
    object-fit: cover;
    width: 1100px;
    height: 300px;
    cursor: pointer;
    border-radius: 5px;
  }

  .center-p:hover {
    box-shadow: 0 0 40px rgba(2, 84, 44, 0.594);
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 0;
  }

  @media screen and (max-width: 1400px) {
    .scroll-container {
      display: none;
    }
  }

  @media (max-width: 1300px) {
    img {
      width: 1100px;
      height: 180px;
    }
    .navigate-button {
      font-size: 4rem;
      margin-top: 50px;
    }
  }

  @media (min-width: 900px) and (max-width: 1100px) {
    img {
      width: 1000px;
      height: 170px;
    }
    p {
      font-size: 140%;
    }
  }

  @media (min-width: 850px) and (max-width: 900px) {
    img {
      width: 1000px;
      height: 160px;
    }

    p {
      font-size: 130%;
    }
  }

  @media (min-width: 700px) and (max-width: 850px) {
    img {
      width: 900px;
      height: 150px;
    }

    .navigate-button {
      font-size: 3rem;
    }

    .main-title {
      font-size: 4rem;
    }
  }

  @media (min-width: 600px) and (max-width: 700px) {
    img {
      width: 800px;
      height: 150px;
    }

    .navigate-button {
      font-size: 3rem;
    }

    .main-title {
      font-size: 4rem;
    }
  }

  @media (min-width: 576px) and (max-width: 600px) {
    img {
      width: 600px;
      height: 150px;
    }

    .navigate-button {
      font-size: 3rem;
    }

    .main-title {
      font-size: 4rem;
    }
  }

  @media (min-width: 568px) and (max-width: 576px) {
    img {
      width: 400px;
      height: 150px;
    }

    .navigate-button {
      font-size: 3rem;
    }

    .main-title {
      font-size: 4rem;
    }
  }

  @media (min-width: 447px) and (max-width: 568px) {
    img {
      width: 300px;
      height: 150px;
    }

    .navigate-button {
      font-size: 2rem;
    }

    .main-title {
      font-size: 3rem;
    }
  }

  @media (min-width: 405px) and (max-width: 447px) {
    img {
      width: 250px;
      height: 150px;
    }

    .navigate-button {
      font-size: 2rem;
    }

    .main-title {
      font-size: 3rem;
    }
  }

  @media (min-width: 383px) and (max-width: 405px) {
    img {
      width: 170px;
      height: 150px;
    }

    .navigate-button {
      font-size: 1.5rem;
    }

    .main-title {
      font-size: 2.5rem;
    }
  }

  @media (min-width: 375px) and (max-width: 383px) {
    img {
      width: 160px;
      height: 150px;
    }

    .navigate-button {
      font-size: 1.5rem;
    }

    .main-title {
      font-size: 2.5rem;
    }
  }

  .scroll-container {
    position: absolute;
    top: 90vh;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }

  .scroll-down {
    background-color: #ffffff00;
    width: 60px;
    height: 60px;
    border: 2px solid #fff;
    border-radius: 50%;
    animation: down 1.5s infinite;
    -webkit-animation: down 1.5s infinite;
    &::before {
      content: '';
      position: absolute;
      top: 15px;
      left: 18px;
      width: 18px;
      height: 18px;
      border-left: 2px solid #fff;
      border-bottom: 2px solid #fff;
      transform: rotate(-45deg);
    }
  }

  @keyframes down {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translateY(15px);
    }
    40% {
      transform: translate(0);
    }
  }

  @-webkit-keyframes down {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translateY(15px);
    }
    40% {
      transform: translate(0);
    }
  }
</style>
