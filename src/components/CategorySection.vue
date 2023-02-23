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
  <h1 ref="bottom">Categories</h1>

  <div class="container">
    <div class="columns">
      <div class="row">
        <div class="center-p" id="p-men">
          <p>Men</p>
          <img
            @click="navigateToCategory($event)"
            :src="categoryMen"
            alt="Picture of a man"
          />
        </div>
        <div>
          <div class="center-p" id="p-women">
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
          <div class="center-p" id="p-equipment">
            <p>Equipment</p>
            <img
              id="image-e"
              @click="navigateToCategory($event)"
              :src="categoryEquipment"
              alt="Picture of equipment"
            />
          </div>
        </div>
        <div class="center-p" id="p-shoes">
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
  <div class="scroll-container">
    <button @click="scrollDown()" class="scroll-down" />
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
    max-width: 100%;
  }

  p {
    position: absolute;
    color: rgb(244, 240, 240);
    margin-top: 110px;
    opacity: 0.9;
    padding: 4px;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  }

  .center-p {
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
    object-fit: cover;
    margin-bottom: 15px;
    width: 1100px;
    height: 300px;
  }

  img:hover {
    box-shadow: 0 10px 30px 0 rgba(2, 84, 44, 0.594);
    transition: 0.7s;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 1300px) {
    img {
      width: 1100px;
      height: 180px;
    }
    p {
      font-size: 140%;
    }

    // .scroll-container {
    //   display: none;
    // }
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
  }

  @media (min-width: 600px) and (max-width: 700px) {
    img {
      width: 800px;
      height: 150px;
    }
  }

  @media (min-width: 576px) and (max-width: 600px) {
    img {
      width: 600px;
      height: 150px;
    }
  }

  @media (min-width: 568px) and (max-width: 576px) {
    img {
      width: 400px;
      height: 150px;
    }
  }

  @media (min-width: 447px) and (max-width: 568px) {
    img {
      width: 300px;
      height: 150px;
    }
  }

  @media (min-width: 405px) and (max-width: 447px) {
    img {
      width: 250px;
      height: 150px;
    }
  }

  @media (min-width: 383px) and (max-width: 405px) {
    img {
      width: 170px;
      height: 150px;
    }
  }

  @media (min-width: 375px) and (max-width: 383px) {
    img {
      width: 160px;
      height: 150px;
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
