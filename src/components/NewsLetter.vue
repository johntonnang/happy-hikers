<script>
  export default {
    data() {
      return {
        x: 'none'
      }
    },
    methods: {
      closeNewsletter() {
        if (this.x.style.display === 'none') {
          this.x.style.display = 'block'
        } else {
          this.x.style.display = 'none'
        }
      }
    }
  }
</script>

<template>
  <main id="container">
    <div id="newsletter">
      <button id="close-button" @click="closeNewsletter">X</button>
      <div id="align-text">
        <h1 id="h1-news">Newsletter</h1>
        <h5>Join us</h5>

        <p>
          Do you love outdoor activities like hiking, camping, or rock climbing?
          Our online store has everything you need for your next adventure.
          Subscribe to our newsletter for the latest products, helpful tips, and
          exclusive deals. Enter your email and start receiving updates today.
        </p>

        <!-- <div id=" align-form"> -->
        <form>
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" Enter your email"
          />
          <button>Submit</button>
        </form>
      </div>
      <!-- </div> -->
    </div>
  </main>
</template>

<style>
  #container {
    display: flex;
    justify-content: right;
  }
  #close-button {
    border: none;
    font-size: large;
    font-weight: bold;
  }
  #h1-news {
    color: rgba(4, 92, 4, 0.716);
    font-weight: bold;
  }

  h5 {
    font-weight: bold;
  }

  h5,
  p {
    color: rgb(191, 186, 186);
  }

  #newsletter {
    background-color: rgb(34, 34, 34);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 30px;
    height: 100px;
    right: 0%;
    top: 30%;
    position: fixed;
    z-index: 4;
    opacity: 0.9;
    border-radius: 5%;
  }

  #newsletter:hover {
    padding: 15px;
    border-radius: 5px;
    transition: width 2s, height 4s;
    width: 500px;
    height: 200px;
    padding-bottom: 25%;
    overflow: hidden;
    /* opacity: 0.9; */
  }

  #align-text {
    text-align: center;
    opacity: 0;
  }

  #align-text:hover {
    opacity: 1;
  }

  button {
    color: rgb(234, 232, 232);
    background-color: rgb(34, 34, 34);
    border-color: 1px black;
  }

  button:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  form {
    display: flex;
    justify-content: center;
  }
</style>
