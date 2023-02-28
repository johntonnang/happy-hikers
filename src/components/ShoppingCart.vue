<template>
  <div class="shopping-cart">
    <div class="cart-items">
      <div v-for="item in cart" :key="item.id">
        {{ item.name }} - {{ item.price }}
      </div>
    </div>
    <div class="cart-total">Total: {{ totalPrice }}</div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['cart', 'totalPrice'])
    }
  }
</script>

<style>
  .shopping-cart {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 10px;
  }
</style>
