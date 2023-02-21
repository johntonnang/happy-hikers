<script>
  export default {
    data() {
      return { product: '', products: '', CartText: '+  Add to cart   ' }
    },
    created() {
      fetch('/assets/api.JSON')
        .then((response) => response.json())
        .then((result) => {
          this.products = result
          for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === Number(this.$route.params.id)) {
              this.product = this.products[i]
              console.log(this.product)
            }
          }
        })
    },
    methods: {
      addToCart() {
        if (localStorage.getItem('Cart') !== null) {
          let cart = JSON.parse(localStorage.getItem('Cart'))
          cart.push(this.product.id)
          localStorage.setItem('Cart', JSON.stringify(cart))
          console.log(localStorage.getItem('Cart') + '1')
        } else {
          let cart = [this.product.id]
          localStorage.setItem('Cart', JSON.stringify(cart))
          console.log(localStorage.getItem('Cart') + '2')
        }
        setTimeout(() => (this.CartText = 'Remove from Cart'), 2000)
      }
    }
  }
</script>
<style scoped>
  main {
    position: relative;
    top: 100px;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }
  .product-img {
    width: 50%;
    object-fit: cover;
  }
  section {
    display: flex;
  }
  .product-information {
    margin-left: 2rem;
    width: 50%;
  }
  .product-name {
    font-size: 2em;
  }
  .product-price {
    font-weight: 700;
  }
  .product-size {
    background-color: rgba(255, 255, 255, 0);
    border: 1px solid;
    border-radius: 5px;
    padding: 0.7rem;
    transition: all 0.35s;
  }
  .product-size:hover {
    background-color: rgb(44, 44, 44);
    color: white;
  }
  .product-btn {
    width: 45%;
    margin-right: 5%;
    margin-top: 1.5rem;
    padding: 1rem;
    background-color: #579d5d;
    border-radius: 3px;
    border: 0px solid;
    font-weight: 400;
    transition: all 0.35s;
  }
  .product-btn:hover {
    background-color: rgb(0, 0, 0);
    color: #579d5d;
    border-radius: 3px;
    border: 0px solid;
    font-weight: 400;
  }
  .product-wishlist {
    background-color: #b1ea38;
  }
  .product-wishlist:hover {
    background-color: black;
    color: #b1ea38;
  }
  .product-return {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  .product-return-text {
    font-weight: lighter;
    margin: 0px;
    margin-left: 5px;
    line-height: 1;
  }

  .product-return-container {
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 900px) {
    section {
      display: grid;
    }
    main {
      width: 95%;
    }
    .product-information {
      margin-top: 20px;
      width: 100%;
      margin-left: 0px;
    }
    .product-img {
      width: 100%;
    }
  }
</style>
<template>
  <main>
    <p>Hem / Produkter / Jackor</p>
    <section>
      <img :src="product.image" alt="Img of the product" class="product-img" />
      <div class="product-information">
        <h2 class="product-name">{{ product.name }}</h2>
        <h2 class="product-price">{{ product.price }}:-</h2>
        <p class="product-description">
          {{ product.description }}
        </p>
        <select class="product-size" type="option">
          <option value="" disabled selected hidden>Choose a size</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXl">XXL</option>
        </select>
        <div class="product-btns">
          <input
            @click="addToCart"
            class="product-btn"
            type="button"
            :value="CartText"
          />
          <input
            class="product-btn product-wishlist"
            type="button"
            value="Add to wishlist"
          />
        </div>
        <div class="product-return-container">
          <div class="product-return">
            <img src="/assets/check.svg" alt="" />
            <p class="product-return-text"><b>30</b> day price guarantee</p>
          </div>
          <div class="product-return">
            <img src="/assets/check.svg" alt="" />
            <p class="product-return-text">
              <b>Free</b> return & right of exchange
            </p>
          </div>
          <div class="product-return">
            <img src="/assets/check.svg" alt="" />
            <p class="product-return-text">
              <b>Free shipping</b> on orders over 399:-
            </p>
          </div>
          <div class="product-return">
            <img src="/assets/check.svg" alt="" />
            <p class="product-return-text"><b>365</b> days open purchase</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
