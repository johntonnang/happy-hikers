<script>
  export default {
    data() {
      return {
        // Shows newsletter popup
        showPopup: true,
        // Hides confirmation
        showConfirmationPopup: false,
        email: ''
      }
    },

    methods: {
      //  Close popup
      closePopup() {
        this.showPopup = false
      },
      // show confirmation
      showConfirmation() {
        this.showConfirmationPopup = true
      }
    }
  }
</script>

<template>
  <!-- If showPopup is true do this -->
  <main id="container" v-if="showPopup">
    <div id="newsletter">
      <button id="popup-close" @click="closePopup">X</button>

      <!-- if showConfirmationPopup false do this -->
      <div v-if="!showConfirmationPopup" id="align-text">
        <h1 id="h1-news">Newsletter</h1>
        <h5>Join us</h5>
        <div id="paragraph">
          <p>
            Do you love outdoor activities like hiking, camping, or rock
            climbing? Our online store has everything you need for your next
            adventure. Subscribe to our newsletter for the latest products,
            helpful tips, and exclusive deals. Enter your email and start
            receiving updates today.
          </p>
        </div>

        <!-- When user click Submit confirmation will show -->
        <form @submit.prevent="showConfirmation">
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" Enter your email"
            v-model="email"
          />
          <button class="submit-btn">Submit</button>
        </form>
      </div>

      <div v-else id="confirmation-popup">
        <h1>Thank you for subscribing</h1>
        <div id="check-icon">
          <img src="assets/output-onlinegiftools.gif" alt="Checkmark" />
          <span>Redirecting...</span>
        </div>
        <p>We´ll send you uppdates and exclusive deals to: {{ email }}.</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
  #confirmation-popup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  h2 {
    padding-top: 30px;
  }

  #container {
    display: flex;
    justify-content: center;
  }
  #popup-close {
    border: none;
    font-size: large;
    font-weight: bold;
    padding-top: 10px;
    padding-right: 80%;
  }
  h1 {
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
    width: 400px;
    height: 350px;
    /* top: 20%; */
    position: fixed;
    z-index: 99;
    opacity: 0.9;
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #align-text {
    text-align: center;
    opacity: 1;
  }

  button {
    color: rgb(234, 232, 232);
    background-color: rgb(34, 34, 34);
    border: 1px solid black;
    border-radius: 3px;
  }

  .submit-btn:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  input {
    margin-right: 10px;
    width: 50%;
    border-radius: 5px;
    border: 1px solid rgb(179, 179, 179);
    outline: none;
  }

  form {
    display: flex;
    justify-content: center;
  }

  #paragraph {
    padding-left: 20px;
    padding-right: 20px;
  }

  #check-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    margin-top: 20px;
    width: 30px;
    height: 30px;
    opacity: 0.8;
  }

  @media (min-width: 1101px) and (max-width: 1600px) {
    #newsletter {
      width: 500px;
      height: 300px;
      top: 15%;
    }
  }

  @media (min-width: 801px) and (max-width: 1100px) {
    #newsletter {
      width: 500px;
      height: 300px;
      top: 15%;
    }

    #confirmation-popup {
      padding-left: 25px;
      padding-right: 25px;
    }
  }

  /* @media (min-width: 773px) and (max-width: 1100px) {

  } */

  @media (min-width: 551px) and (max-width: 800px) {
    #newsletter {
      width: 350px;
      height: 350px;
      top: 15%;
    }
    #confirmation-popup {
      padding-left: 15px;
      padding-right: 15px;
    }
  }

  @media (min-width: 375px) and (max-width: 550px) {
    /* #container {
      margin-top: 20%;
    } */

    #newsletter {
      width: 300px;
      height: 400px;
      top: 10%;
      padding-bottom: 20px;
    }

    #popup-close {
      margin-top: 20px;
    }

    #confirmation-popup {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
</style>
