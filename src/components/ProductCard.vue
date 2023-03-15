<script>
  export default {
    data() {
      return {
        ratingStars: 0
      }
    },
    name: 'ProductCard',
    props: {
      id: { type: String, required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      img: { type: String, required: true },
      category: { type: String, required: true },
      colors: { type: Array, required: true },
      showProducts: { type: Object, default: null },
      rating: { type: Array, required: true },
      ratingcount: { type: Number, required: true }
      // colorsFilter: { type: Object, required: true }
    },
    methods: {
      openProduct(id) {
        this.$router.push({
          path: '/ProductView/' + id,
          replace: true
        })
      }
    },
    created() {
      if (this.rating) {
        this.ratingStars = this.rating
      }
    }
  }
</script>

<template>
  <div v-if="this.$route.params.category != null">
    <div
      v-if="
        this.category
          .toLowerCase()
          .includes(this.$route.params.category.toLowerCase())
      "
      class="product-box"
      @click="openProduct(this.id)"
    >
      <img id="bg-image" alt="" :src="img" />
      <div class="align-content-mobile">
        <div class="product-title-rating">
          <div style="display: flex">
            <span
              v-for="(color, index) in colors"
              :key="index"
              class="color-circle-one"
              :style="{ backgroundColor: color }"
            />
          </div>
          <div class="review-rating">
            <font-awesome-icon
              :class="{ checked: ratingStars >= 1 }"
              id="star-1"
              class="font-star"
              icon="fa-solid fa-star"
            />
            <font-awesome-icon
              :class="{ checked: ratingStars >= 2 }"
              id="star-2"
              class="font-star"
              icon="fa-solid fa-star"
            />
            <font-awesome-icon
              :class="{ checked: ratingStars >= 3 }"
              id="star-3"
              class="font-star"
              icon="fa-solid fa-star"
            />
            <font-awesome-icon
              :class="{ checked: ratingStars >= 4 }"
              id="star-4"
              class="font-star"
              icon="fa-solid fa-star"
            />
            <font-awesome-icon
              :class="{ checked: ratingStars >= 5 }"
              id="star-5"
              class="font-star"
              icon="fa-solid fa-star"
            />
            <p>({{ ratingcount }})</p>
          </div>
        </div>
        <h3 style="margin: 0px">{{ name }}</h3>
        <p style="margin-top: 2px">{{ category }}</p>

        <h2>{{ price }}:-</h2>
      </div>
    </div>
  </div>
  <div v-else class="product-box" @click="openProduct(this.id)">
    <img id="bg-image" alt="" :src="img" />
    <div class="align-content-mobile">
      <div class="product-title-rating">
        <div style="display: flex">
          <span
            v-for="(color, index) in colors"
            :key="index"
            class="color-circle-one"
            :style="{ backgroundColor: color }"
          />
        </div>
        <div class="review-rating">
          <font-awesome-icon
            :class="{ checked: ratingStars >= 1 }"
            id="star-1"
            class="font-star"
            icon="fa-solid fa-star"
          />
          <font-awesome-icon
            :class="{ checked: ratingStars >= 2 }"
            id="star-2"
            class="font-star"
            icon="fa-solid fa-star"
          />
          <font-awesome-icon
            :class="{ checked: ratingStars >= 3 }"
            id="star-3"
            class="font-star"
            icon="fa-solid fa-star"
          />
          <font-awesome-icon
            :class="{ checked: ratingStars >= 4 }"
            id="star-4"
            class="font-star"
            icon="fa-solid fa-star"
          />
          <font-awesome-icon
            :class="{ checked: ratingStars >= 5 }"
            id="star-5"
            class="font-star"
            icon="fa-solid fa-star"
          />
          <p>({{ ratingcount }})</p>
        </div>
      </div>
      <h3 style="margin: 0px; padding-left: 0.5rem">{{ name }}</h3>
      <p style="margin-top: 2px; padding-left: 0.5rem">{{ category }}</p>
      <h2 style="padding-left: 0.5rem">{{ price }}:-</h2>
    </div>
  </div>
</template>

<style scoped>
  .review-rating {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    height: 20px;
  }

  .review-rating p {
    margin-top: 13px;
    margin-left: 3px;
  }

  .color-circle-one,
  .color-circle-two,
  .color-circle-three,
  .color-circle-four {
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50px;
    margin-right: 8px;
  }

  .font-star {
    color: grey;
    cursor: pointer;
    width: 15px;
    height: 10px;
  }

  .checked {
    color: orange;
  }

  .align-content-mobile {
    padding: 5px;
  }
  .product-title-rating {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  .product-title-rating img {
    margin: 4px 0px 0px auto;
    width: 80px;
    height: 20px;
  }
  .product-box {
    margin: 0px 25px 25px 25px;
    font-size: 1.1rem;
    transition: all 0.2s;
  }
  .product-box:hover {
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.202);
    /* box-shadow: 0 0 40px rgba(2, 84, 44, 0.594); */
    border-radius: 5px;
    cursor: pointer;
  }
  .product-box img {
    max-width: 300px;
    max-height: 350px;
    width: 250px;
    height: 250px;
    object-fit: cover;
    transition: all 0.4;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .product-box h2 {
    font-size: 2.2rem;
    margin-bottom: 0px;
  }

  @media (max-width: 760px) {
    align-content-mobile h2 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 960px) {
    .align-content-mobile {
      width: 100%;
      margin-left: 10px;
    }
    .product-title-rating {
      align-items: start;
      justify-content: center;
      align-items: center;
    }
    .product-title-rating img {
      width: 85px;
      height: 30px;
      margin-top: 2px;
      margin-right: 8px;
    }
    .product-box {
      width: 100%;
      display: flex;
    }
    .product-box img {
      max-width: 175px;
      max-height: 175px;
      object-fit: cover;
      transition: all 0.4;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
  }
  @media (max-width: 560px) {
    .product-box {
      margin: 0px 0px 25px 0px;
    }
  }
</style>
