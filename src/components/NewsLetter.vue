<script>
  export default {
    data() {
      return {
        x: 'block'
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
    /* margin-right: 100%; */
  }
  #h1-news {
    color: rgba(2, 70, 2, 0.716);
    font-weight: bold;
  }

  h5 {
    font-weight: bold;
  }

  h5,
  p {
    color: rgb(80, 77, 77);
  }

  #newsletter {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    /*margin-bottom: 5%;
    border-radius: 5px;
    transition: width 2s, height 4s; */
    width: 40px;
    height: 200px;
    right: 0%;
    top: 50%;
    position: fixed;
    z-index: 4;
  }

  #newsletter:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    padding: 15px;
    border-radius: 5px;
    transition: width 2s, height 4s;
    width: 500px;
    height: 300px;
    overflow: hidden;
    /* opacity: 1; */
    /* position: fixed;
    z-index: 4; */
  }

  #align-text {
    text-align: center;
    /* opacity: 0; */
  }

  #align-text:hover {
    /* opacity: 1; */
  }

  button {
    color: black;
    background-color: white;
    border-color: 1px black;
  }

  button:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  input {
    border-bottom: 3px black;
  }

  form {
    display: flex;
    justify-content: center;
  }
</style>
